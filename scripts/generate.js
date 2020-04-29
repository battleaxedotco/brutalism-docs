#!/usr/bin/env node
const fs = require("fs");
const path = require("path");
const chalk = require('chalk')

async function init() {
  console.log('\r\nConverting MD files to routes and views...\r\n')

  const root = `${path.resolve("./")}/pages/`;
  let files = await readDir(root);


  // console.log(files)
  // return null;

  // Only include .md files for singles
  let singleFiles = files.filter(entry => {
    return /\.md$/.test(entry);
  })

  /**
   * singles expect the following format:
   *
   * pages/
   *  [name].md
   */

  // Include non-md files and verify they're directories for multis
  let multiFiles = files.filter(entry => {
    return !/\..*$/.test(entry);
  }).filter(entry => {
    return fs.lstatSync(`${root}${entry}`).isDirectory();
  })

  /**
   * Multis expect the following format:  
   * 
   * pages/
   *  [name]/
   *    [anchor].md
   *    [anchor].md
   */

  // Assemble router and general template
  let result = [];
  // handle singlefiles
  singleFiles.forEach(file => {
    result.push({
      name: file.replace(/\.md$/, '').replace(' ', '-'),
      data: fs.readFileSync(`${root}/${file}`, "utf8"),
      multi: false,
    })
  })

  // handle multifiles
  for (const file of multiFiles) {
    const location = `${root}${file}`
    let contents = await readDir(`${root}${file}`);
    contents = contents.filter(file => {
      return /\.md$/.test(file);
    })
    let children = []
    contents.forEach(child => {
      children.push({
        name: child.replace(/\.md$/, '').replace(' ', '-'),
        data: fs.readFileSync(`${location}/${child}`, "utf8").trim().replace(/[\r\n]+/g, "\r\n  ")
      })
    })

    result.push({
      name: file,
      children: sortByName(children).reverse(),
      multi: true
    })
  }
  result = sortByName(result);
  // console.log(result)
  // return null;

  let routerFile = 'export default [';
  const viewsFolder = `${path.resolve("./")}/src/views`;
  const routerFolder = `${path.resolve("./")}/src/router`;
  const templateView = fs.readFileSync(`${viewsFolder}/Template.vue`, "utf8")
  const multiTemplateView = fs.readFileSync(`${viewsFolder}/MultiTemplate.vue`, "utf8")
  const childTemplate = fs.readFileSync(`${viewsFolder}/MultiTemplateChild.md`, "utf8")

  result.forEach((file, i) => {
    routerFile += `
    {
      path: "/${file.name == 'Home' ? '' : file.name}",
      name: "${file.name}",
      component: () => import("@/views/${file.multi ? `multi/${file.name}` : file.name}.vue")
    }`
    routerFile += (i !== result.length - 1)
      ? ','
      : `\r\n]`
    if (file.multi) {

      // For multifiles, read folder contents, append as anchors, never rewrite an existing file.
      // I don't have a good way of handing more detailed sections other than generating the base code,
      // then manually tweaking the resulting file to get a better match.

      let multiContent = fs.readFileSync(`${viewsFolder}/MultiTemplate.vue`, "utf8").replace(/\$NAME\$/gm, file.name);

      let totalChildrenContent = ''
      file.children.forEach((child, i) => {
        let codeBlock = childTemplate.replace(/\$NAME\$/gm, child.name).replace('$CONTENT$', child.data
          .replace(/[\r\n]+/g, "\r\n       "))

        totalChildrenContent += codeBlock
        if (i < file.children.length - 1) totalChildrenContent = totalChildrenContent + '\r\n'
      })
      multiContent = multiContent.replace(/\$CHILD\$/, totalChildrenContent);
      let targetMultiPath = `${viewsFolder}/multi/${file.name}.vue`
      if (!exists(targetMultiPath)) fs.writeFileSync(targetMultiPath, multiContent);
    } else {
      fs.writeFileSync(`${viewsFolder}/${file.name}.vue`, templateView);
    }
  })
  console.log(` ✔ ${chalk.black.bgBlue(`./src/pages/ `)}`)

  fs.writeFileSync(`${routerFolder}/routes.js`, routerFile);
  console.log(` ✔ ${chalk.black.bgBlue(`./src/router/routes.js `)}`)

  const target = `${path.resolve('./')}/src/template.json`

  fs.writeFileSync(target, JSON.stringify(result));
  console.log(` ✔ ${chalk.black.bgBlue(`./src/template.json `)}`);

  console.log('')
  console.log(`${chalk.black.bgGreen(` ALL DONE `)}`)
  console.log('')
}

function sortByName(files) {
  return files.sort((a, b) => {
    a = a.name, b = b.name;
    // Always sort 'Home.md' as first item
    if (/home/i.test(a)) return -1;
    else if (/home/i.test(b)) return 1;
    else {
      // If items have same first word, sort shorter before longer:
      if (/.*\-/.test(a) || /.*\-/.test(b)) {
        let matchesA = a.match(/(.*)\-[^\.]*/);
        let matchesB = b.match(/(.*)\-[^\.]*/);
        try {
          if (matchesA && matchesA.length) {
            let comparator = new RegExp(matchesA[1])
            if (comparator.test(b)) return 1;
            else return a.localeCompare(b)
          } else if (matchesB && matchesB.length) {
            let comparator = new RegExp(matchesB[1])
            if (comparator.test(a)) return -1;
            else return a.localeCompare(b)
          } else return a.localeCompare(b)
        } catch (err) {
          console.log('Problem with:', a, b)
        }
      } else return a.localeCompare(b)
      // Otherwise compare alphanumerically in any other case
    }
  })
}

async function readDir(thispath) {
  return new Promise((resolve, reject) => {
    fs.readdir(
      path.resolve(thispath),
      { encoding: "utf-8" },
      (err, files) => {
        if (err) reject(err);
        resolve(files);
      }
    );
  });
}

function exists(thispath) {
  return fs.existsSync(thispath);
}

init();
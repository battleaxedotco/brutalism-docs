#!/usr/bin/env node
const fs = require("fs");
const path = require("path");
const chalk = require('chalk')

async function init() {
  console.log('\r\nConverting MD files to routes and views...\r\n')

  const root = `${path.resolve("./")}/pages/`;
  let files = await readDir(root);

  // Only include .md files
  files = files.filter(entry => {
    return /\.md$/.test(entry);
  }).sort((a, b) => {
    // Always sort 'Home.md' as first item
    if (/home/i.test(a)) return -1;
    else if (/home/i.test(b)) return 1;
    else {
      // If items have same first word, sort shorter before longer:
      if (/.*\-/.test(a) || /.*\-/.test(b)) {
        let matchesA = a.match(/(.*)\-[^\.]*/);
        let matchesB = b.match(/(.*)\-[^\.]*/);
        if (matchesA.length) {
          let comparator = new RegExp(matchesA[1])
          if (comparator.test(b)) return 1;
          else return a.localeCompare(b)
        } else if (matchesB.length) {
          let comparator = new RegExp(matchesB[1])
          if (comparator.test(a)) return -1;
          else return a.localeCompare(b)
        } else return a.localeCompare(b)
      } else return a.localeCompare(b)
      // Otherwise compare alphanumerically
    }
  })

  let result = [];
  files.forEach(file => {
    result.push({
      name: file.replace(/\.md$/, '').replace(' ', '-'),
      data: fs.readFileSync(`${root}/${file}`, "utf8")
    })
  })

  let routerFile = 'export default [';
  const viewsFolder = `${path.resolve("./")}/src/views`;
  const routerFolder = `${path.resolve("./")}/src/router`;
  const templateView = fs.readFileSync(`${viewsFolder}/Template.vue`, "utf8")

  result.forEach((file, i) => {
    routerFile += `
    {
      path: "/${file.name == 'Home' ? '' : file.name}",
      name: "${file.name}",
      component: () => import("@/views/${file.name}.vue")
    }`
    routerFile += (i !== result.length - 1)
      ? ','
      : `\r\n]`
    fs.writeFileSync(`${viewsFolder}/${file.name}.vue`, templateView);
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

function exists(thispath) {
  return fs.existsSync(thispath);
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

init();
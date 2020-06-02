#!/usr/bin/env node
const fs = require("fs");
const path = require("path");
const chalk = require("chalk");

async function init() {
  console.log("\r\nConverting MD files to routes and views...\r\n");

  const root = `${path.resolve("./")}/pages/`;
  let files = await readDir(root);

  // console.log(files)
  // return null;

  // Only include .md files for singles
  let singleFiles = files.filter((entry) => {
    return /\.md$/.test(entry);
  });

  /**
   * singles expect the following format:
   *
   * pages/
   *  [name].md
   */

  // Include non-md files and verify they're directories for multis
  let multiFiles = files
    .filter((entry) => {
      return !/\..*$/.test(entry);
    })
    .filter((entry) => {
      return fs.lstatSync(`${root}${entry}`).isDirectory();
    });

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
  singleFiles.forEach((file) => {
    result.push({
      name: file.replace(/\.md$/, "").replace(" ", "-"),
      data: fs.readFileSync(`${root}/${file}`, "utf8"),
      multi: false,
    });
  });

  // handle multifiles
  for (const file of multiFiles) {
    const location = `${root}${file}`;
    let contents = await readDir(`${root}${file}`);
    let hasTable = contents.filter((file) => {
      return /table\.js/.test(file);
    });
    hasTable = hasTable && hasTable.length;
    hasTable = hasTable
      ? fs.readFileSync(`${root}/${file}/table.js`, "utf8").length > 0
      : false;
    contents = contents.filter((file) => {
      return /\.md$/.test(file);
    });
    let children = [];
    contents.forEach((child) => {
      children.push({
        name: child.replace(/\.md$/, "").replace(" ", "-"),
        data: fs
          .readFileSync(`${location}/${child}`, "utf8")
          .trim()
          .replace(/[\r\n]+/g, "\r\n  "),
      });
    });
    let temp = {
      name: file,
      children: sortByName(children).reverse(),
      multi: true,
    };
    if (hasTable) {
      temp["table"] = `${fs
        .readFileSync(`${root}/${file}/table.js`, "utf8")
        .replace("export default ", "")
        .replace(/\s{1,}/gm, " ")
        .replace(";", "")}`;
      temp.table = eval("(" + temp.table + ")");

      // IF NEEDING TO CREATE JSONS:
      // fs.writeFileSync(`${root}/${file}/table.json`, temp.table);
    }

    result.push(temp);
  }
  result = sortByName(result);

  // console.log(result);

  const docsFolder = `${path.resolve("./")}/docs`;

  result.forEach((item, i) => {
    if (!/colors|functions/i.test(item.name)) {
      let fullFile = `# ${item.name}\r\n\r\n`;

      console.log(item.name, i);
      if (item.children && item.children.length) {
        // if (i == 1) {
        // console.log(item);
        item.children.forEach((child) => {
          let block = `## ${child.name} \r\n\r\n\`\`\`html\r\n`;
          block += "  " + child.data;
          block += `\r\n\`\`\`\r\n\r\n`;
          block += createTableFromChild(item, child.name);
          block += "\r\n";
          fullFile += block;
        });
        // console.log(fullFile);
        // }
      }
      if (!fs.existsSync(`${docsFolder}/${item.name}`)) {
        fs.mkdirSync(`${docsFolder}/${item.name}`);
      }
      fs.writeFileSync(`${docsFolder}/${item.name}/README.md`, fullFile);
    }
  });
  console.log("");
  console.log(`${chalk.black.bgGreen(` ALL DONE `)}`);
  console.log("");
  return null;
  // let routerFile = "export default [";
  // const viewsFolder = `${path.resolve("./")}/src/views`;
  // const templateView = fs.readFileSync(`${viewsFolder}/Template.vue`, "utf8");
  // const multiTemplateView = fs.readFileSync(
  //   `${viewsFolder}/MultiTemplate.vue`,
  //   "utf8"
  // );
  // const childTemplate = fs.readFileSync(
  //   `${viewsFolder}/MultiTemplateChild.md`,
  //   "utf8"
  // );

  // result.forEach((file, i) => {
  //   routerFile += `
  //   {
  //     path: "/${file.name == "Home" ? "" : file.name}",
  //     name: "${file.name}",
  //     component: () => import("@/views/${
  //       file.multi ? `multi/${file.name}` : file.name
  //     }.vue")
  //   }`;
  //   routerFile += i !== result.length - 1 ? "," : `\r\n]`;
  //   if (file.multi) {
  //     // For multifiles, read folder contents, append as anchors, never rewrite an existing file.
  //     // I don't have a good way of handing more detailed sections other than generating the base code,
  //     // then manually tweaking the resulting file to get a better match.

  //     let multiContent = fs
  //       .readFileSync(`${viewsFolder}/MultiTemplate.vue`, "utf8")
  //       .replace(/\$NAME\$/gm, file.name)
  //       .replace(/\$LNAME\$/gm, file.name.toLowerCase());

  //     let totalChildrenContent = "";
  //     file.children.forEach((child, i) => {
  //       let codeBlock = childTemplate
  //         .replace(/\$NAME\$/gm, child.name)
  //         .replace(/\$LNAME\$/gm, file.name.toLowerCase())
  //         .replace("$CONTENT$", child.data.replace(/[\r\n]+/g, "\r\n       "));

  //       totalChildrenContent += codeBlock;
  //       if (i < file.children.length - 1)
  //         totalChildrenContent = totalChildrenContent + "\r\n";
  //     });
  //     multiContent = multiContent.replace(/\$CHILD\$/, totalChildrenContent);
  //     let targetMultiPath = `${viewsFolder}/multi/${file.name}.vue`;
  //     if (!exists(targetMultiPath))
  //       fs.writeFileSync(targetMultiPath, multiContent);
  //   } else {
  //     let targetPath = `${viewsFolder}/${file.name}.vue`;
  //     if (!exists(targetPath)) fs.writeFileSync(targetPath, templateView);
  //   }
  // });
  // console.log(` ✔ ${chalk.black.bgBlue(`./src/pages/ `)}`);

  // fs.writeFileSync(`${routerFolder}/routes.js`, routerFile);
  // console.log(` ✔ ${chalk.black.bgBlue(`./src/router/routes.js `)}`);

  // const target = `${path.resolve("./")}/src/template.json`;

  // fs.writeFileSync(target, JSON.stringify(result));
  // console.log(` ✔ ${chalk.black.bgBlue(`./src/template.json `)}`);

  // console.log("");
  // console.log(`${chalk.black.bgGreen(` ALL DONE `)}`);
  // console.log("");
}

function createTableFromChild(item, name) {
  let str = "";
  if (/props/i.test(name)) name = "Properties";
  let table = null;
  if (
    !Object.keys(item).includes("table") ||
    !Object.keys(item.table).includes(name.toLowerCase())
  )
    return "";
  if (item.table[name.toLowerCase()]) table = item.table[name.toLowerCase()];
  if (!table) {
    console.log(`Problem with > ${name}`);
    console.log(item);
  } else {
    table.fields.forEach((field, index) => {
      str += `| ${field}${index == table.fields.length - 1 ? " |" : " "}`;
    });
    str += "\r\n";
    table.fields.forEach((field, index) => {
      if (index < 1) str += "|:---";
      else if (index == table.fields.length - 1) str += "| ---:|";
      else str += "|:---";
    });
    str += "\r\n";
    table.data.forEach((field) => {
      Object.keys(field).forEach((entry, e) => {
        if (e == Object.keys(field).length - 1) str += `| ${field[entry]} |`;
        else str += `| ${field[entry]} `;
      });
      str += "\r\n";
    });
  }
  return str;
}

function sortByName(files) {
  return files.sort((a, b) => {
    (a = a.name), (b = b.name);
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
            let comparator = new RegExp(matchesA[1]);
            if (comparator.test(b)) return 1;
            else return a.localeCompare(b);
          } else if (matchesB && matchesB.length) {
            let comparator = new RegExp(matchesB[1]);
            if (comparator.test(a)) return -1;
            else return a.localeCompare(b);
          } else return a.localeCompare(b);
        } catch (err) {
          console.log("Problem with:", a, b);
        }
      } else return a.localeCompare(b);
      // Otherwise compare alphanumerically in any other case
    }
  });
}

async function readDir(thispath) {
  return new Promise((resolve, reject) => {
    fs.readdir(path.resolve(thispath), { encoding: "utf-8" }, (err, files) => {
      if (err) reject(err);
      resolve(files);
    });
  });
}

function exists(thispath) {
  return fs.existsSync(thispath);
}

init();

#!/usr/bin/env node
const fs = require("fs");
const path = require("path");

async function init() {
  const root = `${path.resolve("./")}/pages/`;
  let files = await readDir(root);
  files = files.filter(entry => {
    return /\.md$/.test(entry);
  });

  let result = [];
  files.forEach(file => {
    result.push({
      name: file.replace(/\.md$/, ''),
      data: fs.readFileSync(`${root}/${file}`, "utf8")
    })
  })
  const target = `${path.resolve('./')}/src/template.json`
  fs.writeFileSync(target, JSON.stringify(result));
  console.log(`Template rewritten to ${target}`);
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
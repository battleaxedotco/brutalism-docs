# brutalism-docs

## Automated deployment to GitHub pages:

### 1) In package.json, add the following:

```js
"scripts": {
    "gh-pages-deploy": "node scripts/gh-pages-deploy.js"
  }

  // ...

  "devDependencies": {
    "execa": "^4.0.0",
  }
```

### 2) Run `npm install` and commit this to save the package.json contents

### 3) Create `./.github/workflows/gh-pages-deploy.yml` with the following:

```yml
  name: Deploy to github pages
  on:
    push:
      branches:
        - master
  jobs:
    gh-pages-deploy:
      name: Deploying to gh-pages
      runs-on: ubuntu-latest
      steps:
        - name: Setup Node.js for use with actions
          uses: actions/setup-node@v1.1.0
          with:
            version:  12.x
        - name: Checkout branch
          uses: actions/checkout@v2

        - name: Clean install dependencies
          run: npm ci

        - name: Run deploy script
          run: |
            git config user.name "Inventsable" && git config user.email "tom@inventsable.cc"
            npm run gh-pages-deploy
```

> Notice in the last two lines, I'm using my GitHub account and associated email. Replace with your own

### 4) Create `./scripts/gh-pages-deploy.js` with the following:

```js
const execa = require("execa");
const fs = require("fs");

(async () => {
  try {
    await execa("git", ["checkout", "--orphan", "gh-pages"]);
    console.log("Automating deployment...");
    await execa("npm", ["run", "build"]);
    const folderName = fs.existsSync("dist") ? "dist" : "build";
    await execa("git", ["--work-tree", folderName, "add", "--all"]);
    await execa("git", ["--work-tree", folderName, "commit", "-m", "Automated deploy to GitHub Pages"]);
    console.log("Pushing to gh-pages branch...");
    await execa("git", ["push", "origin", "HEAD:gh-pages", "--force"]);
    await execa("rm", ["-r", folderName]);
    await execa("git", ["checkout", "-f", "master"]);
    await execa("git", ["branch", "-D", "gh-pages"]);
    console.log("Successfully deployed");
  } catch (e) {
    console.log(e.message);
    process.exit(1);
  }
})();
```

### 5) Commit and push this to any repo. GitHub will detect the action and automatically perform it.
<!-- In App.js or any router page -->
<div id="app">
  <Panel
    script-path="./host/[appName]/host.jsx"
    utils="./host/utils"
  >
    <!-- Content or router-view goes inside Panel as a slot -->
    <router-view />
  </Panel>
</div>
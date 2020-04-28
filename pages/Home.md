## Demo

<div class="centered"><iframe style="overflow: scroll;" width="500" height="710" seamless frameborder="0" scrolling="yes" src="https://brutalism.netlify.app/#/"> </iframe></div>

## Getting Started

#### [Bombino](https://github.com/Inventsable/bombino) takes care of all this for you, only do the below if installing the library manually.

### Within `./src/main.js` (to use anywhere in project with no need to import per component file):

```js
// Import the desired components
import { Panel, Menus } from "brutalism";

// Assign them as global components to the Vue instance
Vue.use("Panel", Panel);
Vue.use("Menus", Menus);

// Be sure to do so before instantiating Vue:
new Vue({
	router,
	render: h => h(App)
}).$mount("#app");
```

### Within `App.vue` or a given .vue file:

```html
<script>
// Import as many or few components as you need
import { Panel, Menus } from 'brutalism';

export default {
  components: {
    Panel,
    Menus
  }
}
</script>
```

---

## Templates

Quickstart templates with [bombino](https://github.com/Inventsable/bombino) to get you up and running in less than a minute:

- [Brutalism Basic](https://github.com/battleaxedotco/bombino-brutalism-basic)
- [Brutalism Router](https://github.com/battleaxedotco/bombino-brutalism-router)
- [Brutalism Vuex](https://github.com/battleaxedotco/bombino-brutalism-router)
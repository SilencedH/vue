<template>
  <v-app>
    <v-navigation-drawer app>
      <ul>
        <li v-for="item in layouts" :key="item.index">
          <router-link :to="item.router">{{ item.title }}</router-link>
        </li>
      </ul>
    </v-navigation-drawer>
    <v-toolbar app>
      <h2>Ripples</h2>
    </v-toolbar>
    <v-content>
      <v-container fluid>
      </v-container>
    </v-content>
    <v-footer app></v-footer>
  </v-app>
</template>

<script>
export default {
  name: 'Ripples',
  data() {
    return {
      layouts: [
        {
          index: 1,
          title: 'Buttons',
          router: '/ripples/buttons'
        },
        {
          index: 2,
          title: "CustomColor",
          router: "/ripples/customColor"
        },
        {
          index: 3,
          title: "CustomRipple",
          router: "/ripples/customRipple"
        },
        {
          index: 4,
          title: "ExpansionPanels",
          router: "/ripples/expansionPanels"
        },
        {
          index: 5,
          title: 'HtmlElement',
          router: '/ripples/htmlElement'
        },
        {
          index: 6,
          title: "NavigationDrawers",
          router: "/ripples/navigationDrawers"
        },
        {
          index: 7,
          title: "Tabs",
          router: "/ripples/tabs"
        },
        {
          index: 8,
          title: "Toolbars",
          router: "/ripples/toolbars"
        }
      ]
    }
  }
}
</script>

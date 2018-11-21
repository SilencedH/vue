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
      <h2>Menus</h2>
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
  name: 'Menus',
  data() {
    return {
      layouts: [
        {
          index: 1,
          title: 'Absolute',
          router: '/menus/absolute'
        },
        {
          index: 2,
          title: "AbsoluteWithoutActivator",
          router: "/menus/absoluteWithoutActivator"
        },
        {
          index: 3,
          title: "Activator",
          router: "/menus/activator"
        },
        {
          index: 4,
          title: "CustomTransition",
          router: "/menus/customTransition"
        },
        {
          index: 5,
          title: 'Hover',
          router: '/menus/hover'
        },
        {
          index: 6,
          title: "Index",
          router: "/menus/index"
        },
        {
          index: 7,
          title: "Popover",
          router: "/menus/popover"
        }
      ]
    }
  }
}
</script>

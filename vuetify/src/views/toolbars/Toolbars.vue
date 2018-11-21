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
      <h2>Toolbars</h2>
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
  name: 'Toolbars',
  data() {
    return {
      layouts: [
        {
          index: 1,
          title: 'AppBar',
          router: '/toolbars/appBar'
        },
        {
          index: 2,
          title: "AppBarExtension",
          router: "/toolbars/appBarExtension"
        },
        {
          index: 3,
          title: "AppBarItems",
          router: "/toolbars/appBarItems"
        },
         {
          index: 4,
          title: 'AppBarMenu',
          router: '/toolbars/appBarMenu'
        },
        {
          index: 5,
          title: "ColumnWidthWithHierarchy",
          router: "/toolbars/columnWidthWithHierarchy"
        },
        {
          index: 6,
          title: "Dense",
          router: "/toolbars/dense"
        },
         {
          index: 7,
          title: 'FlexibleAndCard',
          router: '/toolbars/flexibleAndCard'
        },
        {
          index: 8,
          title: "FloatingWithSearch",
          router: "/toolbars/floatingWithSearch"
        },
        {
          index: 9,
          title: "Prominent",
          router: "/toolbars/prominent"
        },
         {
          index: 10,
          title: 'Scrolling',
          router: '/toolbars/scrolling'
        },
        {
          index: 11,
          title: "SystemBarsStatusWindow",
          router: "/toolbars/systemBarsStatusWindow"
        },
        {
          index: 12,
          title: "Usage",
          router: "/toolbars/usage"
        },
         {
          index: 13,
          title: 'Variations',
          router: '/toolbars/variations'
        }
      ]
    }
  }
}
</script>

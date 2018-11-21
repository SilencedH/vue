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
      <h2>Tabs</h2>
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
  name: 'Tabs',
  data() {
    return {
      layouts: [
        {
          index: 1,
          title: 'AlignWithTitle',
          router: '/tabs/alignWithTitle'
        },
        {
          index: 2,
          title: "Centered",
          router: "/tabs/centered"
        },
        {
          index: 3,
          title: "Content",
          router: "/tabs/content"
        },
         {
          index: 4,
          title: 'Desktop',
          router: '/tabs/desktop'
        },
        {
          index: 5,
          title: "FixedTabs",
          router: "/tabs/fixedTabs"
        },
        {
          index: 6,
          title: "Grow",
          router: "/tabs/grow"
        },
         {
          index: 7,
          title: 'Icons',
          router: '/tabs/icons'
        },
        {
          index: 8,
          title: "IconsAndText",
          router: "/tabs/iconsAndText"
        },
        {
          index: 9,
          title: "OverflowToMenu",
          router: "/tabs/overflowToMenu"
        },
         {
          index: 10,
          title: 'Pagination',
          router: '/tabs/pagination'
        },
        {
          index: 11,
          title: "Right",
          router: "/tabs/right"
        },
        {
          index: 12,
          title: "Search",
          router: "/tabs/search"
        },
         {
          index: 13,
          title: 'Toolbar',
          router: '/tabs/toolbar'
        }
      ]
    }
  }
}
</script>

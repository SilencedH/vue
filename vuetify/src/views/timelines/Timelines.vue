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
      <h2>Timelines</h2>
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
  name: 'Timelines',
  data() {
    return {
      layouts: [
        {
          index: 1,
          title: 'Advanced',
          router: '/timelines/advanced'
        },
        {
          index: 2,
          title: "Alert",
          router: "/timelines/alert"
        },
        {
          index: 3,
          title: "Color",
          router: "/timelines/color"
        },
         {
          index: 4,
          title: 'Icons',
          router: '/timelines/icons'
        },
        {
          index: 5,
          title: "Slot",
          router: "/timelines/slot"
        },
        {
          index: 6,
          title: "Small",
          router: "/timelines/small"
        },
         {
          index: 7,
          title: 'Usage',
          router: '/timelines/usage'
        }
      ]
    }
  }
}
</script>

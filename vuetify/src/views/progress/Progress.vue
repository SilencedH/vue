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
      <h2>Progress</h2>
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
  name: 'Progress',
  data() {
    return {
      layouts: [
        {
          index: 1,
          title: 'CircularColored',
          router: '/progress/circularColored'
        },
        {
          index: 2,
          title: "CircularDefault",
          router: "/progress/circularDefault"
        },
        {
          index: 3,
          title: "CircularIndeterminate",
          router: "/progress/circularIndeterminate"
        },
         {
          index: 4,
          title: 'CircularRotate',
          router: '/progress/circularRotate'
        },
        {
          index: 5,
          title: "CircularSizeAndWidth",
          router: "/progress/circularSizeAndWidth"
        },
        {
          index: 6,
          title: "LinearBuffer",
          router: "/progress/linearBuffer"
        },
         {
          index: 7,
          title: 'LinearCustomColors',
          router: '/progress/linearCustomColors'
        },
        {
          index: 8,
          title: "LinearCustomHeightAndContextualColors",
          router: "/progress/linearCustomHeightAndContextualColors"
        },
        {
          index: 9,
          title: "LinearDeterminate",
          router: "/progress/linearDeterminate"
        },
         {
          index: 10,
          title: 'LinearIndeterminate',
          router: '/progress/linearIndeterminate'
        },
        {
          index: 11,
          title: "LinearQueryIndeterminateAndDeterminate",
          router: "/progress/linearQueryIndeterminateAndDeterminate"
        }
      ]
    }
  }
}
</script>

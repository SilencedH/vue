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
      <h2>Tooltips</h2>
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
  name: 'Tooltips',
  data() {
    return {
      layouts: [
        {
          index: 1,
          title: 'Alignment',
          router: '/tooltips/alignment'
        },
        {
          index: 2,
          title: "Default",
          router: "/tooltips/default"
        },
        {
          index: 3,
          title: "Visibility",
          router: "/tooltips/visibility"
        }
      ]
    }
  }
}
</script>

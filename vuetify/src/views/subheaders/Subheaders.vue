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
      <h2>Subheaders</h2>
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
  name: 'Subheaders',
  data() {
    return {
      layouts: [
        {
          index: 1,
          title: 'Grid',
          router: '/subheaders/grid'
        },
        {
          index: 2,
          title: "List",
          router: "/subheaders/list"
        },
        {
          index: 3,
          title: "Menu",
          router: "/subheaders/menu"
        },
        {
          index: 4,
          title: "Social",
          router: "/subheaders/social"
        }
      ]
    }
  }
}
</script>

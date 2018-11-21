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
      <h2>Cards</h2>
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
  name: 'Cards',
  data() {
    return {
      layouts: [
        {
          index: 1,
          title: 'Components',
          router: '/cards/compnents'
        },
        {
          index: 2,
          title: 'CustomActions',
          router: '/cards/customActions'
        },
        {
          index: 3,
          title: "Grids",
          router: "/cards/grids"
        },
        {
          index: 4,
          title: "Horizontal",
          router: "/cards/horizontal"
        },
        {
          index: 5,
          title: "MediaWithText",
          router: "/cards/mediaWithText"
        }
      ]
    }
  }
}
</script>

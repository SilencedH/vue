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
      <h2>BottomSheets</h2>
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
  name: 'BottomSheets',
  data() {
    return {
      layouts: [
        {
          index: 1,
          title: 'Inset',
          router: '/bottomSheets/inset'
        },
        {
          index: 2,
          title: 'Standard',
          router: '/bottomSheets/standard'
        }
      ]
    }
  }
}
</script>

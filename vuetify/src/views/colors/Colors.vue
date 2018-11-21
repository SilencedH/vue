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
      <h2>Colors</h2>
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
  name: 'Colors',
  data() {
    return {
      layouts: [
        {
          index: 1,
          title: 'Classes',
          router: '/colors/classes'
        },
        {
          index: 2,
          title: 'ColorPack',
          router: '/colors/colorPack'
        },
        {
          index: 3,
          title: "TextClasses",
          router: "/colors/textClasses"
        }
      ]
    }
  }
}
</script>

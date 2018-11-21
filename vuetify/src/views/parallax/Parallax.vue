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
      <h2>Parallax</h2>
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
  name: 'Parallax',
  data() {
    return {
      layouts: [
        {
          index: 1,
          title: 'Content',
          router: '/parallax/content'
        },
        {
          index: 2,
          title: "CustomHeight",
          router: "/parallax/customHeight"
        },
        {
          index: 3,
          title: "Default",
          router: "/parallax/default"
        }
      ]
    }
  }
}
</script>

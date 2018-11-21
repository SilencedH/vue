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
      <h2>Buttons</h2>
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
          title: 'CustomeIcons',
          router: '/carousels/customIcons'
        },
        {
          index: 2,
          title: 'CustomTransition',
          router: '/carousels/customTransition'
        },
        {
          index: 3,
          title: "Default",
          router: "/carousels/default"
        },
        {
          index: 4,
          title: "HideControls",
          router: "/carousels/hideControls"
        },
        {
          index: 5,
          title: "HideDelimiters",
          router: "/carousels/hideDelimiters"
        }
      ]
    }
  }
}
</script>

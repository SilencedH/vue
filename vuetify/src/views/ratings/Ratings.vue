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
      <h2>Ratings</h2>
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
  name: 'Ratings',
  data() {
    return {
      layouts: [
        {
          index: 1,
          title: 'Advanced',
          router: '/ratings/advanced'
        },
        {
          index: 2,
          title: "Card",
          router: "/ratings/card"
        },
        {
          index: 3,
          title: "Default",
          router: "/ratings/default"
        },
        {
          index: 4,
          title: "Increments",
          router: "/ratings/increments"
        },
        {
          index: 5,
          title: 'Length',
          router: '/ratings/length'
        },
        {
          index: 6,
          title: "Sizes",
          router: "/ratings/sizes"
        },
        {
          index: 7,
          title: "Slots",
          router: "/ratings/slots"
        }
      ]
    }
  }
}
</script>

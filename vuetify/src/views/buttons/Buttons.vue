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
  name: 'Buttons',
  data() {
    return {
      layouts: [
        {
          index: 1,
          title: 'Block',
          router: '/buttons/block'
        },
        {
          index: 2,
          title: 'Depressed',
          router: '/buttons/depressed'
        },
        {
          index: 3,
          title: "Dropdown",
          router: "/buttons/dropdown"
        },
        {
          index: 4,
          title: "Flat",
          router: "/buttons/flat"
        },
        {
          index: 5,
          title: "Floating",
          router: "/buttons/floating"
        },
        {
          index: 6,
          title: "Icon",
          router: "/buttons/icon"
        },
        {
          index: 7,
          title: "Loaders",
          router: "/buttons/loaders"
        },
        {
          index: 8,
          title: "Outline",
          router: "/buttons/outline"
        },
        {
          index: 9,
          title: "Raised",
          router: "/buttons/raised"
        },
        {
          index: 10,
          title: "Round",
          router: "/buttons/round"
        },
        {
          index: 11,
          title: "Sizing",
          router: "/buttons/sizing"
        },
        {
          index: 12,
          title: "Usage",
          router: "/buttons/usage"
        }
      ]
    }
  }
}
</script>

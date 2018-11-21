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
      <h2>Paginations</h2>
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
  name: 'Paginations',
  data() {
    return {
      layouts: [
        {
          index: 1,
          title: 'Disabled',
          router: '/paginations/disabled'
        },
        {
          index: 2,
          title: "Icons",
          router: "/paginations/icons"
        },
        {
          index: 3,
          title: "Limit",
          router: "/paginations/limit"
        },
        {
          index: 4,
          title: "Long",
          router: "/paginations/long"
        },
        {
          index: 5,
          title: 'Round',
          router: '/paginations/round'
        },
        {
          index: 6,
          title: "Short",
          router: "/paginations/short"
        }
      ]
    }
  }
}
</script>

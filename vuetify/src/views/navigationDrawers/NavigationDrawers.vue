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
      <h2>NavigationDrawers</h2>
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
  name: 'NavigationDrawers',
  data() {
    return {
      layouts: [
        {
          index: 1,
          title: 'Combined',
          router: '/navigationDrawers/combined'
        },
        {
          index: 2,
          title: "Dark",
          router: "/navigationDrawers/dark"
        },
        {
          index: 3,
          title: "Mini",
          router: "/navigationDrawers/mini"
        },
        {
          index: 4,
          title: "Nested",
          router: "/navigationDrawers/nested"
        },
        {
          index: 5,
          title: 'Permanent',
          router: '/navigationDrawers/permanent'
        },
        {
          index: 6,
          title: "PermanentClipped",
          router: "/navigationDrawers/permanentClipped"
        },
        {
          index: 7,
          title: "PermanentFloating",
          router: "/navigationDrawers/permanentFloating"
        },
        {
          index: 8,
          title: 'PermanentFloatingCard',
          router: '/navigationDrawers/permanentFloatingCard'
        },
        {
          index: 9,
          title: "Persistent",
          router: "/navigationDrawers/persistent"
        },
        {
          index: 10,
          title: "Temporary",
          router: "/navigationDrawers/temporary"
        }
      ]
    }
  }
}
</script>

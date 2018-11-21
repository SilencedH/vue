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
      <h2>Alerts</h2>
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
  name: 'Alerts',
  data() {
    return {
      layouts: [
        {
          index: 1,
          title: 'Closable',
          router: '/alerts/closable'
        },
        {
          index: 2,
          title: 'Contextual',
          router: '/alerts/contextual'
        }, 
        {
          index: 3,
          title: 'Icon',
          router: '/alerts/icon'
        },
        {
          index: 4,
          title: 'Outline',
          router: '/alerts/outline'
        },
        {
          index: 5,
          title: 'Transition',
          router: '/alerts/transition'
        }
      ]
    }
  }
}
</script>

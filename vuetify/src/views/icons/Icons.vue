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
      <h2>Icons</h2>
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
  name: 'Icons',
  data() {
    return {
      layouts: [
        {
          index: 1,
          title: 'Buttons',
          router: '/icons/buttons'
        },
        {
          index: 2,
          title: 'Clickable',
          router: '/icons/clickable'
        },
        {
          index: 3,
          title: 'Color',
          router: '/icons/color'
        },
        {
          index: 4,
          title: 'FontAwesome',
          router: '/icons/fontAwesome'
        },
        {
          index: 5,
          title: 'Mdi',
          router: '/icons/mdi'
        },
        {
          index: 6,
          title: 'Standard',
          router: '/icons/standard'
        }
      ]
    }
  }
}
</script>

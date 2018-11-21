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
      <h2>Badges</h2>
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
  name: 'Badges',
  data() {
    return {
      layouts: [
        {
          index: 1,
          title: 'Character',
          router: '/badges/character'
        },
        {
          index: 2,
          title: 'Icon',
          router: '/badges/icon'
        },
        {
          index: 3,
          title: 'Inline',
          router: '/badges/inline'
        },
        {
          index: 4,
          title: 'Overlap',
          router: '/badges/overlap'
        },
        {
          index: 5,
          title: 'Visibility',
          router: '/badges/visibility'
        }
      ]
    }
  }
}
</script>

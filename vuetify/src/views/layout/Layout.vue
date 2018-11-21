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
      <h2>Layout</h2>
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
  name: 'Layout',
  data() {
    return {
      layouts: [
        {
          index: 1,
          title: 'BaseLine',
          router: '/layout/baseLine'
        },
         {
          index: 2,
          title: 'BaselineFlipped',
          router: '/layout/baselineFlipped'
        },
         {
          index: 3,
          title: 'Centered',
          router: '/layout/centered'
        },
        {
          index: 4,
          title: 'Complex',
          router: '/layout/complex'
        },
         {
          index: 5,
          title: 'Dark',
          router: '/layout/dark'
        },
         {
          index: 6,
          title: 'GoogleContacts',
          router: '/layout/googleContacts'
        },
        {
          index: 7,
          title: 'GoogleKeep',
          router: '/layout/googleKeep'
        }
        ,
        {
          index: 8,
          title: 'GoogleYoutube',
          router: '/layout/googleYoutube'
        }
      ]
    }
  }
}
</script>

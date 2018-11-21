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
      <h2>Dialogs</h2>
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
  name: 'Dialogs',
  data() {
    return {
      layouts: [
        {
          index: 1,
          title: 'Advanced',
          router: '/dialogs/advanced'
        },
        {
          index: 2,
          title: 'Form',
          router: '/dialogs/form'
        },
        {
          index: 3,
          title: 'FullScreen',
          router: '/dialogs/fullScreen'
        },
        {
          index: 4,
          title: 'Loader',
          router: '/dialogs/loader'
        },
        {
          index: 5,
          title: 'Modal',
          router: '/dialogs/modal'
        },
        {
          index: 6,
          title: 'OverFlowed',
          router: '/dialogs/overFlowed'
        },
        {
          index: 7,
          title: 'Scrollable',
          router: '/dialogs/scrollable'
        },
        {
          index: 8,
          title: 'Simple',
          router: '/dialogs/simple'
        },
        {
          index: 9,
          title: 'WithoutActivator',
          router: '/dialogs/withoutActivator'
        }
      ]
    }
  }
}
</script>

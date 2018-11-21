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
      <h2>Dividers</h2>
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
  name: 'Dividers',
  data() {
    return {
      layouts: [
        {
          index: 1,
          title: 'DividerList',
          router: '/dividers/dividerList'
        },
        {
          index: 2,
          title: 'DividerListPortrait',
          router: '/dividers/dividerListPortrait'
        },
        {
          index: 3,
          title: 'DividerPortrait',
          router: '/dividers/dividerPortrait'
        },
        {
          index: 4,
          title: 'FullBleed',
          router: '/dividers/fullBleed'
        },
        {
          index: 5,
          title: 'Inset',
          router: '/dividers/inset'
        },
        {
          index: 6,
          title: 'LightAndDark',
          router: '/dividers/lightAndDark'
        },
        {
          index: 7,
          title: 'Subheaders',
          router: '/dividers/subheaders'
        },
        {
          index: 8,
          title: 'Vertical',
          router: '/dividers/vertical'
        }
      ]
    }
  }
}
</script>

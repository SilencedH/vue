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
      <h2>Footer</h2>
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
  name: 'Footer',
  data() {
    return {
      layouts: [
        {
          index: 1,
          title: 'CompanyFooter',
          router: '/footer/companyFooter'
        },
        {
          index: 2,
          title: 'Default',
          router: '/footer/default'
        },
        {
          index: 3,
          title: 'IndigoFooter',
          router: '/footer/indigoFooter'
        },
        {
          index: 4,
          title: 'TealFooter',
          router: '/footer/tealFooter'
        }
      ]
    }
  }
}
</script>

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
      <h2>Combobox</h2>
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
  name: 'Combobox',
  data() {
    return {
      layouts: [
        {
          index: 1,
          title: 'Combobox',
          router: '/combobox/comboboxIndex'
        },
        {
          index: 2,
          title: 'Advanced',
          router: '/combobox/advanced'
        },
        {
          index: 3,
          title: "ComboboxMultiple",
          router: "/combobox/comboboxMultiple"
        },
        {
          index: 4,
          title: "NoData",
          router: "/combobox/noData"
        }
      ]
    }
  }
}
</script>

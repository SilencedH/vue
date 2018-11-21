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
      <h2>Chips</h2>
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
  name: 'Chips',
  data() {
    return {
      layouts: [
        {
          index: 1,
          title: 'Closable',
          router: '/chips/closable'
        },
        {
          index: 2,
          title: 'Colored',
          router: '/chips/colored'
        },
        {
          index: 3,
          title: "Icon",
          router: "/chips/icon"
        },
        {
          index: 4,
          title: "Default",
          router: "/chips/default"
        },
        {
          index: 5,
          title: "InSelects",
          router: "/chips/inSelects"
        },
        {
          index: 6,
          title: "Label",
          router: "/chips/label"
        },
        {
          index: 7,
          title: "Outline",
          router: "/chips/outline"
        }
      ]
    }
  }
}
</script>

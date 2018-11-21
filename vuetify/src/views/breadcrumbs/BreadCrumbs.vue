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
      <h2>BreadCrumbs</h2>
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
  name: 'BreadCrumbs',
  data() {
    return {
      layouts: [
        {
          index: 1,
          title: 'IconDividers',
          router: '/breadCrumbs/iconDividers'
        },
        {
          index: 2,
          title: 'ItemSlot',
          router: '/breadCrumbs/itemSlot'
        },
        {
          index: 3,
          title: "TextDividers",
          router: "/breadCrumbs/textDividers"
        }
      ]
    }
  }
}
</script>

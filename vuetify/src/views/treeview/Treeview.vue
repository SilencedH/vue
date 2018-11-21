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
      <h2>Treeview</h2>
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
  name: 'Treeview',
  data() {
    return {
      layouts: [
        {
          index: 1,
          title: 'Directory',
          router: '/treeview/directory'
        },
        {
          index: 2,
          title: "FileExplorer",
          router: "/treeview/fileExplorer"
        },
        {
          index: 3,
          title: "Hotspots",
          router: "/treeview/hotspots"
        },
         {
          index: 4,
          title: 'Usage',
          router: '/treeview/usage'
        }
      ]
    }
  }
}
</script>

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
      <h2>DataTables</h2>
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
  name: 'Colors',
  data() {
    return {
      layouts: [
        {
          index: 1,
          title: 'Crud',
          router: '/dataTables/crud'
        },
        {
          index: 2,
          title: 'CustomIcons',
          router: '/dataTables/customIcons'
        },
        {
          index: 3,
          title: 'EditDialog',
          router: '/dataTables/editDialog'
        },
        {
          index: 4,
          title: 'Expand',
          router: '/dataTables/expand'
        },
        {
          index: 5,
          title: 'Footer',
          router: '/dataTables/footer'
        },
        {
          index: 6,
          title: 'HeaderCell',
          router: '/dataTables/headerCell'
        },
        {
          index: 7,
          title: 'Headers',
          router: '/dataTables/headers'
        },
        {
          index: 8,
          title: 'NoData',
          router: '/dataTables/noData'
        },
        {
          index: 9,
          title: 'PageText',
          router: '/dataTables/pageText'
        },
        {
          index: 10,
          title: 'Paginate',
          router: '/dataTables/paginate'
        },
        {
          index: 11,
          title: 'Progress',
          router: '/dataTables/progress'
        },
        {
          index: 12,
          title: 'Search',
          router: '/dataTables/search'
        },
        {
          index: 13,
          title: 'Select',
          router: '/dataTables/select'
        },
        {
          index: 14,
          title: 'Server',
          router: '/dataTables/server'
        },
        {
          index: 15,
          title: 'Sort',
          router: '/dataTables/sort'
        },
        {
          index: 16,
          title: 'Standard',
          router: '/dataTables/standard'
        }
      ]
    }
  }
}
</script>

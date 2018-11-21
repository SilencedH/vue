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
      <h2>Grid</h2>
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
          title: 'FirstGrid',
          router: '/grid/firstGrid'
        },
         {
          index: 2,
          title: 'DirectionAndAlign',
          router: '/grid/directionAndAlign'
        },
        {
          index: 3,
          title: 'NestedGrid',
          router: '/grid/nestedGrid'
        },
         {
          index: 4,
          title: 'OffSet',
          router: '/grid/offSet'
        },
        {
          index: 5,
          title: 'Order',
          router: '/grid/order'
        },
         {
          index: 6,
          title: 'PlayGround',
          router: '/grid/playGround'
        },
        {
          index: 7,
          title: 'RowColumnBreakPoint',
          router: '/grid/rowColumnBreakPoint'
        },
         {
          index: 8,
          title: 'Spacer',
          router: '/grid/spacer'
        },
        {
          index: 9,
          title: 'Tags',
          router: '/grid/tags'
        },
         {
          index: 10,
          title: 'UniqueLayouts',
          router: '/grid/uniqueLayouts'
        }
      ]
    }
  }
}
</script>

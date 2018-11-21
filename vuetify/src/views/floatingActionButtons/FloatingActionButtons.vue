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
      <h2>FloatingActionButtons</h2>
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
  name: 'FloatingActionButtons',
  data() {
    return {
      layouts: [
        {
          index: 1,
          title: 'DisplayAnimation',
          router: '/floatingActionButtons/displayAnimation'
        },
         {
          index: 2,
          title: 'LateralScreens',
          router: '/floatingActionButtons/lateralScreens'
        },
        {
          index: 3,
          title: 'PromotedAction',
          router: '/floatingActionButtons/promotedAction'
        },
         {
          index: 4,
          title: 'Small',
          router: '/floatingActionButtons/small'
        },
        {
          index: 5,
          title: 'SpeedDial',
          router: '/floatingActionButtons/speedDial'
        }
      ]
    }
  }
}
</script>

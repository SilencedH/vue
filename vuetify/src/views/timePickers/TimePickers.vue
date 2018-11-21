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
      <h2>TimePickers</h2>
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
  name: 'TimePickers',
  data() {
    return {
      layouts: [
        {
          index: 1,
          title: 'Time24hFormat',
          router: '/timePickers/time24hFormat'
        },
        {
          index: 2,
          title: "TimeAllowedTimes",
          router: "/timePickers/timeAllowedTimes"
        },
        {
          index: 3,
          title: "TimeColorable",
          router: "/timePickers/timeColorable"
        },
         {
          index: 4,
          title: 'TimeDialogAndMenu',
          router: '/timePickers/timeDialogAndMenu'
        },
        {
          index: 5,
          title: "TimeLight",
          router: "/timePickers/timeLight"
        },
        {
          index: 6,
          title: "TimeWidth",
          router: "/timePickers/timeWidth"
        }
      ]
    }
  }
}
</script>

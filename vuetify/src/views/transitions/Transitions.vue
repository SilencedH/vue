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
      <h2>Transitions</h2>
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
  name: 'Transitions',
  data() {
    return {
      layouts: [
        {
          index: 1,
          title: 'CustomOrigin',
          router: '/transitions/customOrigin'
        },
        {
          index: 2,
          title: "FadeTransition",
          router: "/transitions/fadeTransition"
        },
        {
          index: 3,
          title: "ScaleTransition",
          router: "/transitions/scaleTransition"
        },
         {
          index: 4,
          title: 'SlideXTransition',
          router: '/transitions/slideXTransition'
        },
        {
          index: 5,
          title: "SlideYTransitions",
          router: "/transitions/slideYTransitions"
        },
        {
          index: 6,
          title: "Todo",
          router: "/transitions/todo"
        }
      ]
    }
  }
}
</script>

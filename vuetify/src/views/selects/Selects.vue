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
      <h2>Selects</h2>
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
  name: 'Selects',
  data() {
    return {
      layouts: [
        {
          index: 1,
          title: 'CustomTextAndValue',
          router: '/selects/customTextAndValue'
        },
        {
          index: 2,
          title: "Icons",
          router: "/selects/icons"
        },
        {
          index: 3,
          title: "Light",
          router: "/selects/light"
        },
        {
          index: 4,
          title: "Multiple",
          router: "/selects/multiple"
        },
        {
          index: 5,
          title: 'SelectionAppearance',
          router: '/selects/selectionAppearance'
        },
        {
          index: 6,
          title: "Slots",
          router: "/selects/slots"
        },
        {
          index: 7,
          title: "Usage",
          router: "/selects/usage"
        }
      ]
    }
  }
}
</script>

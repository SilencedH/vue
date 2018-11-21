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
      <h2>Steppers</h2>
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
  name: 'Steppers',
  data() {
    return {
      layouts: [
        {
          index: 1,
          title: 'AlternateError',
          router: '/steppers/alternateError'
        },
        {
          index: 2,
          title: "AlternateLabels",
          router: "/steppers/alternateLabels"
        },
        {
          index: 3,
          title: "AlternativeError",
          router: "/steppers/alternativeError"
        },
         {
          index: 4,
          title: 'Dynamic',
          router: '/steppers/dynamic'
        },
        {
          index: 5,
          title: "Editable",
          router: "/steppers/editable"
        },
        {
          index: 6,
          title: "Error",
          router: "/steppers/error"
        },
         {
          index: 7,
          title: 'Example',
          router: '/steppers/example'
        },
        {
          index: 8,
          title: "Horizontal",
          router: "/steppers/horizontal"
        },
        {
          index: 9,
          title: "Linear",
          router: "/steppers/linear"
        },
         {
          index: 10,
          title: 'NonEditable',
          router: '/steppers/nonEditable'
        },
        {
          index: 11,
          title: "NonLinear",
          router: "/steppers/nonLinear"
        },
        {
          index: 12,
          title: "Optional",
          router: "/steppers/optional"
        },
         {
          index: 13,
          title: 'Vertical',
          router: '/steppers/vertical'
        },
        {
          index: 14,
          title: "VerticalError",
          router: "/steppers/verticalError"
        }
      ]
    }
  }
}
</script>

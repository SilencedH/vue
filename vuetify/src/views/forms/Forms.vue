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
      <h2>Forms</h2>
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
  name: 'Forms',
  data() {
    return {
      layouts: [
        {
          index: 1,
          title: 'BasicValidation',
          router: '/forms/basicValidation'
        },
        {
          index: 2,
          title: 'SubmitAndClear',
          router: '/forms/submitAndClear'
        },
        {
          index: 3,
          title: 'ValidationWithSubmitAndClear',
          router: '/forms/validationWithSubmitAndClear'
        },
        {
          index: 4,
          title: 'VeeValidate',
          router: '/forms/veeValidate'
        },
        {
          index: 5,
          title: 'Vuelidate',
          router: '/forms/vuelidate'
        }
      ]
    }
  }
}
</script>

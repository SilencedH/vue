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
      <h2>Images</h2>
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
  name: 'Images',
  data() {
    return {
      layouts: [
        {
          index: 1,
          title: 'ContainCover',
          router: '/images/containCover'
        },
        {
          index: 2,
          title: 'Gradients',
          router: '/images/gradients'
        },
        {
          index: 3,
          title: 'MaxHeight',
          router: '/images/maxHeight'
        },
        {
          index: 4,
          title: 'Ratio',
          router: '/images/ratio'
        },
        {
          index: 5,
          title: 'Usage',
          router: '/images/usage'
        }
      ]
    }
  }
}
</script>

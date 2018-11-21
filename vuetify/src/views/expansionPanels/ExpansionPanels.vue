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
      <h2>ExpansionPanels</h2>
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
  name: 'ExpansionPanels',
  data() {
    return {
      layouts: [
        {
          index: 1,
          title: 'Accordion',
          router: '/expansionPanels/accordion'
        },
        {
          index: 2,
          title: 'CustomIcons',
          router: '/expansionPanels/customIcons'
        },
        {
          index: 3,
          title: 'DisabledAndReadonly',
          router: '/expansionPanels/disabledAndReadonly'
        },
        {
          index: 4,
          title: 'Expand',
          router: '/expansionPanels/expand'
        },
        {
          index: 5,
          title: 'External',
          router: '/expansionPanels/external'
        },
        {
          index: 6,
          title: 'Focusable',
          router: '/expansionPanels/focusable'
        },
        {
          index: 7,
          title: 'Popout',
          router: '/expansionPanels/popout'
        }
      ]
    }
  }
}
</script>

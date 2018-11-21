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
      <h2>SelectionControls</h2>
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
  name: 'SelectionControls',
  data() {
    return {
      layouts: [
        {
          index: 1,
          title: 'CheckboxesArray',
          router: '/selectionControls/checkboxesArray'
        },
        {
          index: 2,
          title: "CheckboxesBoolean",
          router: "/selectionControls/checkboxesBoolean"
        },
        {
          index: 3,
          title: "CheckboxesColors",
          router: "/selectionControls/checkboxesColors"
        },
         {
          index: 4,
          title: 'CheckboxesInlineTexfield',
          router: '/selectionControls/checkboxesInlineTexfield'
        },
        {
          index: 5,
          title: "CheckboxesStates",
          router: "/selectionControls/checkboxesStates"
        },
        {
          index: 6,
          title: "Example",
          router: "/selectionControls/example"
        },
         {
          index: 7,
          title: 'LabelSlot',
          router: '/selectionControls/labelSlot'
        },
        {
          index: 8,
          title: "RadiosColors",
          router: "/selectionControls/radiosColors"
        },
        {
          index: 9,
          title: "RadiosDefault",
          router: "/selectionControls/radiosDefault"
        },
         {
          index: 10,
          title: 'RadiosDirection',
          router: '/selectionControls/radiosDirection'
        },
        {
          index: 11,
          title: "SwitchesArray",
          router: "/selectionControls/switchesArray"
        },
        {
          index: 12,
          title: "SwitchesBoolean",
          router: "/selectionControls/switchesBoolean"
        },
        {
          index: 13,
          title: "SwitchesColors",
          router: "/selectionControls/switchesColors"
        },
        {
          index: 14,
          title: "SwitchesStates",
          router: "/selectionControls/switchesStates"
        }
      ]
    }
  }
}
</script>

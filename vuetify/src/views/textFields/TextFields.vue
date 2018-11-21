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
      <h2>TextFields</h2>
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
  name: 'TextFields',
  data() {
    return {
      layouts: [
        {
          index: 1,
          title: 'Box',
          router: '/textFields/box'
        },
        {
          index: 2,
          title: "CharacterCounter",
          router: "/textFields/characterCounter"
        },
        {
          index: 3,
          title: "Clearable",
          router: "/textFields/clearable"
        },
         {
          index: 4,
          title: 'CustomColors',
          router: '/textFields/customColors'
        },
        {
          index: 5,
          title: "CustomValidation",
          router: "/textFields/customValidation"
        },
        {
          index: 6,
          title: "DisabledAndReadonly",
          router: "/textFields/disabledAndReadonly"
        },
         {
          index: 7,
          title: 'FullWidthWithCharacterCounter',
          router: '/textFields/fullWidthWithCharacterCounter'
        },
        {
          index: 8,
          title: "Hint",
          router: "/textFields/hint"
        },
        {
          index: 9,
          title: "Icon",
          router: "/textFields/icon"
        },
         {
          index: 10,
          title: 'IconEvents',
          router: '/textFields/iconEvents'
        },
        {
          index: 11,
          title: "IconSlots",
          router: "/textFields/iconSlots"
        },
        {
          index: 12,
          title: "LabelSlot",
          router: "/textFields/labelSlot"
        },
         {
          index: 13,
          title: 'Masks',
          router: '/textFields/masks'
        },
        {
          index: 14,
          title: 'Outline',
          router: '/textFields/outline'
        },
        {
          index: 15,
          title: "Password",
          router: "/textFields/password"
        },
        {
          index: 16,
          title: "PrefixesAndSuffixes",
          router: "/textFields/prefixesAndSuffixes"
        },
         {
          index: 17,
          title: 'ProgressBar',
          router: '/textFields/progressBar'
        },
        {
          index: 18,
          title: "SingleLine",
          router: "/textFields/singleLine"
        },
        {
          index: 19,
          title: "Solo",
          router: "/textFields/solo"
        },
         {
          index: 20,
          title: 'Usage',
          router: '/textFields/usage'
        },
        {
          index: 21,
          title: "Validation",
          router: "/textFields/validation"
        }
      ]
    }
  }
}
</script>

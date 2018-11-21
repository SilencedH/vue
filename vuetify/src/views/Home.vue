<template>
  <v-container>
    <v-layout text-xs-center wrap>
      <v-flex mb-4>
        <h1 class="display-2 font-weight-bold mb-3">
          Welcome to Vuetify
        </h1>
      </v-flex>

      <v-flex mb-5 xs12>
        <v-layout justify-center>
          <ol>
            <li v-for="item in list1" :key="item.index">
              <router-link :to="item.router">{{ item.title }}</router-link>
            </li>
          </ol>
        </v-layout>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    list1: [

      {
        index: 4,
        title: "AspectRatios",
        router: "/aspectRatios"
      },

      {
        index: 9,
        title: "Alerts",
        router: "/alerts"
      },
      {
        index: 10,
        title: "Avatars",
        router: "/avatars"
      },
      {
        index: 11,
        title: "Badges",
        router: "/badges"
      },
      {
        index: 12,
        title: "BottomNavigation",
        router: "/bottomNavigation"
      },
      {
        index: 13,
        title: "BottomSheets",
        router: "/bottomSheets"
      },
      {
        index: 14,
        title: "BreadCrumbs",
        router: "/breadCrumbs"
      },
      {
        index: 15,
        title: "Buttons",
        router: "/buttons"
      },

      {
        index: 17,
        title: "Cards",
        router: "/cards"
      },
      {
        index: 18,
        title: "Carousels",
        router: "/carousels"
      },
      {
        index: 19,
        title: "Chips",
        router: "/chips"
      },
      {
        index: 20,
        title: "Colors",
        router: "/colors"
      },
      {
        index: 21,
        title: "Combobox",
        router: "/combobox"
      },

      {
        index: 22,
        title: 'DataIterator',
        router: '/dataIterator'
      },
      {
        index: 23,
        title: 'DataTables',
        router: '/dataTables'
      },
      {
        index: 24,
        title: "DatePickers",
        router: "/datePickers"
      },
      {
        index: 25,
        title: "Dialogs",
        router: "/dialogs"
      },
      {
        index: 26,
        title: "Display",
        router: "/display"
      },
      {
        index: 27,
        title: "Dividers",
        router: "/dividers"
      },
      {
        index: 28,
        title: "ExpansionPanels",
        router: "/expansionPanels"
      },
      {
        index: 16,
        title: "FloatingActionButtons",
        router: "/floatingActionButtons"
      },
      {
        index: 29,
        title: "Footer",
        router: "/footer"
      },
      {
        index: 30,
        title: "Forms",
        router: "/forms"
      },
      {
        index: 2,
        title: 'Grid',
        router: '/grid'
      },
      {
        index: 3,
        title: "GridList",
        router: "/gridList"
      },
      {
        index: 31,
        title: "Hover",
        router: "/hover"
      },
      {
        index: 32,
        title: "Icons",
        router: "/icons"
      },
      {
        index: 33,
        title: "Images",
        router: "/images"
      },
      {
        index: 34,
        title: "Inputs",
        router: "/inputs"
      },
      {
        index: 35,
        title: "ItemGroups",
        router: "/itemGroups"
      },
      {
        index: 36,
        title: "Jumbotrons",
        router: "/jumbotrons"
      },
      {
        index: 1,
        title: 'Layout',
        router: '/layout'
      },
      {
        index: 37,
        title: "Lists",
        router: "/lists"
      },
      {
        index: 38,
        title: "Menus",
        router: "/menus"
      },
      {
        index: 39,
        title: "NavigationDrawers",
        router: "/navigationDrawers"
      },
      {
        index: 40,
        title: "Paginations",
        router: "/paginations"
      },
      {
        index: 41,
        title: "Parallax",
        router: "/parallax"
      },
      {
        index: 64,
        title: "Progress",
        router: "/progress"
      },
      {
        index: 42,
        title: "Ratings",
        router: "/ratings"
      },
      {
        index: 43,
        title: "Resizing",
        router: "/resizing"
      },
      {
        index: 44,
        title: "Ripples",
        router: "/ripples"
      },
      {
        index: 8,
        title: "Scrolling",
        router: "/scrolling"
      },
      {
        index: 45,
        title: "SelectionControls",
        router: "/selectionControls"
      },
      {
        index: 46,
        title: "Selects",
        router: "/selects"
      },
      {
        index: 47,
        title: "Sliders",
        router: "/sliders"
      },
      {
        index: 48,
        title: "Snackbars",
        router: "/snackbars"
      },
      {
        index: 49,
        title: "Spacing",
        router: "/spacing"
      },
      {
        index: 50,
        title: "Steppers",
        router: "/steppers"
      },
      {
        index: 51,
        title: "Subheaders",
        router: "/subheaders"
      },

      {
        index: 52,
        title: 'Tabs',
        router: '/tabs'
      },
      {
        index: 5,
        title: "TextAlign",
        router: "/textAlign"
      },
      {
        index: 53,
        title: 'Textarea',
        router: '/textarea'
      },
      {
        index: 54,
        title: "TextFields",
        router: "/textFields"
      },
      {
        index: 55,
        title: "Timelines",
        router: "/timelines"
      },
      {
        index: 56,
        title: "TimePickers",
        router: "/timePickers"
      },
      {
        index: 57,
        title: "Toolbars",
        router: "/toolbars"
      },
      {
        index: 58,
        title: "Tooltips",
        router: "/tooltips"
      },
      {
        index: 59,
        title: "TouchSupport",
        router: "/touchSupport"
      },
      {
        index: 60,
        title: "Transitions",
        router: "/transitions"
      },
      {
        index: 61,
        title: "Treeview",
        router: "/treeview"
      },
      {
        index: 62,
        title: "Typography",
        router: "/typography"
      },
      {
        index: 63,
        title: "Windows",
        router: "/windows"
      }

    ]
  }),
  methods: {
    test() {
    }
  }
}
</script>

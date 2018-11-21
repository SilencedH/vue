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
      <h2>Sliders</h2>
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
  name: 'Sliders',
  data() {
    return {
      layouts: [
        {
          index: 1,
          title: 'CustomColors',
          router: '/sliders/customColors'
        },
        {
          index: 2,
          title: "CustomThumb",
          router: "/sliders/customThumb"
        },
        {
          index: 3,
          title: "Discrete",
          router: "/sliders/discrete"
        },
        {
          index: 4,
          title: "EditableNumericValue",
          router: "/sliders/editableNumericValue"
        },
        {
          index: 5,
          title: 'Icons',
          router: '/sliders/icons'
        },
        {
          index: 6,
          title: "Metronome",
          router: "/sliders/metronome"
        },
        {
          index: 7,
          title: "MinMax",
          router: "/sliders/minMax"
        },
         {
          index: 8,
          title: 'Range',
          router: '/sliders/range'
        },
        {
          index: 9,
          title: "Step",
          router: "/sliders/step"
        },
        {
          index: 10,
          title: "Thumb",
          router: "/sliders/thumb"
        },
        {
          index: 11,
          title: "ThumbLabel",
          router: "/sliders/thumbLabel"
        },
        {
          index: 12,
          title: 'Ticks',
          router: '/sliders/ticks'
        },
        {
          index: 13,
          title: "Usage",
          router: "/sliders/usage"
        },
        {
          index: 14,
          title: "Validation",
          router: "/sliders/validation"
        }
      ]
    }
  }
}
</script>

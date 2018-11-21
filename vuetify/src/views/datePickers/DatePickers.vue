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
      <h2>DatePickers</h2>
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
  name: 'DatePickers',
  data() {
    return {
      layouts: [
        {
          index: 1,
          title: 'DateAllowedDates',
          router: '/datePickers/dateAllowedDates'
        },
        {
          index: 2,
          title: 'DateBirthday',
          router: '/datePickers/dateBirthday'
        },
        {
          index: 3,
          title: 'DateColorable',
          router: '/datePickers/dateColorable'
        },
        {
          index: 4,
          title: 'DateCurrent',
          router: '/datePickers/dateCurrent'
        },
        {
          index: 5,
          title: 'DateDialogAndMenu',
          router: '/datePickers/dateDialogAndMenu'
        },
        {
          index: 6,
          title: 'DateEnents',
          router: '/datePickers/dateEvents'
        },
        {
          index: 7,
          title: 'DateFormatting',
          router: '/datePickers/dateFormatting'
        },
        {
          index: 8,
          title: 'DateFormattingMomenDatefns',
          router: '/datePickers/dateFormattingMomentDatefns'
        },
        {
          index: 9,
          title: 'DateIcons',
          router: '/datePickers/dateIcons'
        },
        {
          index: 10,
          title: 'DateInternationalization',
          router: '/datePickers/dateInternationalization'
        },
        {
          index: 11,
          title: 'DateLight',
          router: '/datePickers/dateLight'
        },
        {
          index: 12,
          title: 'DateMultiple',
          router: '/datePickers/dateMultiple'
        },
        {
          index: 13,
          title: 'DatePickerDate',
          router: '/datePickers/datePickerDate'
        },
        {
          index: 14,
          title: 'DateReadonly',
          router: '/datePickers/dateReadonly'
        },
        {
          index: 15,
          title: 'DateWidth',
          router: '/datePickers/dateWidth'
        },
        {
          index: 16,
          title: 'MonthAllowedMonths',
          router: '/datePickers/monthAllowedMonths'
        },
        {
          index: 17,
          title: 'MonthColorable',
          router: '/datePickers/monthColorable'
        },
        {
          index: 18,
          title: 'MonthCurrent',
          router: '/datePickers/monthCurrent'
        },
        {
          index: 19,
          title: 'MonthDialogAndMenu',
          router: '/datePickers/monthDialogAndMenu'
        },
        {
          index: 20,
          title: 'MonthIcons',
          router: '/datePickers/monthIcons'
        },
        {
          index: 21,
          title: 'MonthInternationalization',
          router: '/datePickers/monthInternationalization'
        },
        {
          index: 22,
          title: 'MonthLight',
          router: '/datePickers/monthLight'
        },
        {
          index: 23,
          title: 'MonthMultiple',
          router: '/datePickers/monthMultiple'
        },
        {
          index: 24,
          title: 'MonthReadonly',
          router: '/datePickers/monthReadonly'
        },
        {
          index: 25,
          title: 'MonthWidth',
          router: '/datePickers/monthWidth'
        }
      ]
    }
  }
}
</script>

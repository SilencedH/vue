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
      <h2>Lists</h2>
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
  name: 'Lists',
  data() {
    return {
      layouts: [
        {
          index: 1,
          title: 'ActionTitleAndSubtitle',
          router: '/lists/actionTitleAndSubtitle'
        },
        {
          index: 2,
          title: "ActionWithTitleAndSubtitle",
          router: "/lists/actionWithTitleAndSubtitle"
        },
        {
          index: 3,
          title: "AvatarSubheaderTitleAndAction",
          router: "/lists/avatarSubheaderTitleAndAction"
        },
        {
          index: 4,
          title: "AvatarThreeLines",
          router: "/lists/avatarThreeLines"
        },
        {
          index: 5,
          title: 'AvatarTitleAndAction',
          router: '/lists/avatarTitleAndAction'
        },
        {
          index: 6,
          title: "AvatarTwoLines",
          router: "/lists/avatarTwoLines"
        },
        {
          index: 7,
          title: "CardList",
          router: "/lists/cardList"
        },
        {
          index: 8,
          title: "ExpansionLists",
          router: "/lists/expansionLists"
        },
        {
          index: 9,
          title: "IconTwoLinesAndAction",
          router: "/lists/iconTwoLinesAndAction"
        },
        {
          index: 10,
          title: "SubheadingsAndDividers",
          router: "/lists/subheadingsAndDividers"
        },
        {
          index: 11,
          title: "TitleSubtitleActionsAndActionText",
          router: "/lists/titleSubtitleActionsAndActionText"
        }
      ]
    }
  }
}
</script>

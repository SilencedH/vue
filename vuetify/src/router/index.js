import Vue from "vue";
import Router from "vue-router";
import Home from "@/views/Home";
import layout from "@/router/layout";
import grid from "@/router/grid";
import gridList from "@/router/gridList";
import aspectRatios from "@/router/aspectRatios";
import textAlign from "@/router/textAlign";
import display from "@/router/display";
import typography from "@/router/typography";
import scrolling from "@/router/scrolling";
import alerts from "@/router/alerts";
import avatars from "@/router/avatars"
import badges from "@/router/badges"
import bottonNavigatiom from "@/router/bottomNavigation"
import bottomSheets from "@/router/bottomSheets"
import breadCrumbs from "@/router/breadCrumbs"
import buttons from "@/router/buttons"
import floatingActionButtons from "@/router/floatingActionButtons"
import cards from "./cards"
import carousels from "./carousels"
import chips from "./chips"
import colors from "./colors"
import combobox from "./combobox";
import dataIterator from "./dataIterator"
import dataTables from "./dataTables"
import datePickers from "./datePickers"
import dialogs from "./dialogs"
import dividers from "./dividers"
import expansionPanels from "./expansionPanels"
import footer from "./footer"
import forms from "./forms"
import hover from "./hover"
import icons from "./icons"
import images from "./images"
import inputs from "./inputs";
import itemGroups from "./itemGroups";
import jumbotrons from "./jumbotrons";
import lists from "./lists";
import menus from "./menus";
import navigationDrawers from "./navigationDrawers";
import paginations from "./paginations";
import parallax from "./parallax";
import progress from "./progress";
import ratings from "./ratings";
import resizing from "./resizing";
import ripples from "./ripples";
import selectionCotrols from "./selectionCotrols";
import selects from "./selects";
import sliders from "./sliders";
import snackbars from "./snackbars";
import spacing from "./spacing";
import steppers from "./steppers";
import subheaders from "./subheaders";
import tabs from "./tabs";
import textarea from "./textarea";
import textFields from "./textFields";
import timelines from "./timelines";
import timePickers from "./timePickers";
import toolbars from "./toolbars";
import tooltips from "./tooltips";
import touchSupport from "./touchSupport";
import transitions from "./transitions";
import treeview from "./treeview";
import windows from "./windows";

Vue.use(Router);
let routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  }
];
routes = routes.concat(
  layout,
  grid,
  gridList,
  aspectRatios,
  textAlign,
  display,
  typography,
  scrolling,
  alerts,
  avatars,
  badges,
  bottonNavigatiom,
  bottomSheets,
  breadCrumbs,
  buttons,
  floatingActionButtons,
  cards,
  carousels,
  chips,
  colors,
  combobox,
  dataIterator,
  dataTables,
  datePickers,
  dialogs,
  dividers,
  expansionPanels,
  footer,
  forms,
  hover,
  icons,
  images,
  inputs,
  itemGroups,
  jumbotrons,
  lists,
  menus,
  navigationDrawers,
  paginations,
  parallax,
  progress,
  ratings,
  resizing,
  ripples,
  selectionCotrols,
  selects,
  sliders,
  snackbars,
  spacing,
  steppers,
  subheaders,
  tabs,
  textarea,
  textFields,
  timelines,
  timePickers,
  toolbars,
  tooltips,
  touchSupport,
  transitions,
  treeview,
  windows
);
export default new Router({
  routes: routes
});

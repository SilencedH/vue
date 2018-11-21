import Grid from "../views/grid/Grid";
import FirstGrid from "../views/grid/FirstGrid";
import DirectionAndAlign from "../views/grid/DirectionAndAlign";
import NestedGrid from "../views/grid/NestedGrid";
import OffSet from "../views/grid/OffSet";
import Order from "../views/grid/Order";
import PlayGround from "../views/grid/PlayGround";
import RowColumnBreakPoint from "../views/grid/RowColumnBreakPoint";
import Spacer from "../views/grid/Spacer";
import Tags from "../views/grid/Tags";
import UniqueLayouts from "../views/grid/UniqueLayouts";

const grid = [
  {
    path: "/grid",
    name: "Grid",
    component: Grid
  },
  {
    path: "/grid/firstGrid",
    name: "firstGrid",
    component: FirstGrid
  },
  {
    path: "/grid/directionAndAlign",
    name: "DirectionAndAlign",
    component: DirectionAndAlign
  },
  {
    path: "/grid/nestedGrid",
    name: "NestedGrid",
    component: NestedGrid
  },
  {
    path: "/grid/offSet",
    name: "OffSet",
    component: OffSet
  },
  {
    path: "/grid/order",
    name: "Order",
    component: Order
  },
  {
    path: "/grid/playGround",
    name: "PlayGround",
    component: PlayGround
  },
  {
    path: "/grid/rowColumnBreakPoint",
    name: "RowColumnBreakPoint",
    component: RowColumnBreakPoint
  },
  {
    path: "/grid/spacer",
    name: "Spacer",
    component: Spacer
  },
  {
    path: "/grid/tags",
    name: "Tags",
    component: Tags
  },
  {
    path: "/grid/uniqueLayouts",
    name: "UniqueLayouts",
    component: UniqueLayouts
  }
];

export default grid;

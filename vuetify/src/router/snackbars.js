import Contextual from "../views/snackbars/Contextual";
import Position from "../views/snackbars/Position";
import Snackbars from "../views/snackbars/Snackbars";

const snackbars = [
  {
    name: "SnackbarsContextual",
    path: "/snackbars/contextual",
    component: Contextual
  },
  {
    name: "Position",
    path: "/snackbars/position",
    component: Position
  },
  {
    name: "Snackbars",
    path: "/snackbars",
    component: Snackbars
  }
];

export default snackbars;

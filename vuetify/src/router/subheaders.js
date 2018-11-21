import Grid from "../views/subheaders/Grid"
import List from "../views/subheaders/List"
import Menu from "../views/subheaders/Menu"
import Social from "../views/subheaders/Social"
import Subheaders from "../views/subheaders/Subheaders"

const subheaders = [
  {
    component: Subheaders,
    name: "Subheaders",
    path: "/subheaders"
  },
  {
    component: Grid,
    name: "SubheadersGrid",
    path: "/subheaders/grid"
  },
  {
    component: List,
    name: "List",
    path: "/subheaders/list"
  },
  {
    component: Menu,
    name: "Menu",
    path: "/subheaders/menu"
  },
  {
    component: Social,
    name: "Social",
    path: "/subheaders/social"
  }
];

export default subheaders;

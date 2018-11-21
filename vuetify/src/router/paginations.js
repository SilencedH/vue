import Disabled from "../views/paginations/Disabled";
import Icons from "../views/paginations/Icons";
import Limit from "../views/paginations/Limit";
import Long from "../views/paginations/Long";
import Paginations from "../views/paginations/Paginations";
import Round from "../views/paginations/Round";
import Short from "../views/paginations/Short";

const paginations = [
  {
    component: Paginations,
    name: "Paginations",
    path: "/paginations"
  },
  {
    component: Disabled,
    name: "Disabled",
    path: "/paginations/disabled"
  },
  {
    component: Icons,
    name: "PaginationsIcons",
    path: "/paginations/icons"
  },
  {
    component: Limit,
    name: "Limit",
    path: "/paginations/limit"
  },
  {
    component: Long,
    name: "Long",
    path: "/paginations/long"
  },
  {
    component: Round,
    name: "PaginationsRound",
    path: "/paginations/round"
  },
  {
    component: Short,
    name: "Short",
    path: "/paginations/short"
  }
];
export default paginations;

import Alerts from "../views/alerts/Alerts";
import Closable from "../views/alerts/Closable";
import Contextual from "../views/alerts/Contextual";
import Icon from "../views/alerts/Icon";
import Outline from "../views/alerts/Outline";
import Transition from "../views/alerts/Transition";

const alerts = [
  {
    path: "/alerts",
    name: "Alerts",
    component: Alerts
  },
  {
    path: "/alerts/closable",
    name: "Closable",
    component: Closable
  },
  {
    path: "/alerts/contextual",
    name: "Contextual",
    component: Contextual
  },
  {
    path: "/alerts/icon",
    name: "Icon",
    component: Icon
  },
  {
    path: "/alerts/outline",
    name: "Outline",
    component: Outline
  },
  {
    path: "/alerts/transition",
    name: "Transition",
    component: Transition
  }
];
export default alerts

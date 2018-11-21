import Combined from "../views/navigationDrawers/Combined";
import Dark from "../views/navigationDrawers/Dark";
import Mini from "../views/navigationDrawers/Mini";
import NavigationDrawers from "../views/navigationDrawers/NavigationDrawers";
import Nested from "../views/navigationDrawers/Nested";
import Permanent from "../views/navigationDrawers/Permanent";
import PermanentClipped from "../views/navigationDrawers/PermanentClipped";
import PermanentFloating from "../views/navigationDrawers/PermanentFloating";
import PermanentFloatingCard from "../views/navigationDrawers/PermanentFloatingCard";
import Persistent from "../views/navigationDrawers/Persistent";
import Temporary from "../views/navigationDrawers/Temporary";

const navigationDrawers = [
  {
    component: NavigationDrawers,
    name: "NavigationDrawers",
    path: "/navigationDrawers"
  },
  {
    component: Combined,
    name: "Combined",
    path: "/navigationDrawers/combined"
  },
  {
    component: Dark,
    name: "NavigationDrawersDark",
    path: "/navigationDrawers/dark"
  },
  {
    component: Mini,
    name: "Mini",
    path: "/navigationDrawers/mini"
  },
  {
    component: Nested,
    name: "Nested",
    path: "/navigationDrawers/nested"
  },
  {
    component: Permanent,
    name: "Permanent",
    path: "/navigationDrawers/permanent"
  },
  {
    component: PermanentClipped,
    name: "PermanentClipped",
    path: "/navigationDrawers/permanentClipped"
  },
  {
    component: PermanentFloating,
    name: "PermanentFloating",
    path: "/navigationDrawers/permanentFloating"
  },
  {
    component: PermanentFloatingCard,
    name: "PermanentFloatingCard",
    path: "/navigationDrawers/permanentFloatingCard"
  },
  {
    component: Persistent,
    name: "Persistent",
    path: "/navigationDrawers/persistent"
  },
  {
    component: Temporary,
    name: "Temporary",
    path: "/navigationDrawers/temporary"
  }
];

export default navigationDrawers;

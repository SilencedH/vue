import Badges from "../views/badges/Badges"
import Character from "../views/badges/Character"
import Icon from "../views/badges/Icon"
import Inline from "../views/badges/Inline"
import Overlap from "../views/badges/Overlap"
import Visibility from "../views/badges/Visibility"

const badges = [
  {
    path: "/badges",
    name: "Badges",
    component: Badges
  },
  {
    path: "/badges/character",
    name: "/Character",
    component: Character
  },
  {
    path: "/badges/icon",
    name: "BadgesIcon",
    component: Icon
  },
  {
    path: "/badges/inline",
    name: "Inline",
    component: Inline
  },
  {
    path: "/badges/overlap",
    name: "Overlap",
    component: Overlap
  },
  {
    path: "/badges/visibility",
    name: "Visibility",
    component: Visibility
  }
]

export default badges
import Cards from "../views/cards/Cards"
import Components from "../views/cards/Components"
import CustomActions from "../views/cards/CustomActions"
import Grids from "../views/cards/Grids"
import Horizontal from "../views/cards/Horizontal"
import MediaWithText from "../views/cards/MediaWithText"

const cards = [
  {
    component: Cards,
    name: "Cards",
    path: "/cards"
  },
  {
    component: Components,
    name: 'Components',
    path: '/cards/compnents'
  },
  {
    component: CustomActions,
    name: 'CustomActions',
    path: '/cards/customActions'
  },
  {
    component: Grids,
    name: "Grids",
    path: "/cards/grids"
  },
  {
    component: Horizontal,
    name: "Horizontal",
    path: "/cards/horizontal"
  },
  {
    component: MediaWithText,
    name: "MediaWithText",
    path: "/cards/mediaWithText"
  }
]
export default cards
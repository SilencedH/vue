import GridList from "../views/gridList/GridList"
import Default from "../views/gridList/Default"
import SubHeader from "../views/gridList/SubHeader"

const gridList = [
  {
    path:"/gridList",
    name:"GridList",
    component:GridList
  },
  {
    path:"/gridList/default",
    name:"Default",
    component:Default
  },
  {
    path:"/gridList/subHeader",
    name:"SubHeader",
    component:SubHeader
  }
]
export default gridList

import ItemGroups from "../views/itemGroups/ItemGroups"
import Post from "../views/itemGroups/Post"
import Usage from "../views/itemGroups/Usage"

const itemGroups = [
  {
    component: ItemGroups,
    path: "/itemGroups",
    name: "ItemGroups"
  },
  {
    component: Post,
    name: "ItemGroupsPost",
    path: "/itemGroups/post"
  },
  {
    component: Usage,
    path: "/itemGroups/usage",
    name: "ItemGroupsUsage"
  }
]
export default itemGroups
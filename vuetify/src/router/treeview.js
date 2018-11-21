import Directory from "../views/treeview/Directory"
import FileExplorer from "../views/treeview/FileExplorer"
import Hotspots from "../views/treeview/Hotspots"
import Treeview from "../views/treeview/Treeview"
import Usage from "../views/treeview/Usage"

const treeview = [
  {
    component: Treeview,
    name: "Treeview",
    path: "/treeview"
  },
  {
    component: Directory,
    name: "Directory",
    path: "/treeview/directory"
  },
  {
    component: FileExplorer,
    name: "FileExplorer",
    path: "/treeview/fileExplorer"
  },
  {
    component: Hotspots,
    name: "Hotspots",
    path: "/treeview/hotspots"
  },
  {
    component: Usage,
    name: "TreeviewUsage",
    path: "/treeview/usage"
  }
];

export default treeview;

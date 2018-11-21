import Crud from "../views/dataTables/Crud";
import CustomIcons from "../views/dataTables/CustomIcons";
import DataTables from "../views/dataTables/DataTables";
import EditDialog from "../views/dataTables/EditDialog";
import Expand from "../views/dataTables/Expand";
import Footer from "../views/dataTables/Footer";
import HeaderCell from "../views/dataTables/HeaderCell";
import HeaderLess from "../views/dataTables/HeaderLess";
import Headers from "../views/dataTables/Headers";
import NoData from "../views/dataTables/NoData";
import PageText from "../views/dataTables/PageText";
import Paginate from "../views/dataTables/Paginate";
import Progress from "../views/dataTables/Progress";
import Search from "../views/dataTables/Search";
import Select from "../views/dataTables/Select";
import Server from "../views/dataTables/Server";
import Sort from "../views/dataTables/Sort";
import Standard from "../views/dataTables/Standard";

const dataTables = [
  {
    name: "Curd",
    path: "/dataTables/crud",
    component: Crud
  },
  {
    name: "DataTablesCustomIcons",
    path: "/dataTables/customIcons",
    component: CustomIcons
  },
  {
    name: "DataTables",
    path: "/dataTables",
    component: DataTables
  },
  {
    name: "EditDialog",
    path: "/dataTables/editDialog",
    component: EditDialog
  },
  {
    name: "Expand",
    path: "/dataTables/expand",
    component: Expand
  },
  {
    name: "DataTablesFooter",
    path: "/dataTables/footer",
    component: Footer
  },
  {
    name: "HeaderCell",
    path: "/dataTables/headerCell",
    component: HeaderCell
  },
  {
    name: "HeaderLess",
    path: "/dataTables/headerLess",
    component: HeaderLess
  },
  {
    name: "Headers",
    path: "/dataTables/headers",
    component: Headers
  },
  {
    name: "DataTablesNoData",
    path: "/dataTables/noData",
    component: NoData
  },
  {
    name: "PageText",
    path: "/dataTables/pageText",
    component: PageText
  },
  {
    name: "Paginate",
    path: "/dataTables/paginate",
    component: Paginate
  },
  {
    name: "DataTablesProgress",
    path: "/dataTables/progress",
    component: Progress
  },
  {
    name: "Search",
    path: "/dataTables/search",
    component: Search
  },
  {
    name: "Select",
    path: "/dataTables/select",
    component: Select
  },
  {
    name: "/Server",
    path: "/dataTables/server",
    component: Server
  },
  {
    name: "Sort",
    path: "/dataTables/sort",
    component: Sort
  },
  {
    name: "DataTablesStandard",
    path: "/dataTables/standard",
    component: Standard
  }
];
export default dataTables;

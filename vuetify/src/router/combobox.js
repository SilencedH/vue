import ComboboxIndex from "../views/combobox/ComboboxIndex";
import Combobox from "../views/combobox/Combobox";
import Advanced from "../views/combobox/Advanced";
import ComboboxMultiple from "../views/combobox/ComboboxMultiple";
import NoData from "../views/combobox/NoData";

const combobox = [
  {
    name: "Combobox",
    path: "/combobox",
    component: ComboboxIndex
  },
  {
    name: "ComboboxIndex",
    path: "/combobox/comboboxIndex",
    component: Combobox
  },
  {
    name: "ComboboxAdvanced",
    path: "/combobox/advanced",
    component: Advanced
  },
  {
    name: "ComboboxMultiple",
    path: "/combobox/comboboxMultiple",
    component: ComboboxMultiple
  },
  {
    name: "NoData",
    path: "/combobox/noData",
    component: NoData
  }
];

export default combobox;

import CompanyFooter from "../views/footer/CompanyFooter"
import Default from "../views/footer/Default"
import Footer from "../views/footer/Footer"
import IndigoFooter from "../views/footer/IndigoFooter"
import TealFooter from "../views/footer/TealFooter"

const footer = [
  {
    component: CompanyFooter,
    name: "CompanyFooter",
    path: "/footer/companyFooter"
  },
  {
    component: Default,
    name: "FooterDefault",
    path: "/footer/default"
  },
  {
    component: Footer,
    name: "Footer",
    path: "/footer"
  },
  {
    component: IndigoFooter,
    name: "IndigoFooter",
    path: "/footer/indigoFooter"
  },
  {
    component: TealFooter,
    name: "TealFooter",
    path: "/footer/tealFooter"
  }
]
export default footer
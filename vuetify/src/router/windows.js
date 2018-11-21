import Account from "../views/windows/Account";
import Onboarding from "../views/windows/Onboarding";
import Usage from "../views/windows/Usage";
import Windows from "../views/windows/Windows";

const windows = [
  {
    component: Account,
    name: "Account",
    path: "/windows/account"
  },
  {
    component: Onboarding,
    name: "Onboarding",
    path: "/windows/onboarding"
  },
  {
    component: Usage,
    name: "WindowsUsage",
    path: "/windows/usage"
  },
  {
    component: Windows,
    name: "Windows",
    path: "/windows"
  }
];
export default windows;

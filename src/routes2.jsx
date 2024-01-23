import {
    HomeIcon,
    UserCircleIcon,
    TableCellsIcon,
    BellIcon,
    ArrowRightOnRectangleIcon,
    UserPlusIcon,
  } from "@heroicons/react/24/solid";
  import { Profile, Tables, Notifications } from "@/pages/dashboard";
  import ProcHome  from "@/pages/dashboard/procHome";
  import BudgetCreate from "./pages/dashboard/budgetCreate";
  import { SignIn, SignUp } from "@/pages/auth";
  import CatDonut from "./pages/dashboard/catdonut";
import BudgetAnalysis from "./pages/dashboard/budgetanalysis";
import BarsOP from "./pages/dashboard/barsop";
import SuppDist from "./pages/dashboard/suppdist";
import Trend from "./pages/dashboard/trend";
  
  const icon = {
    className: "w-5 h-5 text-inherit",
  };
  
  export const routes2 = [
    {
      layout: "dashboardstudent",
      pages: [
        {
          icon: <HomeIcon {...icon} />,
          name: "Procurement",
          path: "/home",
          element: <ProcHome />,
  
        },
        {
          icon: <HomeIcon {...icon} />,
          name: "Create Budget Plan",
          path: "/budget",
          element: <BudgetCreate />,
        },
        {
          icon: <UserCircleIcon {...icon} />,
          name: "Budget Analysis",
          path: "/budgetanalysis",
          element: <BudgetAnalysis />,
        },
        // {
        //   icon: <TableCellsIcon {...icon} />,
        //   name: "tables",
        //   path: "/tables",
        //   element: <Tables />,
        // },
        // {
        //   icon: <BellIcon {...icon} />,
        //   name: "notifications",
        //   path: "/notifications",
        //   element: <Notifications />,
        // },
      ],
    },
    {
      title: "Analysis",
      layout: "dashboardemp",
      pages: [
        {
          icon: <ArrowRightOnRectangleIcon {...icon} />,
          name: "Category",
          path: "/categories",
          element: <CatDonut />,
        },
        {
          icon: <UserPlusIcon {...icon} />,
          name: "Growth",
          path: "/growth",
          element: <BarsOP />,
        },
        {
          icon: <ArrowRightOnRectangleIcon {...icon} />,
          name: "Trend in Cost",
          path: "/trend",
          element: <Trend />,
        },
        {
          icon: <UserPlusIcon {...icon} />,
          name: "Suppliers Distribution",
          path: "/suppdist",
          element: <SuppDist />,
        },
      ],
    },
    // {
    //   title: "auth pages",
    //   layout: "auth",
    //   pages: [
    //     {
    //       icon: <ArrowRightOnRectangleIcon {...icon} />,
    //       name: "sign in",
    //       path: "/sign-in",
    //       element: <SignIn />,
    //     },
    //     {
    //       icon: <UserPlusIcon {...icon} />,
    //       name: "sign up",
    //       path: "/sign-up",
    //       element: <SignUp />,
    //     },
    //   ],
    // },
  ];
  
  export default routes2;
  
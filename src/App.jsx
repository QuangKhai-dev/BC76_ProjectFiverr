import { useRoutes } from "react-router-dom"
import { pathDefault } from "./common/path";
import HomeTemplate from "./templates/HomeTemplate/HomeTemplate";
import SignIn from "./pages/SignIn/SignIn";
import { Bounce, toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { createContext } from "react";
import AdminTemplate from "./templates/AdminTemplate/AdminTemplate";
import ManagerUser from "./pages/ManagerUser/ManagerUser";
import ManagerJob from "./pages/ManagerJob/ManagerJob";
import ManagerComment from "./pages/ManagerComment/ManagerComment";

export const NotificationContext = createContext()

const arrRoutes = [
  {
    path: pathDefault.homePage,
    element: <HomeTemplate />,
    children: [

    ]
  },
  {
    path: pathDefault.signIn,
    element: <SignIn />
  },
  {
    path: pathDefault.admin,
    element: <AdminTemplate />,
    children: [
      {
        index: true,
        element: <ManagerUser />
      },
      {
        path: "manager-user",
        element: <ManagerUser />
      },
      {
        path: "manager-job",
        element: <ManagerJob />
      },
      {
        path: "manager-comment",
        element: <ManagerComment />
      }
    ]
  }
];

function App() {
  const routes = useRoutes(arrRoutes)

  const handleNotification = (type, content, timeClose = 3000) => {
    toast[type](content, {
      position: "top-right",
      autoClose: timeClose,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,

    })
    // toast.error || toast.success || toast.warning || toast.info
  }


  return <>
    <NotificationContext.Provider value={handleNotification}>
      {routes}
      <ToastContainer />
    </NotificationContext.Provider>
  </>
}

export default App

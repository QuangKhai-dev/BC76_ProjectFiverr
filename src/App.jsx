import { useRoutes } from "react-router-dom"
import { pathDefault } from "./common/path";
import HomeTemplate from "./templates/HomeTemplate/HomeTemplate";
import SignIn from "./pages/SignIn/SignIn";
import { Bounce, toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { createContext } from "react";

export const NotificationContext = createContext()

const arrRoutes = [
  {
    path: pathDefault.homePage,
    element: <HomeTemplate />,
  },
  {
    path: pathDefault.signIn,
    element: <SignIn />
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

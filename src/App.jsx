import { useRoutes } from "react-router-dom"
import { pathDefault } from "./common/path";
import HomeTemplate from "./templates/HomeTemplate/HomeTemplate";
import SignIn from "./pages/SignIn/SignIn";


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


  return routes
}

export default App

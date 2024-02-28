import "./App.css";
import { RouterProvider } from "react-router-dom";
import { Router } from "./Router";

const App = () => {
  return <RouterProvider router={Router} fallbackElement={<p>loading...</p>} />;
  // <>
  //    <AppRoutes />
  //    <Contact />
  //    <Footer />
  //  </>
};
export default App;

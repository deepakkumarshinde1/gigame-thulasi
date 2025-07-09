import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Header from "./components/Header";
import MainLayout from "./components/layouts/MainLayout";
import PageNotFound from "./components/PageNotFound";
import Plans from "./components/Plans";
import PlanDesc from "./components/plans/PlanDesc";

function App() {
  let router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          path: "",
          element: <Home />,
          index: true,
        },
        {
          path: "about",
          element: <About />,
        },
        {
          path: "contact",
          element: <Contact />,
        },
        {
          path: "plans",
          element: <Plans />,
          children: [
            {
              path: ":planId",
              element: <PlanDesc />,
            },
          ],
        },
      ],
    },
    {
      // path: "*",
      // element: <PageNotFound />,
      // element: <Navigate to="/" replace />,
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;

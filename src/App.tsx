import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Questions from "./pages/Questions";
import HistoryPage from "./pages/HistoryPage";
import HistoryDetail from "./components/History/HistoryDetail";
import AboutPage from "./pages/AboutPage";
const ErrorPage = () => {
  return (
    <>
      <h1>TERJADI ERROR</h1>
    </>
  );
};
const router = createBrowserRouter([
  {
    path: "/",
    Component: Home,
  },
  {
    path: "/question",
    errorElement: <ErrorPage />,
    Component: Questions,
  },
  {
    path: "/history",
    Component: HistoryPage,
  },
  {
    path: "/history/:id",
    Component: HistoryDetail,
  },
  {
    path: "/about",
    Component: AboutPage,
  },
]);
const App = () => {
  return (
    <div className="mx-auto min-h-screen">
      <RouterProvider router={router} />
    </div>
  );
};
export default App;

import React from "react";
import {
  Outlet,
  RouterProvider,
  createBrowserRouter,
  useNavigation,
} from "react-router-dom";
import About from "./components/About";
import Banner from "./components/Banner";
import Book from "./components/Book";
import ErrorPage from "./components/ErrorPage";
import Navbar from "./components/Navbar";
import Spinner from "./components/Spinner";
import Store from "./components/Store";

const Layout = () => {
  const navigation = useNavigation();
  return (
    <>
      <Navbar />
      {navigation.state === "loading" ? <Spinner /> : <Outlet />}
    </>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Banner />,
      },
      {
        path: "/store",
        element: <Store />,
        loader: () => fetch("https://api.itbook.store/1.0/new"),
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/book/:id",
        element: <Book />,
        loader: ({ params }) =>
          fetch(`https://api.itbook.store/1.0/books/${params.id}`),
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;

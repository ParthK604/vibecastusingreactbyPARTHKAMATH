import React from "react";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Playbar from "./components/Playbar";
import Romantic from "./pages/Romantic";
import English from "./pages/English";
import Party from "./pages/Party";
import HipHop from "./pages/HipHop";
import Bollywood from "./pages/Bollywood";
import Home from "./Home";
import "./App.css";

function Layout() {
  return (
    <div className="h-screen flex flex-col">
      <Navbar />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar />
        <main className="flex-1 bg-amber-50 overflow-y-auto p-4">
          <Outlet /> 
        </main>
      </div>
      <Playbar />
    </div>
  );
}
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "", element: <Home /> },
      { path: "romantic", element: <Romantic /> },
      { path: "english", element: <English /> },
      { path: "party", element: <Party /> },
      { path: "hiphop", element: <HipHop /> },
      { path: "bollywood", element: <Bollywood /> },
    ],
  },
]);


export default function App() {
  return <RouterProvider router={router} />;
}

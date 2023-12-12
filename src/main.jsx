import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Layout from "./Layout.jsx";
import Home from "./components/Home/Home.jsx";
import About from "./components/About/About.jsx";
import Contact from "./components/Contact/Contact.jsx";
import User from "./components/User/User.jsx";
import Github, { githubInfoLoader } from "./components/Github/Github.jsx";
import LoginPage from "./components/Login/LoginPage.jsx";
import RenderList from "./components/Topics/RenderList/RenderList.jsx";
import App from "./App.jsx";
import Event from "./components/Events/Event.jsx";
import State from "./components/Hooks/UseState/State.jsx";
import UseState from "./components/Hooks/UseState/useState.jsx";
import UseEffectHooks from "./components/Hooks/UseEffectHooks.jsx";
import UseRefHook from "./components/Hooks/UseRefHook.jsx";
import UseMemo from "./components/Hooks/UseMemo.jsx";
import Parent from "./components/Hooks/PropDrilling/Parent.jsx";
import Parent1 from "./components/Hooks/ContextApi/Parent1.jsx";
import Parent2 from "./components/Hooks/UseContext/Parent2.jsx";
import UseCallback from "./components/Hooks/UseCallback/UseCallback.jsx";

// 1. define route

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Layout/>,
//     children: [
//       {
//         path: "",
//         element:<Home/>
//       },
//       {
//         path: "about",
//         element:<About/>
//       },
//       {
//         path: "contact",
//         element:<Contact/>
//       }
//     ]
//   }
// ])

// 2. define route

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />} />
      <Route path="login" element={<LoginPage />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
      <Route path="user/:userId" element={<User />} />
      <Route loader={githubInfoLoader} path="github" element={<Github />} />
      <Route path="renderList" element={<RenderList />} />
      <Route path="context" element={<App />} />
      <Route path="event" element={<Event />} />
      <Route path="state" element={<State />} />
      <Route path="useState" element={<UseState />} />
      <Route path="useEffect" element={<UseEffectHooks />} />
      <Route path="useRef" element={<UseRefHook />} />
      <Route path="useMemo" element={<UseMemo />} />
      <Route path="propDrilling" element={<Parent />} />
      <Route path="context1" element={<Parent1 />} />
      <Route path="useContext" element={<Parent2 />} />
      <Route path="callback" element={<UseCallback />} />
    </Route>
  )
);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

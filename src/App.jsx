import "./App.css";
import UserContextProvider from "./components/Topics/Context/UserContextProvider";
import Login from "./components/Topics/components/Login";
import Profile from "./components/Topics/components/Profile";

function App() {
  return (
    <UserContextProvider>
      <h1 className="bg-green-600 p-4">React Router Dom</h1>
      <Login/>
      <Profile/>
    </UserContextProvider>
  );
}

export default App;

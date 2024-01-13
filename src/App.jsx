import Drawer from "./components/Drawer";
import StatusBar from "./components/StatusBar";
import UsersList from "./components/UsersList";
import Navbar from "./layouts/Navbar";

const App = () => {
  return (
    <div className="pb-4">
      <Drawer />
      <Navbar />
      <div className="container my-4">
        <StatusBar />
        <UsersList />
      </div>
    </div>
  );
};

export default App;

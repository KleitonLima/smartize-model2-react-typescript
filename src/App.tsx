import { Toaster } from "react-hot-toast";
import "./App.css";
import Router from "./router";

const App = () => {
  return (
    <div>
      <Toaster position="top-center" reverseOrder={false} />
      <Router />
    </div>
  );
};

export default App;

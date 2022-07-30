import { Route, Routes } from "react-router-dom";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<h1>Home</h1>}/>
      <Route path="/login" />
      <Route path="/register" />
    </Routes>
  );
};

export default Router;

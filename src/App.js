import { Route, Routes, Redirect } from "react-router-dom";
import { makeStyles } from "@mui/styles";

import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import NoMatch from "./commons/NoMatch";
import Content from "./components/Content";
import Grid from "./components/Grid"
import Home from "./components/Home"
import Login from "./commons/Login"

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
  },
}));

function App() {
  const classes = useStyles();
  return (
    <div>
      <Navbar />
      <div className="container is-fluid columns">
        <Sidebar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/single/:type/:id" element={<Content />} />
          <Route path="/collection/:type" element={<Grid />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<NoMatch />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;

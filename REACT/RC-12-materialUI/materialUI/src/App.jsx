import "./App.css";
import MyCard from "./components/MyCard";
import Navbar from "./components/Navbar";
import AddTaskIcon from "@mui/icons-material/AddTask";

function App() {
  return (
    <>
      <Navbar />
      <MyCard />
      <AddTaskIcon sx={{ margin: "3rem" }} />
    </>
  );
}

export default App;

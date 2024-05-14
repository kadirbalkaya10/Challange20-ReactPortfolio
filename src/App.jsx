import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <main className='flex justify-center items-center flex-col'>
      <Navbar />
      <Outlet />
    </main>
  );
}

export default App;

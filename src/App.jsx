import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <main className='flex justify-center items-center flex-col'>
      <Navbar />
      <Outlet />
      <Footer />
    </main>
  );
}

export default App;

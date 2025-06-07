import "./App.css";
import Navbar from "./Component/Navbar/Navbar";
import Routing from "./Component/Routing/Routing";
import PreLoader from "./Component/common/PreLoader";
import { useState, useEffect } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

let App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a delay (e.g., fetching config or assets)
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer); // cleanup
  }, []);

  if (loading) {
    return <PreLoader />;
  }
  return (
    <>
      <ToastContainer position="top-center" autoClose={3000} />
      <Navbar />
      <Routing />
    </>
  );
};

export default App;

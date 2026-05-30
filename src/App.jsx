import Router from "./Router/Router";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        display: "flex",
        justifyContent: "start",
        alignItems: "ceter",
        flexDirection: "column",
        gap: "50px",
        fontFamily: "sans-serif",
        backgroundColor: "#202020",
        overflow: "auto",
        color: "white",
      }}
    >
      <Navbar />
      <Router />
    </div>
  );
};

export default App;

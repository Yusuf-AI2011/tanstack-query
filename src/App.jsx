import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Todos from "./components/Todos";
import Users from "./components/Users";
import Router from "./Router/Router";
import Navbar from "./components/Navbar";

const App = () => {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
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
          color: "white"
        }}
      >
        <Navbar />
        <Router />
      </div>
    </QueryClientProvider>
  );
};

export default App;

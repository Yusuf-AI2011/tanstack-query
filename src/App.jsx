import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Todos from "./components/Todos";
import Users from "./components/Users";

const App = () => {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "start",
          gap: "50px",
          fontFamily: "sans-serif"
        }}
      >
        <Todos />
        <Users />
      </div>
    </QueryClientProvider>
  );
};

export default App;

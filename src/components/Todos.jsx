import React from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

import { getTodos, postTodos } from "../api";

const Todos = () => {
  const queryClient = useQueryClient();
  const query = useQuery({ queryKey: ["todos"], queryFn: getTodos });
  const mutations = useMutation({
    mutationFn: postTodos,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["todos"] });
    },
  });

  console.log(query);

  return (
    <div>
      <button>Add new todo title</button>
      {query.data?.map((todo) => (
        <p style={{ color: "blue" }} key={todo.id}>
          {todo.title}
        </p>
      ))}
    </div>
  );
};

export default Todos;

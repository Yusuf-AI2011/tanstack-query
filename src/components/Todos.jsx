import React from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

import { deleteTodos, editTodos, getTodos, postTodos } from "../api";
import { FaCheck } from "react-icons/fa";
import { FaX } from "react-icons/fa6";

const Todos = () => {
  const queryClient = useQueryClient();

  const query = useQuery({ queryKey: ["todos"], queryFn: getTodos });

  const mutations = useMutation({
    mutationFn: postTodos,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["todos"] });
    },
  });

  const deleteMutation = useMutation({
    mutationFn: deleteTodos,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["todos"] });
    },
  });

  const editMutation = useMutation({
    mutationFn: editTodos,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["todos"] });
    },
  });

  return (
    <div className="flex justify-center items-center flex-col gap-[50px]">
      <button
        onClick={() => {
          mutations.mutate({
            id: 404,
            userId: "404",
            title: "New title about everything",
            completed: true,
          });
        }} className="w-[200px] h-[30px] border-2 rounded-[6px]"
      >
        Add new todo title
      </button>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Completed</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {query.data?.map(({ id, title, completed }) => (
            <tr key={id} className="h-[50px]">
              <td>{id}</td>
              <td>{title}</td>
              <td>
                {completed ? (
                  <FaCheck style={{ color: "green" }} />
                ) : (
                  <FaX style={{ color: "red" }} />
                )}
              </td>
              <td>
                <button
                  onClick={() => {
                    editMutation.mutate({
                      id: id,
                      ...{
                        title: "You changed it",
                        completed: true,
                      },
                    });
                  }} className="w-[70px] h-[30px] border-2 rounded-[6px] text-white bg-orange-500"
                >
                  Edit
                </button>
                <button
                  onClick={() => {
                    deleteMutation.mutate(id);
                  }} className="w-[70px] h-[30px] border-2 rounded-[6px] text-white bg-red-500"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Todos;

import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import React from "react";

import { deleteUsers, editUsers, getUsers, postUsers } from "../api";

const Users = () => {
  const queryClient = useQueryClient();

  const query = useQuery({ queryKey: ["users"], queryFn: getUsers });

  const mutations = useMutation({
    mutationFn: postUsers,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["users"] });
    },
  });

  const deleteMutation = useMutation({
    mutationFn: deleteUsers,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["users"] });
    },
  });

  const editMutation = useMutation({
    mutationFn: editUsers,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["users"] });
    },
  });

  return (
    <div className="flex justify-center items-center flex-col gap-[50px]">
      <button
        onClick={() => {
          mutations.mutate({
            username: "Yusuf",
          });
        }} className="w-[200px] h-[30px] border-2 rounded-[6px]"
      >
        Add new user
      </button>

      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Username</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {query.data?.map(({ id, username, email }) => (
            <tr key={id} className="h-[50px]">
              <td>{id}</td>
              <td>{username}</td>
              <td>{email}</td>
              <td>
                <button
                  onClick={() => {
                    editMutation.mutate({
                      id: id,
                      ...{
                        username: "Name",
                        email: "name@example.com",
                      },
                    });
                  }}
                  className="w-[70px] h-[30px] border-2 rounded-[6px] text-white bg-orange-400"
                >
                  Edit
                </button>
                <button
                  onClick={() => {
                    deleteMutation.mutate(id);
                  }}
                  className="w-[70px] h-[30px] border-2 rounded-[6px] text-white bg-red-500"
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

export default Users;

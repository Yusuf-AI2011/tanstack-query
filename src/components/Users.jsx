import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import React from "react";

import { getUsers, postUsers } from "../api";

const Users = () => {
  const queryClient = useQueryClient();
  const query = useQuery({ queryKey: ["users"], queryFn: getUsers });
  const mutations = useMutation({
    mutationFn: postUsers,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["users"] });
    },
  });
  return (
    <div>
      <button
        onClick={() => {
          mutations.mutate({
            username: "Yusuf",
          });
        }}
      >
        Add new user
      </button>

      {query.data?.map((user) => (
        <p style={{ color: "green" }} key={user.id}>
          {user.username}
        </p>
      ))}
    </div>
  );
};

export default Users;

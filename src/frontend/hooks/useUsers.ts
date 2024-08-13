"use client";

import IUser from "@/backend/types/IUser";
import axios from "axios";
import React, { useEffect, useState } from "react";
function useUsers() {
  const [users, setUsers] = useState<IUser[]>([]);

  async function getUsers() {
    const response = await axios("/api/users").catch((err) => console.log(err));
    if (response) setUsers(response.data.users);
  }
  useEffect(() => {
    if (!users.length) getUsers();
  }, [users.length]);

  return {
    users,
  };
}

export default useUsers;

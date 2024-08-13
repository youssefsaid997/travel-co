"use client";

import Card from "../components/shared/Card";
import useUsers from "../hooks/useUsers";

export default function UsersList() {
  const { users } = useUsers();
  return (
    <div className="flex gap-2 ">
      {users.length
        ? users.map((user) => <Card user={user} key={user._id} />)
        : "no users found"}
    </div>
  );
}

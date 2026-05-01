import React from "react";

const UserDetailsPage = async ({ params }) => {
  const { userId } = await params;
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/users/${userId}`,
  );
  const user = await res.json();

  return (
    <div className=" card card-primary bg-base-200 mt-3 w-auto">
      <p>{user.name}</p>
      <p>{user.email}</p>
      <p>{user.phone}</p>
    </div>
  );
};

export default UserDetailsPage;

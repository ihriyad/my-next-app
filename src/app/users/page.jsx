import Link from "next/link";
import React from "react";

const UsersPage = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await res.json();
  return (
    <div>
      <h3>Total users:{users.length} </h3>
      <div className="grid grid-cols-3 gap-6">
        {users.map((user) => (
          <div key={user.id} className="card bg-base-100 w-auto shadow-sm">
            <div className="card-body">
              <h2 className="card-title">{user.name}!</h2>
              <p>
                A card component has a figure, a body part, and inside body
                there are title and actions parts
              </p>
              <div className="card-actions justify-end">
                <Link href={`/users/${user.id}`} className="btn btn-primary">Show Info</Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UsersPage;

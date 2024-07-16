import React from "react";
import { trpc } from "../../utils/trpc";

const UsersPage: React.FC = () => {
  const qeryResponse = trpc.users.getUser.useQuery();
  console.log("**** ", qeryResponse);
  if (qeryResponse.isLoading) return <div>Loading...</div>;

  return (
    <div>
      <h1 className='text-center font-bold font-23 mb-3'>All Users</h1>
      <ul className='list-disc flex flex-wrap'>
        {qeryResponse.data?.map((user) => (
          <li key={user.id} className='basis-1/4'>
            <h2>{user.name}</h2>
            <p>{user.email}</p>
            show all posts
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UsersPage;

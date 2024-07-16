import React from "react";
import { useRouter } from "next/router";
import { trpc } from "../../utils/trpc";

const SingleUserPage: React.FC = () => {
  const router = useRouter();
  const { id } = router.query;
  const { data: user, isLoading } = trpc.users.getUser.useQuery(
    { id: Number(id) },
    { enabled: !!id }
  );

  if (isLoading) return <div>Loading...</div>;

  if (!user) return <div>No user found</div>;

  return (
    <div>
      <h1>{user.name}</h1>
      <p>{user.email}</p>
    </div>
  );
};

export default SingleUserPage;

import React from "react";
import { useRouter } from "next/router";
import { trpc } from "../../utils/trpc";

type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

const SinglePostPage: React.FC = () => {
  const router = useRouter();
  const { id } = router.query;
  const { data: post, isLoading } = trpc.singlePostsRouter.getPost.useQuery({
    id: Number(id),
  });

  if (isLoading) return <div>searching your post...</div>;

  if (!post) return <div>No post found</div>;

  return (
    <div>
      <h1 className='text-lg mb-2'>{post.title}</h1>
      <p>{post.body}</p>
      <p>{post.userId}</p>
    </div>
  );
};

export default SinglePostPage;

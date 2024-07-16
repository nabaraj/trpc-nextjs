import React from "react";
import { trpc } from "../../utils/trpc";
import Link from "next/link";

const PostsPage: React.FC = () => {
  const { data: posts, isLoading } = trpc.posts.getPost.useQuery();

  if (isLoading) return <div>Loading...</div>;

  return (
    <div>
      <h1 className='text-center font-bold font-23 mb-3'>All Posts</h1>
      <ul className='flex flex-wrap'>
        {posts?.map((post) => (
          <li key={post.id} className='basis-1/4 p-1 border-b-stone-500'>
            <h2>
              <Link
                href={`/posts/${post.id}`}
                className='font-bold text-blue-400'
              >
                {post.title}
              </Link>
            </h2>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostsPage;

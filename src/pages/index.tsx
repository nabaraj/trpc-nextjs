import { trpc } from "../utils/trpc";

export default function IndexPage() {
  const { data, isLoading } = trpc.hello.useQuery({
    name: "nabaraj",
  });
  if (isLoading) {
    return <div>Loading...</div>;
  } else {
    return (
      <div>
        <p>
          {data?.greeting}-{data?.test}
        </p>
      </div>
    );
  }
}

import type { AppType } from "next/app";
import { trpc } from "../utils/trpc";
import { Header } from "@/components/header";
import "../styles/index.css";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <div>
      <Header />
      <div className='container mx-auto px-4'>
        <Component {...pageProps} />
      </div>
    </div>
  );
};

export default trpc.withTRPC(MyApp);

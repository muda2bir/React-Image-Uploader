import DropRectangle from "@/components/DropRectangle";
import Success from "@/components/Success";
import Uploading from "@/components/Uploading";
import Head from "next/head";
import { useSelector } from "react-redux";

export default function Home() {
  const mainState = useSelector((state) => state.mainState.value);
  return (
    <>
      <Head>
        <title>React Image Uploader | Built by @muda2bir</title>
        <link rel="icon" href="/devchallenges.png" />
      </Head>
      <div className="App">
        <div className="container">
          {mainState === "uploading" ? (
            <Uploading />
          ) : mainState === "success" ? (
            <Success />
          ) : (
            <DropRectangle />
          )}
          <span className="creator_username">
            created by{" "}
            <a href="https://github.com/muda2bir" target="_blank">
              @muda2bir
            </a>{" "}
            - devchallenges.io
          </span>
        </div>
      </div>
    </>
  );
}

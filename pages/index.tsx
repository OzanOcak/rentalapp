import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className="flex justify-center items-center h-screen font-bold text-xl text-[2rem] text-[green] ">
      {" "}
      hello world!
    </div>
  );
};

export default Home;

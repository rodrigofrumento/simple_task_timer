import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "../components/layout/Layout";
import { useState } from "react";
import { UserContext } from "../contexts/UserContext";
import { useUser } from "../custom-hooks/useUser"

function MyApp({ Component, pageProps }: AppProps) {
  const { username, setUsername } = useUser()

  return (
    <UserContext.Provider value={{ username, setUsername }}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </UserContext.Provider>
  );
}

export default MyApp;

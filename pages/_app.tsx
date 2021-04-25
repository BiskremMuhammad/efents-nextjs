/**
 * @author Muhammad Omran
 * @date 06-04-2021
 * @description implement page basic construction
 */

import { AppProps } from "next/dist/next-server/lib/router/router";

import Layout from "../modules/components/layout";
import "../styles/globals.scss";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;

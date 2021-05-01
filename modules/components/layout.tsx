/**
 * @author Muhammad Omran
 * @date 20-04-2021
 * @description implement the Page layout Structure
 */

import React from "react";
import Head from "next/head";

import { Navbar } from "./navbar";
import { Footer } from "./layout/footer";

const Layout = ({ children }) => (
  <div className="efents-root-container">
    <Head>
      <title>efents</title>
      <link rel="icon" href="/favicon.ico" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <Navbar />
    <main>{children}</main>
    <Footer />
  </div>
);

export default Layout;

import React from "react";
import Head from "next/head";
import Footer from "./Footer";
import Header from "./Header";

const Layout = ({ children, title }) => {
  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <title>{title}</title>
      </Head>
      <div className=" sticky top-0 z-30">
        <Header />
      </div>

      <main>{children}</main>
      <Footer />
    </>
  );
};

Layout.defaultProps = {
  title: "Ak Entertainments",
};

export default Layout;

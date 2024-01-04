import React from "react";
import Footer from "./Footer";
import { Helmet } from "react-helmet";
import Header from "./Header";
import { Toaster } from "react-hot-toast";

const Layout = ({ children, title, description, keywords, author }) => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />

        <div>
          <meta name="description" content={description} />
          <meta name="keywords" content={keywords} />
          <meta name="author" content={author} />
        </div>

        <title>{title}</title>
      </Helmet>
      <Header />
      <main style={{ minHeight: "75vh" }}>
        <Toaster />
        {children}
      </main>
      <Footer />
    </>
  );
};

Layout.defaultProps = {
  title: "Eccomerce app-shop now",
  description: "mern stack project",
  keywords: "mern,react,node,mongodb",
  author: "Laxmi",
};

export default Layout;

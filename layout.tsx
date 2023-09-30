import React from "react";

const Layout = ({ children, bgColor }) => {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <title>Infinity 3.0</title>
        <link rel="stylesheet" href="/main.css" />
      </head>
      <body>
        <header>
          <a href="/list?test">Infinity 3.0</a>
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
};

export default Layout;


import express from "express";
import path from "path";
import React from "react";
import ReactDOMServer from "react-dom/server";
import App from "./App.jsx";

const app = express();

const PORT = 3000;

function page(params) {
  const { username, title, description } = params;

  const component = ReactDOMServer.renderToString(
    <App username={username} title={title} description={description} />
  );

  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">

      <title>${title}</title>
      <meta name="description" content="${description}">

      <style>
        body {
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
            "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
            sans-serif;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;

          text-align: center;
          /* Background color goes to page edge. */
          margin: 0;
        }

        body>* {
          /* Prevent content from going to the page edge - especially on mobile.
              Note this should not be on body itself otherwise it gets white edges. */
          padding-left: 15px;
          padding-right: 15px;
        }
      </style>

      <script>
        window.__INITIAL__DATA__ = ${JSON.stringify({
          username,
          title,
          description,
        })}
      </script>
    </head>

    <body>
      <div id="root">${component}</div>

      <script src="/static/main.js"></script>
    </body>
  </html>
  `;
}

app.get("/", (_req, res) => {
  const params = {
    username: "developer",
    title: "React SSR Quickstart",
    description:
      "Starter template for server-side and client-side rendering of a React app",
  };

  const html = page(params);
  res.send(html);
});

app.use("/static", express.static(path.resolve(__dirname, "public")));

app.listen(PORT);

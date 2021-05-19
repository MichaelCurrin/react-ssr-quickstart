import express from "express";
import path from "path";
import React from "react";
import ReactDOMServer from "react-dom/server";
import App from "./App.jsx";

const app = express();

const PORT = 3000;

function page(params) {
  const { name } = params;

  const component = ReactDOMServer.renderToString(<App name={name} />);

  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
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
        window.__INITIAL__DATA__ = ${JSON.stringify({ name })}
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
  const name = "World";
  const html = page({ name })
  res.send(html);
});

app.use("/static", express.static(path.resolve(__dirname, "public")));

app.listen(PORT);

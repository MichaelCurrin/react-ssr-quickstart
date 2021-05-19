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

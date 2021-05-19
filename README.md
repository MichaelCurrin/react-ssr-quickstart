# React SSR Quickstart
> Starter template for server-side and client-side rendering of a React app

[![GitHub tag](https://img.shields.io/github/tag/MichaelCurrin/react-ssr-quickstart?include_prereleases=&sort=semver)](https://github.com/MichaelCurrin/react-ssr-quickstart/releases/)
[![License](https://img.shields.io/badge/License-MIT-blue)](#license)

[![Made with Node.js](https://img.shields.io/badge/Node.js->=12-blue?logo=node.js&logoColor=white)](https://nodejs.org)
[![Package - react](https://img.shields.io/github/package-json/dependency-version/MichaelCurrin/react-ssr-quickstart/react?logo=react&logoColor=white)](https://www.npmjs.com/package/react)


## Use this project

<div align="center">

[![Use this template](https://img.shields.io/badge/Generate-Use_this_template-2ea44f?style=for-the-badge)](https://github.com/MichaelCurrin/react-ssr-quickstart/generate)

</div>


## About

Based on tutorial:

- [How to server-side render React, hydrate it on the client and combine client and server routes](https://dev.to/marvelouswololo/how-to-server-side-render-react-hydrate-it-on-the-client-and-combine-client-and-server-routes-1a3p)

We set up a client-side React app with a greeting and a button with a counter.

On initial page load without JS running, a user or a search engine crawler will see an empty page. So we add a server-side Express app that return an HTML page which acts as a fully-rendered starting point that needs no JS to view in the browser.

We do this by calling `ReactDOMServer.renderToString`, which unfortunately freezes the app so that ignores user interaction. This is solved by calling `React.hydrate` on the client, so that the browser can make the initial HTML and turn it into a dynamic app in the usual SPA style.

The benefit is your page will load faster for users and the search engines will crawl and rank your site better. The downside is that this adds extra overheard to your app structure and also requires you to have a Node Express server running.While with the plain SPA flow, you build your static assets and host those somewhere like GitHub Pages without the need for Node.


## Resources

- Learn more about React on [Dev Resources](https://michaelcurrin.github.io/dev-resources/resources/javascript/packages/react/).
- [React.hydrate](https://reactjs.org/docs/react-dom.html#hydrate) in the docs.
- [Hydration and Server-side Rendering](https://blog.somewhatabstract.com/2020/03/16/hydration-and-server-side-rendering/) blog post series around React.


## Documentation

### Installation

```sh
$ npm install
```

### Usage

```sh
$ npm start
```

Then open the browser at:

- http://localhost:3000


## License

Released under [MIT](/LICENSE) by [@MichaelCurrin](https://github.com/MichaelCurrin).

/** @type {import('@remix-run/dev').AppConfig} */
module.exports = {
    appDirectory: "app", // The source directory of your Remix app
    assetsBuildDirectory: "public/build", // Directory for compiled assets
    serverBuildPath: "build/server/index.js", // Directory for server build
    publicPath: "/build/", // Public path for accessing assets
    ignoredRouteFiles: ["**/.*"], // Ignore files starting with `.`
  };
  
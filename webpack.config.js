//We require the webpack package and the resolve functionality from the path package at the top of the file.
//Resolving a path is the act of providing a dedicated tool (like the path library) the name of a directory or file, and relying upon it to find the exact path.
const webpack = require('webpack');
const { resolve } = require('path');

module.exports = {
//Within the module we declare an entry specifying the file where the bundling process starts. Specifically, index.jsx will be our entry point:
  entry: [
    resolve(__dirname, "src") + "/index.jsx"
  //we declare index.jsx as our entry point responsible for loading our application. It does this by loading our parent component. The parent component, in turn, loads child components, which then load their child components, so on, and so forth. Loads the parent component.
  ],
//This tells Webpack where to place the bundle file it creates (in this case: build/app.bundle.js.):
  output: {
    //the name of our file containing the bundle:
    filename: 'app.bundle.js',
//path: points to a directory called build. This is where our transpiled, bundled source code will reside
//__dirname refers to the current directory webpack.config.js is located in
//We call resolve() and pass the name of the directory we're attempting to locate (build) and __dirname
    path: resolve(__dirname, 'build'),
  },
//The resolve option tells Webpack to locate files with the following specific extensions:
  resolve: {
    extensions: ['.js', '.jsx']
  }
//In plain English, the configuration above reads “Hey Webpack, use this babel-loader tool to transpile our JSX into ES5 in this React project. You can find the JSX in files with a .jsx extension. But ignore .jsx files in the nodemodules directory
  module: {
    rules: [
      {
        test: /\.jsx?$/, //indicates which files the loader should transform
        loader: "babel-loader", //instructs Webpack to use Babel as a loader
        exclude: /node_modules/, //outlines which files should not be transformed by the loader
        options: { //tells Babel what kind of project we're working with (React) and what version of JS code should be transpiled.
          presets: [
            "es2015",
            "react"
          ]
        }
      },
    ],
  }
};

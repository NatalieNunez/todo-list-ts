module.exports = {
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ],
  },
  entry: path.resolve(__dirname, 'src', 'index.tsx'),
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        loader: 'ts-loader'
        // use: {
        //   loader: 'babel-loader',
        //   options: {
        //     plugins: [
        //       '@babel/plugin-transform-react-jsx'
        //     ]
        //   }
        // }
      }
    ]
  }
};

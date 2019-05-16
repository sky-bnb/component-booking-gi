module.exports = {
      entry: __dirname + '/src/index.jsx',
      module: {
        rules: [
          { 
            test: [/\.jsx$/],
            exclude: /node_modules/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: ['@babel/preset-react', '@babel/preset-env', 'babel-preset-airbnb']
              }
            }
          }
        ]
      },
       output: {
        filename: 'bundle.js',
        path: __dirname + '/public/dist'
      }
    };

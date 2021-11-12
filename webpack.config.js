const path = require('path')
const postCSSPlugins = [
    require('postcss-mixins'),
    require('postcss-import'),
    require('postcss-simple-vars'),
    require('postcss-nested'),
    require('autoprefixer')
]
module.exports = {// {} are objects
    entry: './app/assets/scripts/weather.js', // entry point is what we want to watch -> App.js, where the file we are changing into
    output: {
        filename: 'bundled.js', // file name of what we want it to be
        path: path.resolve(__dirname, 'app') //path to resolve into (where to upload the file), the directory name and folder 'a'
    },
    devServer: { //runs bundled.js in ram. It's in memory therefor loading it will be "faster"
        before: function(app, server) {
            server._watch('./app/**/*.html')// ** any subfolder, * any files that ends in .html
        },
        contentBase: path.join(__dirname, 'app'), //updates css & jss in browser without ctrl + r
        hot: true,
        port: 3000,
        host: '0.0.0.0'
        //inline: false, // will make the bottom line now commit and make ./dist
        //contentBase: "./dist", // where we want it to go
    },
    mode: 'development', //needed as npm won't run
    //watch: true, // will continue to watch the webpack for changes 
    module: {
        rules: [//array
            {
                test: /\.css$/i,//regex expression if the file ends in .csss
                use: ['style-loader','css-loader?url=false', {loader: 'postcss-loader', options: {postcssOptions: {plugins: postCSSPlugins}}}] //only use css-loader if the file ends in .css
            }
        ]
    }
}

/**
 * css-loader understands to bundle the css
 * style-loader loads the css style so it's usable "applies"
 */
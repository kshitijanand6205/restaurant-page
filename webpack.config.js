import path from "path";
import { fileURLToPath } from "url";
import HtmlWebpackPlugin from "html-webpack-plugin";

// Recreate __filename and __dirname (not available in ES Modules)
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default {
    mode: "development",

    entry: "./src/index.js",

    output: {
        filename: "main.js",
        path: path.resolve(__dirname, "dist"),
        clean: true,
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/template.html",
        }),
    ],

    module: {
        rules: [
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"],
            },
        ],
    },

    devServer: {
        static: "./dist",
        open: true,
        port: 8080,
    },
};






// import path from 'path';
// import HtmlWebpackPlugin from 'html-webpack-plugin';

// module.export =  {
//     mode: 'development',

//     entry: './src/index.js',

//     output: {
//         filename: "main.js",
//         path: path.resolve(__dirname, "dist"),
//         clean: true,
//     },

//     plugins: [
//         new HtmlWebpackPlugin({
//             template: "./src/template.html",
//         }),
//     ],

//     module: {
//         rules: [
//             {
//                 test: /\.css$/,
//                 use: ["style-loader", "css-loader"],
//             },
//         ],
//     },

//     devServer: {
//         static: "./dist",
//         open: true,
//         port: 8080,
//     },
// };




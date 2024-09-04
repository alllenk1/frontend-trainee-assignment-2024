import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import Dotenv from 'dotenv-webpack';

import { BuildOptions } from './types/types';

export const buildPlugins = ({
    paths
}: BuildOptions): webpack.Configuration['plugins'] => {
    return [
        new HtmlWebpackPlugin({ template: paths.html }),
        new webpack.ProgressPlugin(),
        new MiniCssExtractPlugin({
            filename: 'css/[name].[contenthash:8].css',
            chunkFilename: 'css/[name].[contenthash:8].css'
        }),
        new Dotenv({
            path: '/Users/allenk/Desktop/Avito/project/.env',
            safe: true
        }),
        new webpack.DefinePlugin({
            'process.env.TOKEN': JSON.stringify(process.env.TOKEN)
        })
    ];
};

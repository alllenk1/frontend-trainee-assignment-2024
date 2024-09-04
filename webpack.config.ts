import path from 'path';
import webpack from 'webpack';

import { buildWebpack } from './config/build/buildWebpack';
import { BuildPaths } from './config/build/types/types';

export default () => {
    const paths: BuildPaths = {
        output: path.resolve(__dirname, 'build'),
        entry: path.resolve(__dirname, 'src', 'index.tsx'),
        html: path.resolve(__dirname, 'public', 'index.html'),
        public: path.resolve(__dirname, 'public'),
        src: path.resolve(__dirname, 'src')
    };

    const config: webpack.Configuration = buildWebpack({ paths });
    return config;
};

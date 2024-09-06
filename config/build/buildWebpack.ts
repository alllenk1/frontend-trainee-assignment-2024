import webpack from 'webpack';

import { buildDevServer } from './buildDevServer';
import { buildLoaders } from './buildLoaders';
import { buildPlugins } from './buildPlugins';
import { buildResolvers } from './buildResolvers';
import { BuildOptions } from './types/types';

export const buildWebpack = (options: BuildOptions): webpack.Configuration => {
    const { paths } = options;

    return {
        mode: 'development',
        entry: paths.entry,
        output: {
            path: paths.output,
            filename: '[name].[contenthash].js',
            clean: true
        },
        plugins: buildPlugins({ paths }),
        module: {
            rules: buildLoaders()
        },
        resolve: buildResolvers({ paths }),
        devtool: false,
        devServer: buildDevServer()
    };
};

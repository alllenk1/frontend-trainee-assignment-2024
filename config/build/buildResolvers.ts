import webpack from 'webpack';

import { BuildOptions } from './types/types';

export const buildResolvers = ({
    paths
}: BuildOptions): webpack.Configuration['resolve'] => {
    return {
        alias: {
            '@': paths.module,
            '@styles': paths.styles
        },
        extensions: ['.tsx', '.ts', '.js'],
        fallback: {
            process: require.resolve('process/browser')
        }
    };
};

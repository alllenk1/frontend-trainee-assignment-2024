import webpack from 'webpack';

export const buildResolvers = (): webpack.Configuration['resolve'] => {
    return {
        extensions: ['.tsx', '.ts', '.js'],
        fallback: {
            process: require.resolve('process/browser')
        }
    };
};

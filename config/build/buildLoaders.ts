import webpack from 'webpack';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

export const buildLoaders = (): webpack.ModuleOptions['rules'] => {
    const scssLoader = {
        test: /\.s[ac]ss$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
    };

    const tsLoader = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
    };

    return [scssLoader, tsLoader];
};

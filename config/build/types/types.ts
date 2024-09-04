export interface BuildPaths {
    entry: string;
    html: string;
    public: string;
    output: string;
    src: string;
}

export interface BuildOptions {
    paths: BuildPaths;
}

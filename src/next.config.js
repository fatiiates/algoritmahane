module.exports = {
    distDir: '../.next',
    webpack: config => {
        config.module.rules.push({
            test: /\.md$/,
            use: "raw-loader"
        });

        return config;
    }
}

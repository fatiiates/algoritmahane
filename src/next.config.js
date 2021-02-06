module.exports = {
    distDir: '../.next',
    webpack: config => {
        config.module.rules.push({
            test: /\.md$/,
            use: "raw-loader"
        });

        return config;
    },
    env: {
        basePath: 'http://localhost:3000',
    }
}
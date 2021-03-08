module.exports = {
    distDir: '../.next',
    crossOrigin: 'anonymous',
    webpack: config => {
        config.module.rules.push({
            test: /\.md$/,
            use: "raw-loader"
        });

        return config;
    },
    env: {
        basePath: process.env.NODE_ENV == "production" ? 'https://algoritmahane.herokuapp.com/':'http://localhost:3000/',
        defaultLocale: 'tr-TR',
    }
}
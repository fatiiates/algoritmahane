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
        dev_baseURL: 'http://192.168.1.4:3000',
        prod_baseURL: 'https://algorithmahane.herokuapp.com',
    },
}

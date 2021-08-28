const path = require("path");

module.exports = {
    webpack: (config, { isServer }) => {
        if (!isServer) {
            config.resolve.fallback.fs = false;
        }
        return config;
    },

    sassOptions: {
        includePaths: [path.join(__dirname, "sass")],
    },
};

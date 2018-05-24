require('babel-register');

module.exports = {
    networks: {
        development: {
            host: '127.0.0.1',
            port: 9545,
            network_id: '*',
            gas: 6721975
        }
    }
};

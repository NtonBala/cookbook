const env = process.env;

module.exports = {
    port: env.PORT || 8080,
    host: env.HOST || '0.0.0.0',
    serverURL: function serverURL() {
        return `http://${this.host}:${this.port}`;
    }
};

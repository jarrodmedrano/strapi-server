"use strict";
// path: ./config/env/production/server.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = ({ env }) => ({
    proxy: true,
    // host: env("HOST", "0.0.0.0"),
    // port: env.int("STRAPI_PORT", 1337),
    url: env("APP_URL"),
    app: {
        keys: env.array("APP_KEYS"),
    },
});

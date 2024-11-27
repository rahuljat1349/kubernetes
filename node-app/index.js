"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const port = 3000;
app.get("/", (req, res) => {
    const envVars = {
        DATABASE_URL: process.env.DATABASE_URL,
        CACHE_SIZE: process.env.CACHE_SIZE,
        PAYMENT_GATEWAY_URL: process.env.PAYMENT_GATEWAY_URL,
        MAX_CART_ITEMS: process.env.MAX_CART_ITEMS,
        SESSION_TIMEOUT: process.env.SESSION_TIMEOUT,
    };
    res.send(`
    <h1>Environment Variables</h1>
    <pre>${JSON.stringify(envVars, null, 2)}</pre>
  `);
});
app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});

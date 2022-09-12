"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fastify_1 = __importDefault(require("fastify"));
const app = (0, fastify_1.default)({ logger: true });
app.get("/auth", async (request) => {
    const { username, password } = request.query;
    return {
        code: 200,
        message: 'sucess',
        body: {
            username,
        }
    };
});
app.get('/ping', async (request, reply) => {
    return 'pong\n';
});
app.get('/', (request, reply) => {
    reply.send({ hello: 'world' });
});
app.listen({ port: 8080 }, (err, address) => {
    if (err) {
        app.log.error(err);
        process.exit(1);
    }
    app.log.info(`Server listening at ${address}`);
});
app.get("/byid/:id", async (request) => {
    const { id } = request.params;
    return {
        code: 200,
        message: 'sucess',
        body: {
            data: "bonjour  " + id
        }
    };
});
// module.exports = ;

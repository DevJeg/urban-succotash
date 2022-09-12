import fastify, { FastifyInstance } from 'fastify';

const app: FastifyInstance = fastify({logger: true});

interface IQueryInterface {
  username: string;
  password: string;
}

interface IHeaders {
  'x-access-token' : string;
} 

interface IReply<T> {
  code: number;
  message: string;
  body: T;
}

app.get<{Querystring: IQueryInterface, Reply: IReply<{username: string, password?: string}> }>("/auth", async (request) => {
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
})

app.get('/', (request, reply) => {
  reply.send({hello: 'world'});
})

app.listen({ port: 8080 }, (err, address) => {
  if (err) {
    app.log.error(err);
    process.exit(1);
  }
  app.log.info(`Server listening at ${address}`)
})

app.get<{Params: {id: number}, Reply: IReply<{data: string}> }>("/byid/:id", async (request) => {
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
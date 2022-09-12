// const app = require('./app');
// const plugin = require('./routes/first-route');

// const start = async (port : 3000) => {
//     await plugin(app);
//     try {
//       await app.listen({ port }) 
//     } catch (err) {
//       app.log.error(err)
//       process.exit(1)
//     }
//   }
// start(3000)

// app.listen : "port : port same port"

// import fastify from 'fastify'

// const f = fastify()
// f.listen({ port: 8080 }, () => { console.log('running') });

/*const app = import('./app')
async function routes (fastify, options) {
    fastify.post('/plugin', async (request, reply) => {
        return { hello: 'plugin' }
    })
}

module.exports = routes;*/
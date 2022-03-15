import Path from 'path';
import Hapi from '@hapi/hapi';
import Inert from '@hapi/inert';
import routeHandlerGetAllHeros from './routeHandlers/allHeros.js';
import routeHandlerGetHeroById from './routeHandlers/heroById.js';

// Hey, what are you doing in here? Feel free to take a look around but
// the exercise of working on SparkHero won't require you to make any
// changes here.

const start = async () => {
  const server = Hapi.server({
    port: 8081,
    host: 'localhost',
    routes: {
      files: {
        relativeTo: Path.join(__dirname, 'data/images'),
      },
      cors: {
        origin: ['*'],
        headers: ['Authorization'],
        exposedHeaders: ['Accept'],
        additionalExposedHeaders: ['Accept'],
        maxAge: 60,
      },
    },
  });

  await server.register(Inert);

  // Superhero hosted images
  server.route({
    method: 'GET',
    path: '/images/{param*}',
    handler: {
      directory: {
        path: '.',
        redirectToSlash: true,
      },
    },
  });

  // Get superhero by ID
  server.route({
    method: 'GET',
    path: '/id/{id}',
    handler: routeHandlerGetHeroById,
  });

  // Get all superheros
  server.route({
    method: 'GET',
    path: '/all',
    handler: routeHandlerGetAllHeros,
  });

  await server.start();
  console.log('Up, up, and away! Server running on %s\n', server.info.uri);
};

process.on('unhandledRejection', (err) => {
  console.log(err);
  process.exit(1);
});

start();

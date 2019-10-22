const { GraphQLServer, PubSub } = require('graphql-yoga');
const Query = require('./resolvers/Query');
const Post = require('./resolvers/Post');
const User = require('./resolvers/User');
const Mutation = require('./resolvers/Mutation');
const Subscription = require('./resolvers/Subscription');

const pubsub = new PubSub();

const resolvers = {
  Query,
  Post,
  User,
  Mutation,
  Subscription
};

const server = new GraphQLServer({
  typeDefs: 'graphql-rest-wrapper/src/schema.graphql',
  resolvers,
  context: { pubsub }
});

server.start(() => console.log('Server is running on http://localhost:4000')); // eslint-disable-line no-console

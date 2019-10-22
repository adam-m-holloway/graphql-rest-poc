module.exports = {
  // Mock websocket to demo server pushing data
  // Updates count every 3 seconds
  count: {
    subscribe(parent, args, { pubsub }) {
      let count = 0;

      setInterval(() => {
        count++;
        pubsub.publish('count', {
          count
        });
      }, 3000);
      return pubsub.asyncIterator('count');
    },
  },
};

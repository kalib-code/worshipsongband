module.exports = {
    routes: [
      {
        method: 'POST',
        path: '/payment/stripe',
        handler: 'provider.stripe',
       
      },
    ],
  };
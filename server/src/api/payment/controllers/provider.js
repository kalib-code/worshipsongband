module.exports = {
  async stripe(ctx) {

    console.log(ctx.request.body);
      //Get sk from user database
    const entity = await strapi.query('plugin::users-permissions.user').findOne(ctx.request.body.artist_id);
    const stripe = require("stripe")(entity.stripe_secret_key);
  

    const YOUR_DOMAIN = "http://localhost:3000";

    const orderEntry = await strapi.entityService.create('api::order.order', {
        data: {
          orderNumber:" session.id",
          song: ctx.request.body.song_id,
          users: ctx.state.user.id
        },
      });

    const session = await stripe.checkout.sessions.create({
        payment_method_types: ["card"],
      line_items: ctx.request.body.product_data,
      mode: "payment",
      success_url: `${YOUR_DOMAIN}/user?success=true&orderID=${orderEntry.id}`, 
      cancel_url: `${YOUR_DOMAIN}/store/${ctx.request.body.song_id}?canceled=true`,
    });



    const payment = await strapi.entityService.create('api::payment.payment', {
        data: {
          paymentId: session.id,
          payment_intent:session.payment_intent,
          payment_status: session.payment_status,
          payment_response: session,
          order:orderEntry.id
        },
      });

      await strapi.entityService.update('api::order.order',payment.id, {
        data: {
          payment: payment.id
        },
      });

  
   ctx.body = JSON.stringify({
       payment_id: session.id,
       payment_intent : session.payment_intent,
       payment_status: session.payment_status,
       redirect_url: session.url
   });

  },
};

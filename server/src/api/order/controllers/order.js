'use strict';

/**
 *  order controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::order.order',{
    async find(ctx) {
        const user = ctx.state.user;
        if (user?.role?.type === 'artist') {
           ctx.query = { ...ctx.query, filters: { song: {artist:  { id: user.id  }} }  }
            const { data, meta } = await super.find(ctx);
            return { data, meta };
        }

        const { data, meta } = await super.find(ctx);
        return { data, meta };
   
    },
});

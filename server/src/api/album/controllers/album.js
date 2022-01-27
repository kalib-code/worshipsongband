'use strict';

/**
 *  album controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::album.album',{

    async find(ctx) {

        const user = ctx.state.user;
        if (user?.role?.type === 'artist') {
            ctx.query = { ...ctx.query, filters: { artist: { id: user.id  } }  }
            const { data, meta } = await super.find(ctx);
            return { data, meta };
        }

        const { data, meta } = await super.find(ctx);
        return { data, meta };
   
    },

    async create(ctx) {

        const user = ctx.state.user;
        if (user?.role?.type === 'artist') {
            ctx.request.body.data.artist = user.id;
            const { data, meta } = await super.create(ctx);
       
            return { data, meta };
        }

        const { data, meta } = await super.create(ctx);
        return { data, meta };
   
    },
   
   
});

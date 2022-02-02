// path: src/extensions/users-permissions/strapi-server.js
module.exports = plugin => {
    const sanitizeOutput = (user) => {
      const {
        password, resetPasswordToken, confirmationToken ,stripe_secret_key, ...sanitizedUser
      } = user; // be careful, you need to omit other private attributes yourself
      return sanitizedUser;
    };
  
    plugin.controllers.user.me = async (ctx) => {
      if (!ctx.state.user) {
        return ctx.unauthorized();
      }
      const user = await strapi.entityService.findOne(
        'plugin::users-permissions.user',
        ctx.state.user.id,
        { populate: ['role','image'] }
      );
  
      ctx.body = sanitizeOutput(user);
    };
  
    plugin.controllers.user.find = async (ctx) => {
      const users = await strapi.entityService.findMany(
        'plugin::users-permissions.user',
        { ...ctx.params, populate: ['role','image'] }
      );
  
      ctx.body = users.map(user => sanitizeOutput(user));
    };

    plugin.controllers.user.findOne = async (ctx) => {
      const user = await strapi.entityService.findOne(
        'plugin::users-permissions.user',
        ctx.params.id,
        { populate: ['role','image'] }
      );
  
      ctx.body = sanitizeOutput(user);
    }
  
    return plugin;
  };
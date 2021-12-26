module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '0f9a104dafada1b466bd7776f7503e97'),
  },
});

module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'af005eca55b8561a661aef72af712b89'),
  },
});

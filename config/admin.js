module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'c31ad7ab421e5c8ca4321075729d0583'),
  },
});

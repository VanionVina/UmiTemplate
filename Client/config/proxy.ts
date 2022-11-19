export default {
  '/api/': {
    target: 'http://localhost:5134',
    changeOrigin: true,
    pathRewrite: { '^': '' },
  }
};
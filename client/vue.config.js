module.exports = {
  devServer: {
    proxy: {
      '^/api': {
        target: 'http://localhost:3000',
        /* proxy websockets */
        ws: true,
        changeOrigin: true
      }
    }
  }
}

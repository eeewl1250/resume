module.exports = {
  // vue-cli3部署：
  // https://cli.vuejs.org/zh/guide/deployment.html#github-pages
  publicPath: process.env.NODE_ENV === 'production'
      ? '/resume/'
      : '/',
  outputDir: 'docs'
}
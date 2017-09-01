module.exports = {
  type: 'react-component',
  npm: {
    esModules: true,
    umd: {
      global: 'ReactFancyWeuiBox',
      externals: {
        react: 'React'
      }
    }
  }
}

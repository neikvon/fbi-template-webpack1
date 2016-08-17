module.exports = {
  template: 'webpack1',
  templateDescription: 'Full-feature template for fbi v1.x, with Gulp, Webpack1, Sass and Handlebars.',
  alias: {
    b: 'build',
    c: 'clean'
  },
  npm: {
    alias: 'npm',
    options: ''
    // options: '--registry=https://registry.npm.taobao.org'
  },
  server: {
    root: 'dst'
  },
  webpack: {
    entryId: '.main',
    hash: true
  },
  autoprefixer: {
    browsers: [
      'last 2 versions',
      '> 5%',
      'safari >= 5',
      'ie >= 8',
      'opera >= 12',
      'Firefox ESR',
      'iOS >= 6',
      'android >= 4'
    ]
  }
}
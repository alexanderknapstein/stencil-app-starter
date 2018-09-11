// https://stenciljs.com/docs/config
const sass = require('@stencil/sass');
const postcss = require('@stencil/postcss'); // ie polyfill
const autoprefixer = require('autoprefixer');
const postCSSNext = require('postcss-cssnext');
const postCSSCustomProperties = require('postcss-custom-properties');
const postCSSReporter = require('postcss-reporter');
const postCSSScss = require('postcss-scss');

exports.config = {
  globalStyle: 'src/global/style.scss',
  plugins: [
    sass({
      injectGlobalPaths: [
       './src/global/_variables.scss',
       './src/global/fonts.scss',
       './src/global/media-queries.scss',
       './src/global/mixins.scss',
       './src/global/style.scss'
      ]
    }),
    postcss({
      plugins: [
        postCSSNext({
          features: {
            autoprefixer: {
              grid: true
            }
          }
        })
      ]
    }),
  ],
  outputTargets: [
    {
      type: 'www',
      serviceWorker: false
    }
  ],
  enableCache: false
};

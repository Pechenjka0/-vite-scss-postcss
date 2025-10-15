const postcssPxToRem = require('postcss-pxtorem')
const postcssPresetEnv = require('postcss-preset-env')

module.exports = ({ env }) => {
  const isProd = env === 'production'
  const plugins = []

  if (isProd) {
    plugins.push(
      postcssPxToRem({
        rootValue: 16,
        propList: ['*'],
        mediaQuery: true,
        unitPrecision: 5
      })
    )

    plugins.push(postcssPresetEnv())
  }

  return { plugins }
}

const themes = [
  '8008',
  '9009',
  'apollo',
  'bento',
  'dolch',
  'laser',
  'metropolis',
  'midnight',
  'milkshake',
  'oblivion',
  'wavez'
]

const themesWithPrefix = themes.map(theme => `theme-${theme}`)

module.exports = {
  themes,
  themesWithPrefix
}

// this utility will generate favicons from our themes.css file
const fs = require('fs')
const read = require('read-css')

const removeUnneededRules = rules => rules.filter(rule => rule.selectors[0].includes('.theme-'))
const removeUnneededDeclarations = declarations => declarations.filter(declaration => declaration.property && (declaration.property.includes('--theme-link') || declaration.property.includes('--theme-bg')))

const createHSLObject = declarations => {
  const hsl = {}
  declarations.forEach(declaration => {
    const propertyName = declaration.property.replace('--theme-', '')
    hsl[propertyName] = declaration.value
  })
  return hsl
}

const createThemeObject = (rules) => rules.map(rule => {
  let { declarations } = rule
  const ruleName = rule.selectors[0].replace('.theme-', '')
  declarations = removeUnneededDeclarations(declarations)
  declarations = createHSLObject(declarations)
  return {
    [ruleName]: {
      background: `hsl(${declarations['bg-h']}, ${declarations['bg-s']}, ${declarations['bg-l']})`,
      foreground: `hsl(${declarations['link-h']}, ${declarations['link-h']}, ${declarations['link-h']})`,
    }
  }
})

const generateThemes = async () => {
  const { stylesheet } = await read('./assets/themes.css')
  let { rules } = stylesheet
  rules = removeUnneededRules(rules)
  const themes = createThemeObject(rules)
  return themes
}

const generateFavicons = (themes) => {
  const favicons = []
  themes.forEach((theme) => {
    const themeName = Object.keys(theme)[0]
    favicons.push({
      [themeName]: `<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <rect width="24" height="24" fill="${theme[themeName].background}"/>
  <path fill="${theme[themeName].foreground}" d="M7.3423 8.80714V18H5.33266V8.80714H2V7H10.675V8.80714H7.3423Z" />
  <path fill="${theme[themeName].foreground}" d="M13.1911 18V7H18.0645C19.4154 7 20.409 7.33 21.0454 7.99C21.6818 8.65 22 9.45667 22 10.41C22 11.311 21.6651 12.1071 20.9952 12.7986C20.3365 13.49 19.3596 13.8357 18.0645 13.8357H15.2007V18H13.1911ZM18.1649 12.0443C18.7567 12.0443 19.1977 11.8819 19.4879 11.5571C19.7782 11.2324 19.9234 10.85 19.9234 10.41C19.9234 9.99095 19.7838 9.61905 19.5047 9.29429C19.2367 8.95905 18.7902 8.79143 18.1649 8.79143H15.2007V12.0443H18.1649Z" />
</svg>`
    })
  })
  return favicons
}

const writeFaviconstoFile = (favicons) => {
  favicons.forEach((favicon) => {
    const filename = `static/favicon-${Object.keys(favicon)[0]}.svg`
    const svg = Object.values(favicon)[0]
    fs.writeFile(filename, svg, (err) => {
      if (err) throw err;
      console.log(filename, 'saved!');
    })
  })
}

const init = async () => {
  const themes = await generateThemes()
  const favicons = generateFavicons(themes)
  writeFaviconstoFile(favicons)
}

init()

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
      foreground: `hsl(${declarations['link-h']}, ${declarations['link-s']}, ${declarations['link-l']})`,
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
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path d="M16.5736 0.125C17.9263 0.125 19.1778 0.904271 20.0975 2.31919C21.8846 5.06858 21.8838 9.44776 20.0975 12.1959C19.1778 13.6108 17.9263 14.3901 16.5736 14.3901H13.0074V20.2258C13.0074 20.7007 12.5123 21.0146 12.0829 20.8125L10.9813 20.2941L9.87977 20.8125C9.70494 20.8948 9.5024 20.8948 9.32757 20.8125L8.22579 20.294L7.12398 20.8125C6.94911 20.8948 6.7466 20.8948 6.57181 20.8125L5.46996 20.294L4.36814 20.8125C4.19331 20.8948 3.99085 20.8948 3.81602 20.8125L2.714 20.294L1.61198 20.8125C1.18221 21.0148 0.687508 20.7003 0.687508 20.2258V7.25754C0.687508 5.40162 1.16312 3.64783 2.02672 2.31919C2.94642 0.904271 4.19789 0.125 5.5506 0.125H16.5736Z" fill="${theme[themeName].background}"/>
  <path d="M11.7104 19.204L11.2573 18.9907C11.0824 18.9084 10.8798 18.9084 10.705 18.9907L9.60345 19.5092L8.50167 18.9907C8.32688 18.9084 8.12442 18.9085 7.94951 18.9907L6.84769 19.5092L5.74584 18.9907C5.57105 18.9084 5.36854 18.9085 5.19367 18.9907L4.09194 19.5092L2.98992 18.9907C2.81509 18.9084 2.61267 18.9084 2.43784 18.9907L1.98419 19.2041V7.25753C1.98419 5.64951 2.38536 4.14669 3.11389 3.02595C3.78629 1.99153 4.6516 1.42181 5.55046 1.42181H13.7573C12.6235 2.59941 11.7104 4.64799 11.7104 7.25753V19.204ZM19.0101 11.4892C17.6183 13.6303 15.5255 13.6254 14.1369 11.4892C12.6315 9.17302 12.627 5.34905 14.1369 3.02595C15.5287 0.884807 17.6215 0.88971 19.0101 3.02595C20.5155 5.34208 20.52 9.16605 19.0101 11.4892Z" fill="${theme[themeName].foreground}"/>
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

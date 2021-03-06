// this utility will generate favicons from our themes.css file
const fs = require('fs')
const read = require('read-css')

/**
 * @method
 * @param {Array} rules
 * @return {Array}
*/
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
  <rect fill="${theme[themeName].background}" x="0.5" y="0.75" width="24" height="24" />
  <path fill="${theme[themeName].foreground}" d="M7.64424 18.9499C5.25349 18.9499 4.05811 17.8957 4.05811 15.7874V9.34859H1.5V7.05065H4.05811V3.50135L6.80748 2.25V7.05065H10.9674V9.34859H6.80748V15.2868C6.80748 16.1817 7.38126 16.6292 8.52882 16.6292C9.19824 16.6292 9.89952 16.4472 10.6327 16.0832L10.298 18.4266C9.59669 18.7755 8.71211 18.9499 7.64424 18.9499Z" />
  <path fill="${theme[themeName].foreground}" d="M12.4069 23.25V7.05065H15.1563V7.93797C15.9054 7.16441 16.9015 6.77763 18.1447 6.77763C19.7864 6.77763 21.0853 7.31609 22.0416 8.39301C23.0139 9.46994 23.5 10.964 23.5 12.8751C23.5 14.7408 22.9979 16.2197 21.9938 17.3118C21.0056 18.4038 19.7306 18.9499 18.1686 18.9499C16.8935 18.9499 15.8894 18.5479 15.1563 17.744V22.0442L12.4069 23.25ZM17.7622 16.4472C18.7025 16.4472 19.4277 16.1438 19.9378 15.5371C20.4637 14.9152 20.7267 14.0279 20.7267 12.8751C20.7267 11.7679 20.4637 10.8881 19.9378 10.2359C19.4277 9.58369 18.6946 9.25758 17.7383 9.25758C16.5907 9.25758 15.73 9.64437 15.1563 10.4179V15.2868C15.73 16.0604 16.5987 16.4472 17.7622 16.4472Z" />
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
      if (err) throw err
      console.log(filename, 'saved!')
    })
  })
}

const init = async () => {
  const themes = await generateThemes()
  const favicons = generateFavicons(themes)
  writeFaviconstoFile(favicons)
}

init()

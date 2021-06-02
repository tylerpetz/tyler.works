module.exports = {
  purge: {
    enabled: process.env.NODE_ENV === 'production',
    content: [
      'components/**/*.vue',
      'layouts/**/*.vue',
      'pages/**/*.vue',
      'plugins/**/*.js',
      'nuxt.config.js'
    ],
  },
  theme: {
    fontFamily: {
      body: ['Overpass', 'sans-serif']
    },
    colors: {
      theme: {
        bg: 'var(--theme-bg)',
        'bg-l': 'var(--theme-bg-light)',
        'bg-d': 'var(--theme-bg-dark)',
        text: 'var(--theme-text)',
        'text-l': 'var(--theme-text-light)',
        'text-d': 'var(--theme-text-dark)',
        link: 'var(--theme-link)',
        'link-hover': 'var(--theme-link-hover)',
        'link-press': 'var(--theme-link-press)',
        border: 'var(--theme-border)',
        'border-hover': 'var(--theme-border-hover)'
      },
      alpha: {
        cap: 'var(--alpha-cap)',
        'cap-hover': 'var(--alpha-cap-hover)',
        'cap-press': 'var(--alpha-cap-press)',
        legend: 'var(--alpha-legend)',
        'legend-hover': 'var(--alpha-legend-hover)',
        'legend-press': 'var(--alpha-legend-press)'
      },
      mod: {
        cap: 'var(--mod-cap)',
        'cap-hover': 'var(--mod-cap-hover)',
        'cap-press': 'var(--mod-cap-press)',
        legend: 'var(--mod-legend)',
        'legend-hover': 'var(--mod-legend-hover)',
        'legend-press': 'var(--mod-legend-press)'
      },
      accent: {
        cap: 'var(--accent-cap)',
        'cap-hover': 'var(--accent-cap-hover)',
        'cap-press': 'var(--accent-cap-press)',
        legend: 'var(--accent-legend)',
        'legend-hover': 'var(--accent-legend-hover)',
        'legend-press': 'var(--accent-legend-press)'
      }
    },
    extend: {
      typography: {
        DEFAULT: {
          css: {
            color: 'var(--theme-text)',
            maxWidth: '100%',
            h1: {
              color: 'var(--theme-text)',
            },
            h2: {
              color: 'var(--theme-text)',
            },
            h3: {
              color: 'var(--theme-text)',
            },
            h4: {
              color: 'var(--theme-text)',
            },
            h5: {
              color: 'var(--theme-text)',
            },
            h6: {
              color: 'var(--theme-text)',
            },
            a: {
              color: 'var(--theme-link)',
              '&:hover': {
                color: 'var(--theme-link-hover)',
              },
            },
            pre: {
              backgroundColor: 'var(--theme-bg-dark)',
              color: 'var(--theme-text)',
            }
          }
        }
      },
      screens: {
        'print': {'raw': 'print'},
      }
    }
  },
  variants: {
    backgroundColor: ['responsive', 'hover', 'focus', 'active'],
    textColor: ['responsive', 'hover', 'focus', 'active'],
    visibility: ['group-hover']
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}

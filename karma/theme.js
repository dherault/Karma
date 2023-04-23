import { extendTheme, themeTools } from 'native-base'

// https://coolors.co/palette/ffbe0b-fb5607-ff006e-8338ec-3a86ff
export default extendTheme({
  colors: {
    blue: {
      50: '#eef6ff',
      100: '#d9eaff',
      200: '#bcdbff',
      300: '#8ec6ff',
      400: '#59a5ff',
      500: '#3a86ff',
      600: '#1b60f5',
      700: '#144be1',
      800: '#173db6',
      900: '#19388f',
      950: '#142357',
    },
    pink: {
      50: '#ffeff3',
      100: '#ffe0ea',
      200: '#ffc6da',
      300: '#ff97bb',
      400: '#ff5d98',
      500: '#ff247a',
      600: '#ff006e',
      700: '#d7005d',
      800: '#b40056',
      900: '#990250',
      950: '#570026',
    },
    violet: {
      50: '#f6f3ff',
      100: '#eee9fe',
      200: '#dfd6fe',
      300: '#c7b5fd',
      400: '#ac8bfa',
      500: '#925df5',
      600: '#8338ec',
      700: '#7529d8',
      800: '#6222b5',
      900: '#521d95',
      950: '#321065',
    },
    orange: {
      50: '#fff7ec',
      100: '#ffecd3',
      200: '#ffd5a7',
      300: '#ffb76f',
      400: '#ff8d35',
      500: '#ff6e0e',
      600: '#fb5607',
      700: '#c93a05',
      800: '#9f2f0d',
      900: '#80290e',
      950: '#451205',
    },
    yellow: {
      50: '#fffeea',
      100: '#fffac5',
      200: '#fff685',
      300: '#ffea46',
      400: '#ffdb1b',
      500: '#ffbe0b',
      600: '#e29000',
      700: '#bb6502',
      800: '#984e08',
      900: '#7c400b',
      950: '#482100',
    },
  },
  fontConfig: {
    Anton: {
      100: {
        normal: 'Anton',
      },
      200: {
        normal: 'Anton',
      },
      300: {
        normal: 'Anton',
      },
      400: {
        normal: 'Anton',
      },
      500: {
        normal: 'Anton',
      },
      600: {
        normal: 'Anton',
      },
      700: {
        normal: 'Anton',
      },
      800: {
        normal: 'Anton',
      },
      900: {
        normal: 'Anton',
      },
      // Add more variants
      //   700: {
      //     normal: 'Anton-Bold',
      //   },
      //   800: {
      //     normal: 'Anton-Bold',
      //   },
      //   900: {
      //     normal: 'Anton-Bold',
      //   },
    },
  },

  // Make sure values below matches any of the keys in `fontConfig`
  fonts: {
    heading: 'Anton',
    // body: 'Anton',
    // mono: 'Anton',
  },
  components: {
    Button: {
      defaultProps: {
        colorScheme: 'blue',
      },
      variants: {
        'outline-blue': ({
          colorScheme,
        }) => ({
          borderWidth: '1px',
          borderColor: `${colorScheme}.600`,
          _text: {
            color: `${colorScheme}.600`,
          },
          _icon: {
            color: `${colorScheme}.600`,
          },
          _spinner: {
            color: `${colorScheme}.600`,
          },
          _hover: {
            bg: `${colorScheme}.600:alpha.5`,
          },
          _pressed: {
            bg: `${colorScheme}.600:alpha.10`,
          },

          _dark: {
            borderColor: `${colorScheme}.500`,
            _text: {
              color: `${colorScheme}.500`,
            },
            _icon: {
              color: `${colorScheme}.500`,
            },
            _spinner: {
              color: `${colorScheme}.500`,
            },
            _hover: {
              bg: `${colorScheme}.500:alpha.5`,
            },
            _pressed: {
              bg: `${colorScheme}.500:alpha.10`,
            },
          },
        }),
      },
    },
    Input: {
      defaultProps: {
        colorScheme: 'blue',
        variant: 'outline-blue',
      },
      variants: {
        'outline-blue': ({
          colorScheme,
          theme,
        }) => ({
          borderWidth: '1',
          borderColor: `${colorScheme}.500`,
          _focus: {
            borderColor: `${colorScheme}.500`,
            bg: themeTools.transparentize(`${colorScheme}.500`, 0.05)(theme),
          },
        }),
      },
    },
    TextArea: {
      defaultProps: {
        colorScheme: 'blue',
        variant: 'outline-blue',
      },
      variants: {
        'outline-blue': ({
          colorScheme,
          theme,
        }) => ({
          borderWidth: '1',
          borderColor: `${colorScheme}.500`,
          _focus: {
            borderColor: `${colorScheme}.500`,
            bg: themeTools.transparentize(`${colorScheme}.500`, 0.05)(theme),
          },
        }),
      },
    },
  },
})

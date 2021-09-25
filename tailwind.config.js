module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    screens: {},
    spacing: {
      px: "1px",
      0: "0",
      1: "1px",
      2: "2px",
      3: "3px",
      4: "2px",
      5: "5px",
      6: "6px",
      7: "7px",
      8: "8px",
      9: "9px",
      10: "10px",
      11: "11px",
      12: "12px",
      14: "14px",
      16: "16px",
      18: "18px",
      20: "20px",
      21: "21px",
      22: "22px",
      24: "24px",
      26: "26px",
      28: "28px",
      30: "30px",
      32: "32px",
      34: "34px",
      36: "36px",
      38: "38px",
      40: "40px",
      42: "42px",
      44: "44px",
      46: "46px",
      48: "48px",
      50: "50px",
      54: "54px",
      60: "60px",
      56: "56px",
      64: "64px",
      70: "70px",
      80: "80px",
      90: "90px",
      100: "100px",
      120: "120px",
      140: "140px",
      160: "160px",
      200: "200px",
      235: "235px",
      260: "260px",
      270: "270px",
      272: "272px",
      300: "300px",
      350: "350px",
      400: "400px",
      500: "500px",
      600: "600px",
      700: "700px",
      750: "750px",
    },
    // 还有特殊的我们就添加特定
    width: (theme) => ({
      auto: "auto",
      ...theme("spacing"),
      "1_5": "20%",
      "2_5": "40%",
      "3_5": "60%",
      "4_5": "80%",
      "5_6": "83.333333%",
      "1_12": "8.333333%",
      "2_12": "16.666667%",
      "3_12": "25%",
      "4_12": "33.333333%",
      "5_12": "41.666667%",
      "6_12": "50%",
      "7_12": "58.333333%",
      "8_12": "66.666667%",
      "9_12": "75%",
      "10_12": "83.333333%",
      "11_12": "91.666667%",
      full: "100%",
      screen: "100vw",
    }),
    height: (theme) => ({
      auto: "auto",
      ...theme("spacing"),
      full: "100%",
      screen: "100vh",
    }),
    inset: (theme) => ({
      ...theme("spacing"),
      20: "20px",
      "-20": "-20px",
      "-10": "-10px",
    }),
    margin: (theme, { negative }) => ({
      auto: "auto",
      ...theme("spacing"),
      ...getNegativeObj(theme("spacing")),
    }),
    padding: (theme, { negative }) => ({
      auto: "auto",
      ...theme("spacing"),
      ...getNegativeObj(theme("spacing")),
    }),
    letterSpacing: {
      tighter: "-1px",
      tight: "-0.5px",
      normal: "0",
      wide: "1px",
      wider: "2px",
      widest: "3px",
    },
    fontSize: (theme) => ({
      ...theme("spacing"),
      xs: "12px",
      sm: "14px",
      base: "16px",
      lg: "18px",
      xl: "20px",
      "2xl": "24px",
      "3xl": "30px",
      "4xl": "36px",
      "5xl": "48px",
      "6xl": "64px",
    }),
    gradients: (theme) => ({
      // blue to other
      "blue-green": [theme("colors.blue.500"), theme("colors.green.500")],
      "blue-purple": [theme("colors.blue.500"), theme("colors.purple.500")],

      // green to other
      "green-blue": [theme("colors.green.500"), theme("colors.blue.500")],
      "green-red": [theme("colors.green.500"), theme("colors.red.500")],
      // purple to other
      "purple-blue": [theme("colors.purple.500"), theme("colors.blue.500")],
      "purple-orange": [theme("colors.purple.500"), theme("colors.orange.500")],
      "purple-yellow": [theme("colors.purple.500"), theme("colors.yellow.500")],
      // orange to other
      "orange-purple": [theme("colors.orange.500"), theme("colors.purple.500")],
      "orange-indigo": [theme("colors.orange.500"), theme("colors.indigo.500")],
      // red to other
      "red-purple": [theme("colors.red.500"), theme("colors.purple.500")],
      "red-green": [theme("colors.red.500"), theme("colors.green.500")],

      // teal to other
      "teal-red": [theme("colors.teal.500"), theme("colors.red.500")],

      // indigo to other
      "indigo-red": [theme("colors.indigo.500"), theme("colors.red.500")],

      // pink to other
      "pink-red": [theme("colors.pink.500"), theme("colors.red.500")],
      "pink-blue": [theme("colors.pink.500"), theme("colors.blue.500")],

      // yellow to other
      "yellow-indigo": [theme("colors.yellow.500"), theme("colors.indigo.500")],
    }),
    color: (theme) => ({
      ...theme("colors"),
    }),
    backgroundColor: (theme) => ({
      ...theme("colors"),
      black: {
        0: "#000",
        500: "rgba(0,0,0,.5)",
        "080": "rgba(0,0,0,.08)",
      },
      white: {
        0: "#fff",
        500: "rgba(255,255,255,.5)",
        "080": "rgba(255,255,255,.08)",
      },
    }),
    borderRadius: (theme) => ({
      ...theme("spacing"),
    }),
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

/**
 * 处理负值
 * @param {*} obj
 * @returns
 */
function getNegativeObj(obj) {
  let __obj = {};
  // 负值转换
  for (let key in obj) {
    if (key === 0 || key === "0") {
      __obj[`${key}`] = `${obj[key]}`;
    } else {
      __obj[`-${key}`] = `-${obj[key]}`;
    }
  }

  return __obj;
}

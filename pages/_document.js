import Document, { Html, Head, Main, NextScript } from "next/document";

import { themes } from '../themes';

export function generateCSSVar(theme) {
  const cssTheme = {};

  Object.keys(theme).forEach(key => {
    cssTheme[`--color-${key}`] = theme[key];
  });

  return JSON.stringify(cssTheme);
}

class MyDocument extends Document {
  inlineHTML = `
  (function () {
    var currentTheme;
  
    function changeTheme(inputTheme) {
      if (inputTheme === "primary") {
        const theme = themeConfig.primary;
        for (let key in theme) {
          setCSSVar(key, theme[key]);
        }
        localStorage.setItem("theme", inputTheme);
      } else if (inputTheme === "dark") {
        const theme = themeConfig.dark;
        for (let key in theme) {
          setCSSVar(key, theme[key]);
        }
        localStorage.setItem("theme", inputTheme);
      } else {
        const theme = themeConfig.light;
        for (let key in theme) {
          setCSSVar(key, theme[key]);
        }
        localStorage.setItem("theme", inputTheme);
      }
    }
  
    function setCSSVar(property, color) {
      document.documentElement.style.setProperty(property, color);
    }
    try {
      currentTheme = localStorage.getItem("theme") || "primary";
  
      var themeConfig = {
        primary: ${generateCSSVar(themes.primary)},
        light: ${generateCSSVar(themes.light)},
        dark: ${generateCSSVar(themes.dark)}
      };
  
      changeTheme(currentTheme);
    } catch (err) {
      console.log(new Error("accessing theme has been denied"));
    }
  })();
  `;

  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="en">
        <Head>
        <link rel="shortcut icon" href="/favicon.ico" />
        <script dangerouslySetInnerHTML={{ __html: this.inlineHTML }} />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;

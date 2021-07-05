import * as React from 'react';
import { ThemeProvider as EmotionThemeProvider } from '@emotion/react';
import { default as defaultTheme } from './theme';
import Header from './Header';

export default function ThemeProvider({ children, theme = {}, location }) {
  return (
    <div>
      <Header location={location} />
      <Helmet>
          <meta charSet="utf-8" />
          <title>My Title</title>
          <link rel="canonical" href="http://mysite.com/example" />
        </Helmet>
      <EmotionThemeProvider theme={{ ...defaultTheme, ...theme }}>{children}</EmotionThemeProvider>
    </div>
  );
}

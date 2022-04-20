import "../styles/globals.css";

import { ThemeProvider } from "next-themes";




function MyApp({ Component, pageProps }) {
  return (
    
      <ThemeProvider 
        attribute="class"
        storageKey = "nightwind-mode"
        defaultTheme="dark"
        >
        <Component {...pageProps} />
      </ThemeProvider>
    
  );
}

export default MyApp;

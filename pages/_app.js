import React from 'react'
import App from 'next/app'

class MyApp extends App {
    // Only uncomment this method if you have blocking data requirements for
    // every single page in your application. This disables the ability to
    // perform automatic static optimization, causing every page in your app to
    // be server-side rendered.
    //
    // static async getInitialProps(appContext) {
    //   // calls page's `getInitialProps` and fills `appProps.pageProps`
    //   const appProps = await App.getInitialProps(appContext);
    //
    //   return { ...appProps }
    // }

    render() {
        const { Component, pageProps, router: { asPath } } = this.props;

        // Next.js currently does not allow trailing slash in a route.
        // This is a client side redirect in case trailing slash occurs.
        if (asPath.length > 1 && asPath.endsWith('/')) {
          const urlWithoutEndingSlash = asPath.replace(/\/*$/gim, '');

          if (typeof window !== 'undefined') {
            window.location.replace(urlWithoutEndingSlash);
          }
          return null;
        }

    return <Component {...pageProps} />;
    }
}

export default MyApp

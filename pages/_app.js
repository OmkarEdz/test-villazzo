import App from "next/app"
import Head from "next/head"
import "../assets/css/bootstrap.min.css"
import "../assets/css/font-awesome.css"
import "../assets/css/style.css"
import { createContext } from "react"
import { fetchAPI } from "../lib/api"
import { getStrapiMedia } from "../lib/media"
import Script from 'next/script'
import Link from 'next/link'

// Store Strapi Global object in context
export const GlobalContext = createContext({})

const MyApp = ({ Component, pageProps }) => {
  const { global } = pageProps  
  return (
    <>
      <Head>
        <script type="text/javascript" src="data:text/javascript;base64,LyogQWxsaSBBSSB3aWRnZXQgZm9yIHZpbGxhenpvLmNvbSAqLwooZnVuY3Rpb24gKHcsZCxzLG8sZixqcyxmanMpIHt3WydBbGxpSlNXaWRnZXQnXT1vO3dbb10gPSB3W29dIHx8IGZ1bmN0aW9uICgpIHsgKHdbb10ucSA9IHdbb10ucSB8fCBbXSkucHVzaChhcmd1bWVudHMpIH07anMgPSBkLmNyZWF0ZUVsZW1lbnQocyksIGZqcyA9IGQuZ2V0RWxlbWVudHNCeVRhZ05hbWUocylbMF07anMuaWQgPSBvOyBqcy5zcmMgPSBmOyBqcy5hc3luYyA9IDE7IGZqcy5wYXJlbnROb2RlLmluc2VydEJlZm9yZShqcywgZmpzKTt9KHdpbmRvdywgZG9jdW1lbnQsICdzY3JpcHQnLCAnYWxsaScsICdodHRwczovL3N0YXRpYy5hbGxpYWkuY29tL3dpZGdldC92MS5qcycpKTthbGxpKCdpbml0JywgJ3NpdGVfQmlQUmh1N0ppRHBEUUZGeicpO2FsbGkoJ29wdGltaXplJywgJ2FsbCcpOw=="></script>
      </Head>
      <GlobalContext.Provider value={global.attributes}>
        <Component {...pageProps} />
      </GlobalContext.Provider>
    </>
  )
}

// getInitialProps disables automatic static optimization for pages that don't
// have getStaticProps. So article, category and home pages still get SSG.
// Hopefully we can replace this with getStaticProps once this issue is fixed:
// https://github.com/vercel/next.js/discussions/10949
MyApp.getInitialProps = async (ctx) => {
  // Calls page's `getInitialProps` and fills `appProps.pageProps`
  const appProps = await App.getInitialProps(ctx)
  // Fetch global site settings from Strapi
  const globalRes = await fetchAPI("/global", {
    populate: "*"
  })
  // Pass the data to our page via props
  return { props: {...appProps, pageProps: { global: globalRes.data } }}
}

export default MyApp

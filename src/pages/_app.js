import '@/styles/main.scss'
import { useEffect } from "react";


export default function App({ Component, pageProps }) {
  useEffect(() => {
    history.scrollRestoration = "manual"
  }, [])
  return <Component {...pageProps} />
}

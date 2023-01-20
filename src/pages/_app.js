import '@/styles/globals.css'
import "@/styles/header.css"
import createEmotionCache from '@/Theme/EmotionCache';
import { CacheProvider } from '@emotion/react';
const clientSideEmotionCache = createEmotionCache();
export default function App({ Component, emotionCache = clientSideEmotionCache
  , pageProps }) {
  return (
    <CacheProvider value={emotionCache}>
      <Component {...pageProps} />
    </CacheProvider>
  )



}

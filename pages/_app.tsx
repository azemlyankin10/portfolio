import type { AppProps } from 'next/app'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../styles/main.scss'
import { RecoilRoot } from 'recoil'
import NextNProgress from 'nextjs-progressbar'

const MyApp = ({ Component, pageProps }: AppProps) => (
  <RecoilRoot>
    <NextNProgress 
      color="green"
      startPosition={0.3}
      stopDelayMs={200}
      height={3}
      showOnShallow={true}
    />
    <Component {...pageProps} />
  </RecoilRoot>
)

export default MyApp

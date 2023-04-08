import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import mongoose from 'mongoose'



export default function App({ Component, pageProps }: AppProps) {
  (async () => {
    try {
      await mongoose.connect(process.env.MONGO_URI!);
      console.log("Base de datos funcionando");
    } catch (error) {
      console.log(error);
    }
  })();

  return <Component {...pageProps} />
}

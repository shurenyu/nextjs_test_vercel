import ContextProvider from '@/context'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div>
      <ContextProvider>
        <Component {...pageProps} />
      </ContextProvider>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        draggable={false}
        closeOnClick
        pauseOnHover
        theme="colored"
      />
    </div>
  )
}

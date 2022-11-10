import "../styles/globals.css"
import type { AppProps } from "next/app"
import { ChakraProvider } from "@chakra-ui/react"
import { UserProvider } from "@auth0/nextjs-auth0"
import Header from "../components/Header"

export default function App({ Component, pageProps }: AppProps) {
  const { user } = pageProps
  return (
    <ChakraProvider>
      <UserProvider user={user}>
        <Header />
        <Component {...pageProps} />
      </UserProvider>
    </ChakraProvider>
  )
}

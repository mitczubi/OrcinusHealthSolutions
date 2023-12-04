'use client'
import "bootstrap/dist/css/bootstrap.css";
import Layout from "@/components/layout";
import { Lora } from 'next/font/google';
import CalendlyWidget from "@/components/calendly";

const lora = Lora({subsets: ['latin']})

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <CalendlyWidget />
      <main className={lora.className}>
        <Component {...pageProps} />
      </main>
    </Layout>
  )
}

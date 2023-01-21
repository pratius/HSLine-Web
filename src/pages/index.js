import Head from 'next/head'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Layout from '@/components/Layout'
import Hero from './landing/hero-main'
import Blogs from './landing/blogs'
import StartToday from './landing/start-today'
import LandingTradle from './landing/landing-tradle'
import EconomyRanking from './landing/economy-ranking'
import CountryReport from './landing/country-reports'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Layout>
        <Hero />
        <Blogs />
        <StartToday />
        <LandingTradle />
        <EconomyRanking />
        <CountryReport />
      </Layout>
    </>
  )
}

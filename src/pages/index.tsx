import Head from 'next/head'
import { Inter } from '@next/font/google'
import { Box } from '@chakra-ui/react'
import AnouncmentBar from '@/components/anounceMent/AnouncmentBar'
import Header from '@/components/header/Header'
import Carousel from '@/components/Carosel/Carousel'
import BodyMain from '@/components/Body/BodyMain'
import Footer from '@/components/Body/Footer/Footer'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Dress Shop</title>
        <meta name="description" content="Dress Shop portfolio Website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main >
        <Box >
          <AnouncmentBar />
          <Header />
          <Carousel />
          <BodyMain />
          <Footer />
        </Box>
      </main>
    </>
  )
}

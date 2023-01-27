import NavBar from '../components/NavBar'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import Head from 'next/head'
import nProgress from 'nprogress'

export default function Layout({ children, footer = true, title, dark = false}) {
  const router = useRouter()

  useEffect(() => {
    const handleRouteChange = () => nProgress.start();

    router.events.on('routeChangeStart', handleRouteChange)
    router.events.on('routeChangeComplete', () => nProgress.done())

    return () => {
      router.events.off('routeChangeStart', handleRouteChange)
    }
  }, [router.events])

  return (
    <div className={`${dark ? 'bg-dark' : ''}`}>
      <Head>
        <meta charSet='utf-8' />
        <title>{title ? title: 'My Portfolio'}</title>
        <meta name='description' content='this is the home page og my portfolio' />
      </Head>
      <NavBar />
      <main className='container py-4'>
        {children}
      </main>
      {
        footer 
        ? 
          <footer className='text-center bg-dark text-light'>
            <div className="container p-4">
              <h1>&copy; Samuel Rico Portfolio</h1>
              <p>2002 - {new Date().getFullYear()}</p>
              <p>All rights reserved</p>
            </div>
          </footer>
        : null
      }
    </div>
  )
}
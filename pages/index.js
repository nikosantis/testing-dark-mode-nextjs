import Head from 'next/head'
import Link from 'next/link'

export default function Home () {
  return (
    <div className='container'>
      <Head>
        <title>Testing dark mode class html</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main>
        <h1 className='title'>
          Welcome to Next.js!
        </h1>
        <br />
        <br />
        <Link href='/style'>
          <a>Style page test</a>
        </Link>
      </main>
    </div>
  )
}

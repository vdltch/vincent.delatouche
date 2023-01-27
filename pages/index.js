import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import { LockClosedIcon } from '@heroicons/react/20/solid'
import deved from '../public/photoLogin.png';
export default function Home() {
  return (
    <>
      <Head>
        <title>Login - form</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className=' bg-slate-500 px-10'>
      <section className='min-h-screen'>
      <nav className=' py-10 mb-12 flex justify-between'>
      <Link href="/portfolio" className='bg-gradient-to-r from-yellow-400 font-light font-poppins
       to-teal-500 text-white px-4 py-2 rounded-md ml-8'>
         Accueil </Link>
      <ul className=' flex items-center'>
                    <li>
                        <a className=' bg-gradient-to-r font-poppins from-cyan-500 to-yellow-400 font-bu text-white px-4 py-2 rounded-md ml-8' href='#'>Resume</a>
                    </li>
                </ul>
            </nav>
      <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg">
        <div className="w-full max-w-md space-y-8 text-center">
          <div>
          <div className=' relative mx-auto bg-gradient-to-b from- rounded-full w-40 h-40 mt-20 overflow-hidden md:h-46 md:w-46' >
          <Image src={deved} layout="fill" objectFit='cover' alt='avatar'/>
            </div>
            <h2 className="mt-6 text-center text-3xl font-poppins tracking-tight text-gray-900">
              Connectez-vous à votre compte 
            </h2>
            <p className="mt-2 text-center text-sm text-gray-600">
              Où{' '}
              <a href="#" className="font-medium text-yellow-400 hover:text-yellow-700">
                créez le dès maintenant !
              </a>
            </p>
          </div>
          <form className="mt-8 space-y-6" action="#" method="POST">
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="-space-y-px rounded-md shadow-sm">
              <div>
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-yellow-400 focus:outline-none focus:ring-yellow-400 sm:text-sm"
                  placeholder="Ici"
                />
              </div>
              <div>
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-yellow-400 focus:outline-none focus:ring-yellow-400 sm:text-sm"
                  placeholder="Mots de passe"
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 rounded border-yellow-600 text-yellow-400 focus:ring-yellow-400"
                />
                <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                  Enregistrer le mdp 
                </label>
              </div>

              <div className="text-sm">
                <a href="#" className="font-medium text-yellow-400 hover:text-yellow-600">
                  Mots de passe oublié ? 
                  
                </a>
              </div>
            </div>
            <div>
              <button
                type="submit"
                className="group relative flex w-full justify-center rounded-md border border-transparent bg-yellow-400 py-2 px-4 text-sm font-medium
                text-white hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2"
              >
                <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                  <LockClosedIcon className="h-5 w-5 text-yellow-600 group-hover:text-yellow-400" aria-hidden="true" />
                </span>
                Connexion
              </button>
            </div>
          </form>
        </div>
      </div>
      </section>
      </main>
    </>
  )
}

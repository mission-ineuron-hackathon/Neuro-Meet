import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/dist/client/link'

export default function Home() {
  return (
    <>
      <Head>
        <title>Ecom By Strapi</title>
      </Head>
      <div className="">
        <section className="text-gray-400 body-font">
          <div className=" md:h-[80vh] flex px-5 py-24 md:flex-row flex-col items-center">
            <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
              <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-textColor">
                Before they sold out
                <br className="hidden lg:inline-block" />
                readymade gluten
              </h1>
              <p className="mb-8 leading-relaxed">
                Copper mug try-hard pitchfork pour-over freegan heirloom neutra
                air plant cold-pressed tacos poke beard tote bag. Heirloom echo
                park mlkshk tote bag selvage hot chicken authentic tumeric
                truffaut hexagon try-hard chambray.
              </p>
              <div className="flex justify-center">
                <Link href="/dashboard">
                <a>
                <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                  Dashboard
                </button>
                </a>
                </Link>
                <button className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
                  New meet
                </button>
              </div>
            </div>
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 grid place-content-center">
              <img
                // layout="fill"
                className="object-cover object-center rounded"
                alt="hero"
                src="/assets/logo.png"
              />
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

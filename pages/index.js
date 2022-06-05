import Head from 'next/head'
import Image from 'next/image'

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
const coverPlaceholder = "https://static.mangajar.com/posters/4529/NhKZN9lmEkCFDSpNwZVyP5x8jKrthgXRRmVff7Yz_mini.jpg";
const API_URL = process.env.API_URL;

const Home = ({ updateds, populars }) => {
  // console.log(data);
  const updatedManga = updateds.map(m => {
    return (
      <div className="flex flex-col items-center justify-center w-40">  
        <div className="w-full h-32 bg-gray-300 bg-center bg-cover rounded-lg shadow-md" style={{backgroundImage: `url(${coverPlaceholder})`}}></div>
        <div className="-mt-10 overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800 w-full text-sm">
            <h1 className="text-base py-2 font-bold text-center text-gray-800 dark:text-white truncate">{m.title}</h1>
            <span className="text-gray-800 dark:text-gray-200 mr-2">{m.chapter} chapter</span>
            <button className="px-2 py-1 text-xs text-white transition-colors duration-200 transform bg-gray-800 rounded hover:bg-gray-700 dark:hover:bg-gray-600 focus:bg-gray-700 dark:focus:bg-gray-600 focus:outline-none">Read</button>
        </div>
    </div>
    );
  });

  let popularManga = [];
  for(let i=0; i< 10; i++){
    popularManga.push(<h1 className='text-base font-bold truncate'>{i+1}. {populars[i].title}</h1>);
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-yellow-300">
      <Head>
        <title>Mangareo - Your one stop place to explore Manga</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main className="flex w-full flex-1 flex-col items-center content-start px-8 text-center">
        <h1 className="text-5xl font-bold">
          <a className="text-black" href="/">
            Mangareo!
          </a>
        </h1>
        <h1 className='text-xl pt-2'>One stop place for your manga</h1>

        <div className="mt-4 flex w-full justify-around sm:w-full space-x-6">
          <div className='bg-cyan-400 w-3/4 h-auto px-4 py-10 space-y-1 rounded shadow-xl'>
            <h1 className='text-3xl font-bold text-left'>Last manga updates</h1>
            <div className='grid grid-cols-5 auto-cols-max gap-6'>
              {updatedManga}
            </div>
          </div>

          <div className='bg-cyan-400 w-1/4 text-left px-4 space-y-1 h-fit py-10 rounded shadow-xl'>
            <h1 className='text-3xl font-bold'>Popular manga</h1>
            {popularManga}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export const getServerSideProps = async () => {
  console.log(API_URL)
  const [updatedRes, popularRes] = await Promise.all([
    fetch(`${API_URL}/api/manga/last-updated`), 
    fetch(`${API_URL}/api/manga/most-viewed`)
  ]);
  const [updateds, populars] = await Promise.all([
    updatedRes.json(), 
    popularRes.json()
  ]);
  return { 
    props: {
       updateds, populars
    }
  }
}
export default Home;
import {supabase} from "../utils/supabase";

const coverPlaceholder = "https://static.mangajar.com/posters/4529/NhKZN9lmEkCFDSpNwZVyP5x8jKrthgXRRmVff7Yz_mini.jpg";
const API_URL = process.env.API_URL;

const MangaDetails = ({ manga }) => {
    console.log(manga);
    return (
        <div className="flex min-h-screen flex-col items-center justify-center bg-yellow-300">
        <Head>
          <title>Mangareo - Your one stop place to explore Manga</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Navbar />
        <main className="flex w-full flex-1 flex-col items-center content-start px-8 text-center">  
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
    );
};

export const getServerSideProps = async ({params: {slug}}) => {
    const res = await fetch(`${API_URL}/api/manga/${slug}`);
    const manga = await res.json();

    return {
        props: {
            manga
        }
    }
}
export default MangaDetails;
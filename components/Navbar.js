import Link from 'next/link';

const Navbar = () => {
    return (
        <div className="py-2 flex w-full">
            <div className='w-1/2 flex items-center'>
                <h1 className="text-3xl font-bold mx-5"><Link href="/"><a>Mangareo</a></Link></h1>
                <h1 className="text-2xl font-bold mx-5">Top Manga</h1>
                <h1 className="text-2xl font-bold mx-5">Genres</h1>
            </div>
            <div className='w-1/2 flex justify-end items-center'>
                <h1 className="text-2xl font-bold mx-5">Login</h1>
                <div className='flex items-center'>
                <input type="text" value="tbone" className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 mr-2"/>
                <button></button>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                </div>
            </div>
        </div>);
};

export default Navbar;
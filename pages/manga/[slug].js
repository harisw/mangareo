import {supabase} from "../utils/supabase";

const coverPlaceholder = "https://static.mangajar.com/posters/4529/NhKZN9lmEkCFDSpNwZVyP5x8jKrthgXRRmVff7Yz_mini.jpg";
const API_URL = process.env.API_URL;

const MangaDetails = ({ manga }) => {
    console.log(manga);
    return (
        <div className="w-full max-w-3xl mx-auto py-16 px-8">
            <h1 className="text-3xl mb-6">{lesson.title}</h1>
            <p>{lesson.description}</p>
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
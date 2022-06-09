import Link from 'next/link';
import { useState } from 'react';
import { useAuthContext } from '../context/authentication';

const Navbar = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [authToken, setAuthToken] = useAuthContext();
    const authentication_url = process.env.MY_API_URL;
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleLogin = () => {
        // const loginUrl = `${authentication_url}/auth/signin`;
        const loginUrl = `http://localhost:8080/auth/signin`;
        fetch(loginUrl, {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                'username': username,
                'password': password
            })
        })
        .then( async (resp) => {
            console.log(resp);
            if(!resp.ok) {
                window.alert("Username/password wrong");
            } else {
                const data = await resp.json();
                setAuthToken({
                    'username': username,
                    'roles': data.roles,
                    'token': data.token
                });
                setIsModalOpen(false);
                window.alert("Login successful");
            }
        }).catch(err => {
            window.alert(err);
        })
    }
    return (
        <div className="py-2 flex w-full">
            <div className='w-1/2 flex items-center'>
                <h1 className="text-3xl font-bold mx-5"><Link href="/"><a>Mangareo</a></Link></h1>
                <h1 className="text-2xl font-bold mx-5">Top Manga</h1>
                <h1 className="text-2xl font-bold mx-5">Genres</h1>
            </div>
            <div className='w-1/2 flex justify-end items-center'>
                {authToken ?
                    <div><Link href="/user/profile"><a className="text-3xl font-bold mx-5 modal-button">Profile</a></Link></div>
                    : <div><label for="my-modal-6" className="text-3xl font-bold mx-5" onClick={() => setIsModalOpen(true)}>Login</label>
                    <label for="my-modal-6" className="text-3xl font-bold mx-5 modal-button">Register</label></div>
                }
                <div className='flex items-center'>
                <input type="text" value="tbone" className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 mr-2"/>
                <button></button>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                </div>
            </div>

            <input type="checkbox" id="my-modal-6" className="modal-toggle" checked={isModalOpen}/>
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                <h3 className="font-bold text-lg">Login</h3>
                <div className='form-control w-full max-w-xs'>
                    <label className='label'><span className='label-text'>Username</span></label>
                    <input type="text" placeholder="Type here" className="input input-bordered input-primary w-full max-w-xs" 
                    onChange={e => setUsername(e.target.value)}/>
                </div>
                <div className='form-control w-full max-w-xs'>
                    <label className='label'><span className='label-text'>Password</span></label>
                    <input type="password" placeholder="Enter password" className="input input-bordered input-primary w-full max-w-xs" 
                    onChange={e => setPassword(e.target.value)}/>
                </div>
                <div className="modal-action">
                    <button className="btn" onClick={handleLogin}>Login</button>
                </div>
                </div>
            </div>

        </div>);
};

export default Navbar;
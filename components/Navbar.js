import Link from '../components/Link';
import { useState } from 'react';
// import { useAuthContext } from '../context/authentication';
import { useSelector, useDispatch } from 'react-redux';
const Navbar = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const storeData = useSelector(state => state);
    const dispatch = useDispatch();
    const [isModalLoginOpen, setIsModalLoginOpen] = useState(false);
    const [isModalRegisterOpen, setIsModalRegisterOpen] = useState(false);

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
                dispatch({
                    type: "SIGN_IN",
                    username: data.username,
                    token: data.token,
                    email: data.email
                });

                setIsModalLoginOpen(false);
                window.alert("Login successful");
            }
        }).catch(err => {
            window.alert(err);
        })
    }
    const handleRegister = () => {
        // const loginUrl = `${authentication_url}/auth/signin`;
        const loginUrl = `http://localhost:8080/auth/signup`;
        fetch(loginUrl, {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                'username': username,
                'email': email,
                'password': password
            })
        })
        .then( async (resp) => {
            console.log(resp);
            if(!resp.ok) {
                window.alert("Username/email already exists");
            } else {
                setIsModalRegisterOpen(false);
                window.alert("Login successful, you can login now");
                setIsModalLoginOpen(true);
            }
        }).catch(err => {
            window.alert(err);
        })
    }
    const signOut = () => {
        dispatch({
            type: "SIGN_OUT"
        });
    }
    return (
        <div className="py-2 flex w-full">
            <div className='w-1/2 flex items-center'>
                <h1 className="text-3xl font-bold mx-5"><Link href="/"><a>Mangareo</a></Link></h1>
                <h1 className="text-2xl font-bold mx-5"><Link href="/manga/top">Top Manga</Link></h1>
                <h1 className="text-2xl font-bold mx-5"><Link href="/manga/genre">Genres</Link></h1>
            </div>
            <div className='w-1/2 flex justify-end items-center'>
                {storeData.token ?
                    <div>
                        <Link href="/user/mypage" className="text-3xl font-bold mx-5">
                            Profile
                        </Link>
                        <h1 className='text-3xl font-bold mx-5' onClick={signOut}>Sign Out</h1>
                    </div>
                    : <div><label for="modal-login" className="text-3xl font-bold mx-5" onClick={() => setIsModalLoginOpen(true)}>Login</label>
                    <label for="modal-register" className="text-3xl font-bold mx-5" onClick={() => setIsModalRegisterOpen(true)}>Register</label></div>
                }
                <div className='flex items-center'>
                <input type="text" value="tbone" className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 mr-2"/>
                <button></button>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                </div>
            </div>

            <input type="checkbox" id="modal-login" className="modal-toggle" checked={isModalLoginOpen}/>
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

            <input type="checkbox" id="modal-register" className="modal-toggle" checked={isModalRegisterOpen}/>
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                <h3 className="font-bold text-lg">New Account</h3>
                <div className='form-control w-full max-w-xs'>
                    <label className='label'><span className='label-text'>Username</span></label>
                    <input type="text" placeholder="Type here" className="input input-bordered input-primary w-full max-w-xs" 
                    onChange={e => setUsername(e.target.value)}/>
                </div>
                <div className='form-control w-full max-w-xs'>
                    <label className='label'><span className='label-text'>Email</span></label>
                    <input type="text" placeholder="Type here" className="input input-bordered input-primary w-full max-w-xs" 
                    onChange={e => setEmail(e.target.value)}/>
                </div>
                <div className='form-control w-full max-w-xs'>
                    <label className='label'><span className='label-text'>Password</span></label>
                    <input type="password" placeholder="Enter password" className="input input-bordered input-primary w-full max-w-xs" 
                    onChange={e => setPassword(e.target.value)}/>
                </div>
                <div className="modal-action">
                    <button className="btn" onClick={handleRegister}>Register</button>
                </div>
                </div>
            </div>

        </div>);
};

export default Navbar;
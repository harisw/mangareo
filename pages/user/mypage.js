import { useState } from "react"
// import { useAuthContext } from '../../context/authentication';
import { useSelector, useDispatch } from "react-redux";
//import Layout from '../../components/Layout';

const MyPage = () => {
    const storeData = useSelector(state => state);
    
    console.log(storeData);
    return (
        <div>
            <h1>Welcome {storeData.username}</h1>
        </div>
    );
}

export default MyPage;
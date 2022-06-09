import { useState } from "react"
import { useAuthContext } from '../../context/authentication';
//import Layout from '../../components/Layout';

const MyPage = () => {
    const [userData, setUserData] = useAuthContext();
    console.log(userData);
    return (
        <div>
            {userData}
        </div>
    );
}

export default MyPage;
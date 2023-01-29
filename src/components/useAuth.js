import {useEffect} from "react";
import {getAuth} from "firebase/auth";
import {useNavigate} from "react-router-dom";

const useAuth = () => {
    const navigate = useNavigate();
    useEffect(() => {
        const auth = getAuth();
        auth.onAuthStateChanged((user)=> {
            if (!user) {
                navigate("/auth/login");
            }
        })
    }, [navigate]);
}

export default useAuth;
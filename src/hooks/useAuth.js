import { useContext } from "react";
import { AuthContext } from "../context/AuthProvider/AuthProvide";

const useAuth = () => {
    const auth = useContext(AuthContext);
    return auth;
}
export default useAuth;
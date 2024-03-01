import { useSelector } from "react-redux";

export function useAuth() {
    const {data, isAuth} = useSelector(state => state.auth);
    return {
        isAuth,
        data
    }
}
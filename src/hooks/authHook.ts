import { useAppSelector } from "../store/hooks";

type Auth = {
    username: string;
    email: string;
    firstName: string;
    lastName: string;
    gender: string;
    image: string;
    token: string;
  };

type authState = {
    data: Auth | {};
    status: string;
    isAuth: boolean;
    error: string | null;
    token: string | null;
  };
export function useAuth() {
    const {data, isAuth} = useAppSelector<authState>(state => state.auth);

    console.log('data: ', data);
    console.log('isAuth: ', isAuth);

    return {
        isAuth,
        data
    }
}

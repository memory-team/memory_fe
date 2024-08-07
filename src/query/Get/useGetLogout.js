import { useQuery } from '@tanstack/react-query';
import UserApi from '../../apis/UserApi';

const getLogout = async () => {
    const res = await UserApi.getLogout();
    return res.data;
};

const useGetLogout = () =>
    useQuery({
        queryKey: ['useGetLogout'],
        queryFn: () => getLogout(),
    });

export default useGetLogout;

import { useEffect } from 'react';
import { useAppDispatch } from '../../store/hooks';
import { useGetUserProfileQuery } from '../../api/userApiExtension';
import { updateUserInfo } from '../../features/user/userSlice';
import { setIsAuth } from '../auth/authSlice';
import { useGetToken } from '../auth/authUtils';

export const useFetchUserProfile = () => {
    const token = useGetToken();
    const dispatch = useAppDispatch();

    const { data: userData, isSuccess } = useGetUserProfileQuery(
        null, // FIXME: Indispensable et non documenté actuellement...
        { refetchOnMountOrArgChange: true, skip: !token }, // Force la mise à jour, skip si pas de token pour l'autoconnect
    );

    useEffect(() => {
        if (isSuccess) {
            dispatch(updateUserInfo(userData.body)); // Mise à jour du store
            dispatch(setIsAuth());
        }
    }, [isSuccess, dispatch, userData?.body]);

    return userData?.body;
};

import { useEffect } from 'react';
import { useAppDispatch } from '../../store/hooks';
import { useGetUserProfileQuery } from '../../api/userApiExtension';
import { updateUserInfo } from '../../features/user/userSlice';
import { setIsAuth } from '../auth/authSlice';

export const useFetchUserProfile = () => {
    const dispatch = useAppDispatch();
    const { data: userData, isSuccess } = useGetUserProfileQuery(
        null, // FIXME: Indispensable et non documenté actuellement...
        { refetchOnMountOrArgChange: true } // Force la mise à jour
    );

    useEffect(() => {
        if (isSuccess) {
            console.log("useEffect")
            dispatch(updateUserInfo(userData.body)); // Mise à jour du store
            dispatch(setIsAuth());
        }
    }, [isSuccess, dispatch, userData?.body]);

    return userData?.body;
};

// export const autoReconnect() {

// }
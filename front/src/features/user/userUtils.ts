import { useEffect } from 'react';
import { useAppDispatch } from '../../store/hooks';
import { useGetUserProfileQuery } from '../../features/user/userApiExtension';
import { getTokenFromLocalStorage } from '../../features/auth/authUtils';
import { updateUserInfo } from '../../features/user/userSlice';

export const useFetchUserProfile = () => {
    const dispatch = useAppDispatch();
    const token = getTokenFromLocalStorage();
    const userProfile = useGetUserProfileQuery(token);

    useEffect(() => {
        if (userProfile.data) {
            const userData = userProfile.data.body;
            dispatch(updateUserInfo(userData));
        }
    }, [dispatch, userProfile]);
};

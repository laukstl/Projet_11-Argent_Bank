import { useEffect } from 'react';
import { useAppDispatch } from '../../store/hooks';
import { useGetUserProfileQuery } from '../../api/userApiExtension';
import { getToken } from '../../features/auth/authUtils';
import { updateUserInfo } from '../../features/user/userSlice';

export const useFetchUserProfile = () => {
    const dispatch = useAppDispatch();
    const token = getToken();
    const userProfile = useGetUserProfileQuery(token);

    useEffect(() => {
        if (userProfile.data) {
            const userData = userProfile.data.body;
            dispatch(updateUserInfo(userData));
        }
    }, [dispatch, userProfile]);
};

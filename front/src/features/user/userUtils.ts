import { useEffect } from 'react';
import { useAppDispatch } from '../../store/hooks';
import { useGetUserProfileQuery } from '../../api/userApiExtension';
import { updateUserInfo } from '../../features/user/userSlice';

export const useFetchUserProfile = () => {
    const dispatch = useAppDispatch();
    const { data, isSuccess } = useGetUserProfileQuery(null);
    // currentData, data, isError, isFetching, isLoading, isSuccess, isUninitialized, error

    useEffect(() => {
        if (isSuccess) {
            const userData = data.body;
            dispatch(updateUserInfo(userData));
        }
    }, [isSuccess, dispatch, data?.body]);

    return data;
};

// export const getUserName = () => {}

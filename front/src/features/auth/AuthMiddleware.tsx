import type React from "react";

import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { useGetUserProfileQuery } from '../../api/userApiExtension';
import { updateUserInfo } from '../../features/user/userSlice';
import { setIsAuth, selectIsAuthenticated } from '../auth/authSlice';
import { useGetToken } from '../auth/authUtils';

interface Props {
    children: React.ReactElement;
}

const AuthMiddleware: React.FC<Props> = ({ children }) => {
    const token = useGetToken();
    const dispatch = useAppDispatch();
    const isAuth = useAppSelector(selectIsAuthenticated);

    const { data: userData, isSuccess } = useGetUserProfileQuery(
        null,
        { refetchOnMountOrArgChange: true, refetchOnFocus: true, skip: !token && !isAuth},
    );

    useEffect(() => {
        if (isSuccess) {
            dispatch(updateUserInfo(userData.body));
            dispatch(setIsAuth());
        }
    }, [isSuccess, dispatch, userData?.body]);
    
    return children;
};

export default AuthMiddleware;

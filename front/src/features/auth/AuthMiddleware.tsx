// A FAIRE: re-arranger la connection automatique sur la page User
// Actuellement l'appel à useFetchUserProfile se fait, Encore, à chaque modif: repenser ça
// Si on le garde, en profiter pour faire la purge ici

import type React from "react";

import { useFetchUserProfile } from "../user/userUtils";

interface Props {
    children: React.ReactElement;
}

const AuthMiddleware: React.FC<Props> = ({ children }) => {
    
    useFetchUserProfile();
    
    return children;
};

export default AuthMiddleware;


// fonctions utilitaires liées à l'auth

// Fonctions de validation
// Fonctions de manipulation de token
// Fonctions de redirection ( si token non valide/expiriré vers page connection)
// Autres fonctions utilitaires ( gestion des erreurs d'auth )

// import { useAppSelector } from '../../app/store/hooks';
// import type { RootState } from '../../app/store/store';

// import { useEffect } from 'react'; 
// import { useNavigate  } from 'react-router-dom';
// export const useRequireAuth = () => {
//     const isAuth = useAppSelector((state: RootState) => state.auth.isAuthenticated);
//     const navigate = useNavigate ();

//     useEffect(() => {
//         if (!isAuth) {return navigate("/sign-in");}
//     }, [isAuth, navigate]);};

//---------------------IDEES EN VRAC----------------------------------


// function()???
    // store une valeur dans le store
    // store.dispatch({ type: 'SET_VAL', payload: 'ma_valeur' });

    // récup la val
    // import type { RootState } from '../../app/store/store';
    // import { useSelector } from 'react-redux';
    // const val = useSelector((state: RootState) => state.isAnthenticated);
    // console.log(val);


    // const {token:object, setToken:function} = useState({email:null, password:null});

    // localStorage.setItem('state', token);
    // stock dans redux => isAuthenticated:booléen


    export const testEmail = () => {
        // validité email
    }

    export const testPassword = () => {
        // champ vide
        // nombre de chat
    }

    export const testToken = () => {
            // const isTokenExpired = () => {
        //     const token = localStorage.getItem('token');
        //     if (!token) {
        //         return true;
        //     }
        //     const tokenExpiration = new Date(JSON.parse(atob(token.split('.')[1])).exp * 1000);
        //     return tokenExpiration < new Date();
        // };

        //   if (isTokenExpired()) {
        //     // Rediriger vers la page de connexion ou renouveler le token
        //     // ...
        //   } else {
        //     // Le token est toujours valide, poursuivre avec l'application
        //     // ...
        //   }
    }
import "./Error.scss";
import { useNavigate } from 'react-router-dom';

const Error = () => {
    const navigate = useNavigate(); // Récupère la fonction de navigation

    const handleButton = () => {navigate('/');};

    return (
        <div className="Page404Container">
            <div className="ErrorNumber">404</div>
            <div className="ErrorMessage">Page Not Found</div>
            <p>Oops! The page you're looking for doesn't exist.</p>
            <button onClick={handleButton}>Retour à la page d'accueil</button>
        </div>
    );
};

export default Error;

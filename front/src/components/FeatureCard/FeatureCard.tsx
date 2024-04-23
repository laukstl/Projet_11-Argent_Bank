import "./FeatureCard.scss";

interface featureCardPropsType {
    img: string;
    imgAlt: string;
    title: string;
    text: string;
}

FeatureCard.defaultProps = {
    img: "./src/assets/icon-error.webp",
    imgAlt: "Image description",
    title: 'Card title',
    text: 'Card text',
};

function FeatureCard({img, imgAlt, title, text}: featureCardPropsType) {
    return (
        <div className="feature-item">
            <img
                src={img}
                alt={imgAlt}
                className="feature-icon"
            />
            <h3 className="feature-item-title">{title}</h3>
            <p>
                {text}
            </p>
        </div>
    )
}

export default FeatureCard;

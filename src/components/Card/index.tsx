import './styles.css';

interface CardProps {
    price: number;
    title: string;
    image: string;
}

export default ({ price, image, title }: CardProps) => {
    return (
        <div className="card">
            <img src={image} />
            <h2>{title}</h2>
            <p>
                <strong>Valor:</strong>
                {price}
            </p>
        </div>
    )
}
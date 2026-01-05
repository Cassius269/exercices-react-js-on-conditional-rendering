export default function Product({name, image, price, quantity=1 }){
    console.log('Props reçues:', { name, price, image, quantity });

    return (
        <>
            <article className="card border-secondary col-8 col-md-4 col-lg-3 m-auto">
                <img src={image} className="card-img-top" alt={`image de ${name}`} />
                <div className="card-body">
                    <h3 className="card-title bg-secondary-subtle p-2">{name}</h3>
                    <div className="d-flex justify-content-between">
                        <p>Quantité {quantity}</p>
                        <p className="card-text d-flex justify-content-end">Prix {price.toLocaleString()}€</p>
                    </div>
                </div>
            </article>
        </>
    );
}
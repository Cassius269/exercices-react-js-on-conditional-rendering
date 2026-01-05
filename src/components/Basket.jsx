import Product from "./Product";
import products from '../assets/data/products';

function Basket(){
    const availableProducts = products.filter(p => p.enStock);
    // console.log(availableProducts);

    const sum = availableProducts.reduce((sum, current) => sum + current.price*current.quantity, 0);
    // console.log(sum);

    return (
        <section className="container">
            <h1>Votre panier</h1>
            <div className="row">
                {availableProducts.map(
                    p => <Product 
                            key={p.id} 
                            name={p.name} 
                            price={p.price} 
                            image={p.image}
                            quantity={p.quantity}
                    />)
            }
            </div>
            {sum ? <p className="text-center fs-1">Total: {sum.toLocaleString()}€</p> : 'Prix total non connu'}
        </section>
);
}

export default Basket;
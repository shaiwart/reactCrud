import {Link, useParams} from 'react-router-dom'; 
import products from '../Data';


export default function SingleProduct() {
    const {productId} = useParams(); 
    const product = products.find((product)=> product.id === productId); 
    const {name, image} = product;

    return(
        <section className="section">
            <h1>SingleProduct Page</h1>
            <img src={image} alt={name} />
            <h5>{name}</h5>
            <Link to='/products'>Go back to products</Link>
        </section>
    )
}
import { Link } from "react-router-dom";

export default function ErrorPage() {
    return(
        <section>
            <h1>404</h1>
            <h3>
                Page not found !
            </h3>
            <Link to='/' >Go back to Home</Link>
        </section>
    )
}
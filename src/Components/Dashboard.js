export default function Dashboard({user}) {
    return(
        <section className="section">
            <h4>Hello, {user.name}</h4>
            <h4>Your e-mail is: {user.email}</h4> 
        </section>
    )
}
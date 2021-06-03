import {FaPhone, FaEnvelope} from "react-icons/fa"

const Contacts = () => {
    return (
        <>
            <section className="contacts">
                <h1>Contact Me</h1>
                <ul>
                    <li><a href="tel:8019532740"><FaPhone />+1 (801) 953 2470</a></li>
                    <li><a href="mailto:bobbycharizard@gmail.com"><FaEnvelope />{" "} bobbycharizard@gmail.com</a></li>
                </ul>
            </section>
        </>
    )
}

export default Contacts;
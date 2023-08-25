import Button from 'react-bootstrap/Button';
import SecundaryTextWhite from "../components/Texts/SecundaryTextWhite";
import TextWhite from "../components/Texts/TextWhite";

import Avatar from "../assets/images/image-founder.webp"

import styles from "./styles.module.css"

export default function SectionTree() {
    return (
        <section className="container d-flex mt-5">
            <img src={Avatar} alt="Avatar de Cliente" className={styles.avatar} />
            <div className={styles.Comments}>
                <SecundaryTextWhite text="Be the first to test" />
                <TextWhite text="Hi, I'm Louis Graham, the founder of the company. Book a demo call with me to become a beta tester for our app and kickstart your company. Apply for access below and I’ll be in touch to schedule a call." />
                <Button variant="outline-success">Apply for access</Button>{" "}
            </div>
        </section>
    );
}
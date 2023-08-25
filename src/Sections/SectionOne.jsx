import Button from 'react-bootstrap/Button';
import Header from '../components/Header/Header';
import Phone from "../assets/images/image-hero.webp"
import TextPurple from '../components/Texts/TextPurple';

import styles from "./styles.module.css"
import PrincipalTextWhite from '../components/Texts/PrincipalTextWhite';
import TextDecoration from '../components/Texts/TextNav';

export default function SectionOne() {
    return (
        <div className={styles.SectionOne}>
            <Header />
            <div className={styles.containerItem}>
                <PrincipalTextWhite text1="Data " textDecoration="tailored" text2=" to your needs." />
                <PrincipalTextWhite />
                <Button variant="outline-success">Learn More</Button>{' '}
                <img src={Phone} alt="" className={styles.img} />
            </div>
        </div>
    )
}
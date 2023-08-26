import SectionOne from "../Sections/SectionOne";
import SectionTree from "../Sections/SectionTree";
import SectionTwo from "../Sections/SectionTwo";
import Footer from "../components/Footer/Footer";

import styles from "./styles.module.css";

export default function Workit() {
    return (
        <>
            <section>
                <SectionOne />
            </section>
            <section className={styles.Section}>
                <SectionTwo />
            </section>
            <section  className={styles.Section}>
                <SectionTree />
            </section>
            <footer  className={styles.Footer}>
                <Footer />
            </footer>
        </>
    )
}
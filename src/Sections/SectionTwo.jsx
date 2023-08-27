import Number from "../components/Number/Number";
import SecundaryTextPurple from "../components/Texts/SecundaryTextPurple";
import TextPurple from "../components/Texts/TextPurple";
import styles from "./styles.module.css"

export default function SectionTwo() {
    return (
        <div className={styles.SectionTwo}>
            <div className={styles.Benefies}>
                <div className={styles.ContainerBenefies}>
                    <Number number="1" />
                    <div className={styles.textNumber}>
                        <SecundaryTextPurple text="Actionable insights" />
                        <TextPurple text="Optimize your products, improve customer satisfaction and stay ahead of the competition with our product data analytics."/>
                    </div>
                </div>
                <div className={styles.ContainerBenefies}>
                    <Number number="2" />
                    <div className={styles.textNumber}>
                        <SecundaryTextPurple text="Data-driven decision" />
                        <TextPurple text="Make data-driven decisions with our product data analytics. Our AI-generated reports help you unlock insights hidden in your product data."/>
                    </div>
                </div>
                <div className={styles.ContainerBenefies}>
                    <Number number="3" />
                    <div className={styles.textNumber}>
                        <SecundaryTextPurple text="Always affordable" />
                        <TextPurple text="Always affordable pricing that scales with your business. Get top-quality product data analytics services without hidden costs or unexpected fees."/>
                    </div>
                </div>
            </div>
        </div>
    )
}
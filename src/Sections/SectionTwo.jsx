import Number from "../components/Number/Number";
import SecundaryTextPurple from "../components/Texts/SecundaryTextPurple";
import TextPurple from "../components/Texts/TextPurple";

export default function SectionTwo() {
    return (
        <section className="container d-flex justify-content-center text-center mt-5 p-5 gap-5">
            <div className="d-flex flex-column gap-4">
                <Number number="1" />
                <SecundaryTextPurple text="Actionable insights" />
                <TextPurple text="Optimize your products, improve customer satisfaction and stay ahead of the competition with our product data analytics."/>
            </div>
            <div className="d-flex flex-column gap-4">
                <Number number="2" />
                <SecundaryTextPurple text="Data-driven decision" />
                <TextPurple text="Make data-driven decisions with our product data analytics. Our AI-generated reports help you unlock insights hidden in your product data."/>
            </div>
            <div className="d-flex flex-column gap-4">
                <Number number="3" />
                <SecundaryTextPurple text="Always affordable" />
                <TextPurple text="Always affordable pricing that scales with your business. Get top-quality product data analytics services without hidden costs or unexpected fees."/>
            </div>
        </section>
    )
}
import Logo from "../../assets/images/logo-light.svg"
import TextNav from "../Texts/TextNav"

export default function Header() {
    return (
        <header className="container p-5 d-flex justify-content-between">
            <img src={Logo} alt="Logo do Workit"/>
            <TextNav text="Apply for access" />
        </header>
    )
}
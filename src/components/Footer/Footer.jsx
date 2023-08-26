import Logo from "../../assets/images/logo-dark.svg"
import Facebook from "../../assets/images/icon-facebook.svg"
import Instagram from "../../assets/images/icon-instagram.svg"
import Twitter from "../../assets/images/icon-twitter.svg"

export default function Footer() {
    return (
        <div className="container text-center mt-5">
            <img src={Logo} alt="Logotipo do Workit" className="" />
            <div className="icons d-flex justify-content-center gap-3 mt-5">
                <img src={Facebook} alt="Rede Social Facebook" className="icon" />
                <img src={Twitter} alt="Rede Social Twitter" className="icon" />
                <img src={Instagram} alt="Rede Social Instagram" className="icon" />
            </div>
        </div>
    )
}
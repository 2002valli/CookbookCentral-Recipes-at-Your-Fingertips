import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebook, faTwitter, faInstagram } from "@fortawesome/free-brands-svg-icons"
function btn1_fun(){
    window.location.href="https://www.facebook.com/login.php/"

}
function btn2_fun(){
    window.location.href="https://twitter.com/home"

}function btn3_fun(){
    window.location.href="https://www.instagram.com/?hl=en"

}

export default function ChiefCard({chief}) {
    return (
        <div className="chief-card">
            <img src={chief.img} alt="" />
            <div className="chief-card-info">
                <h3 className="chief-card-name">{chief.name}</h3>
                <p className="chief-recipe-count">Recipes: <b>{chief.recipesCount}</b></p>
                <p className="chief-cuisine">Cuisine: <b>{chief.cuisine}</b></p>
                <p className="cheif-icons">
                    <FontAwesomeIcon icon={faFacebook} onClick={btn1_fun}/>
                    <FontAwesomeIcon icon={faTwitter}  onClick={btn2_fun}/>
                    <FontAwesomeIcon icon={faInstagram}  onClick={btn3_fun}/>
                </p>
            </div>
        </div>
    )
}

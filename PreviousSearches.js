import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSearch } from "@fortawesome/free-solid-svg-icons"


// const App_Id= "5ce87b2e"
// const App_Key= "a50c40f6838892948e0ab96d5f78de9f"
// const navigate = useNavigate()
function btn_func(){

    const myElement = document.getElementById("search").value;
    // window.location.href = `https://www.google.com/search?q=${myElement}`;
    window.location.href = `https://www.food.com/search/${myElement}`;
}

export default function PreviousSearches(){
    const searches = ['pizza', 'burger', 'cookies', 'juice', 'biriyani', 'salad', 'ice cream', 'lasagna', 'pudding', 'soup'] 

    return (
        <div className="previous-searches section">
            <h2>Recent Searches</h2>
            <div className="previous-searches-container">
                { searches.map((search, index) => (<div key={index} style={{animationDelay: index * .1 + "s"}} className="search-item">
                    {search}
                </div>)) }
            </div>
            <div className="search-box">
                <input type="text" id="search" placeholder="Search ..." />
                <button className="btn" onClick= {btn_func}>
                    <FontAwesomeIcon icon={faSearch} />
                </button>
            </div>
        </div>
    )
}

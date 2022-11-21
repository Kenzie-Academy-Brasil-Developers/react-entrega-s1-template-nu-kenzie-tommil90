import './style.css'
import NuKenzie__black from "../../assets/NuKenzie__black.svg"


export const Header = ({ setIsLoggedIn }) => {

    return(

        <header className="header">
            <div>
                <img src={NuKenzie__black} alt="NuKenzie logo" className='logo'/>
                <button onClick={() => setIsLoggedIn(false)}>inicio</button>
            </div>
        </header>
    )

}
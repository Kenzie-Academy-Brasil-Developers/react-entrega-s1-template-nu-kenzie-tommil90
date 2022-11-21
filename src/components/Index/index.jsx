// import {NuKenzie, indexIMG} from "../../assets"
import NuKenzie__black from "../../assets/NuKenzie__black.svg"
import indexIMG from "../../assets/indexIMG.svg"

import './style.css'


export const Index = ({ setIsLoggedIn }) => {

    return (

        
        <main className="mainIndex">

            <div>
                <img src={NuKenzie__black} alt="logo Nu Kenzie" className="logo"/>
                <h1>Centralize o controle das suas finanças</h1>
                <p>de forma rápida e segura</p>
                <button onClick={() => setIsLoggedIn(true)}>Iniciar</button>
            </div>
            <img src={indexIMG} alt="indexIMG" />
        </main>
    )
}
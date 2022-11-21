import { useState } from "react"
import { Form } from "../Form"
import { Header } from "../Header"
import { List } from "../List"
import { TotalMoney } from "../TotalMoney"
import './style.css'

export const HomePage = ({ setIsLoggedIn }) => {

    const [listTransactions, setListTransactions] = useState([
        { description: "Salário recebido", type: "entrada", value: 2500 },
        { description: "Conta de luz", type: "saída", value: 150 }
    ])
    

    return (

        <>  
            <Header setIsLoggedIn={ setIsLoggedIn } />
            <main className="mainHomePage">
                <div>

                    <Form listTransactions={listTransactions} setListTransactions={setListTransactions}/>

                    <TotalMoney listTransactions={listTransactions}/>

                </div>
                <div>

                    
                    <List listTransactions={listTransactions} setListTransactions={setListTransactions} />



                </div>
            </main>
        </>

        
    )
}
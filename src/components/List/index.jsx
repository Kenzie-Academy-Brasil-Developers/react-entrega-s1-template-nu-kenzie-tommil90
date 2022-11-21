import './style.css'
import { useState } from "react"
import { Card } from "../Card"

export const List = ({listTransactions, setListTransactions}) => {

    const [list, setList] = useState(listTransactions)

    const [filter, setFilter] =  useState("Todos")

    const filteredEntries = listTransactions.filter(e => filter === "Todos" ? true : e.type === filter)

    return (

        <section className='listValues'>
                    <header>
                        
                        <div>
                            <h3>Resumo Financiero</h3>
                        </div>
                        <div className='buttonsList'>
                            <button onClick={() => setFilter("Todos")}>Todos</button>
                            <button onClick={() => setFilter("entrada")}>Entradas</button>
                            <button onClick={() => setFilter("saída")}>Despesas</button>
                        </div>
                    </header>
                    <ul>
                        {
                             filteredEntries.map((e, index) => <Card description={e.description} type={e.type} value={e.value} key={index}  listTransactions={listTransactions} setListTransactions={setListTransactions} setList={setList}/>)
                        }
                    </ul>
        </section>
    )
}

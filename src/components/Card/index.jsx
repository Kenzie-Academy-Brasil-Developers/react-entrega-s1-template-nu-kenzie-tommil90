import './style.css'

import { FaTrash } from "react-icons/fa"
import { useState } from 'react'


export const Card = ({description, value, type, listTransactions, setListTransactions, setList}) => {

    const [typeEntry, setTypeEntry] = useState(type)

    const handleLists = () => {

        setListTransactions(listTransactions.filter(e => e.description !== description))
    }

    return  (    
    

        
                <li className='li borderEntry'>
                    <div>
                        <h3>{description}</h3>
                        <div>
                            <p>${value}</p>
                            <button onClick={handleLists}><FaTrash/></button>
                        </div>
                    </div>
                    <small>{type}</small>
                </li>
         
    )
}

// {
//     onClick={() => setListTransactions(listTransactions.filter(e => e.description !== description))}
// }


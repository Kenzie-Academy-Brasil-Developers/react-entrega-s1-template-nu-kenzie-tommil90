import './style.css'
import { useState } from "react"

export const Form = ({ listTransactions ,setListTransactions }) => {

    const [description, setDescription] = useState("")
    const [value, setValue] = useState("")
    const [type, setType] = useState("")
    
    function handleSubmit(event){
        
        event.preventDefault()

        const transaction = {
            description,
            value,
            type
        }

        setListTransactions([...listTransactions, transaction])

                
    }
    
    return (

        <form onSubmit={handleSubmit} className="form" >
            <div className='firstDiv'>
            <label htmlFor="description">Descrição</label>
            <input type="text" name="description" id="description"placeholder="Digite aquí sua Descrição" value={description}  required 
            onChange={event => setDescription(event.target.value)}/>
            <small>Ex. compra de ...</small>
            </div>
            <div className="div50" >
                <label htmlFor="value">Valor</label>
                <div className='inputMoney'>
                    <input type="number" name="value" id="value" placeholder="1" defaultValue={value} required onChange={event => setValue(+event.target.value)}/>
                    <span>R$</span>
                </div>
            </div>
            <div className='div50'>
                <label htmlFor="valueType">Tipo de Valor</label>
                <select name="type" id="valueType" value={type} required onChange={event => setType(event.target.value)}>
                    <option value=""></option>
                    <option value="entrada">Entrada</option>
                    <option value="saída">Saída</option>
                </select>
            </div>
            <button type="submit">Inserir Valor</button>
        </form>
    )

}
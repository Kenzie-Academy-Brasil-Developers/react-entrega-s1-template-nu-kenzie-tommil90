
import './style.css'

export const TotalMoney = ({listTransactions}) => {
        const total = listTransactions.reduce((ac, cv) => {
            return cv.type === "entrada" ? 
            ac + cv.value :
            ac - cv.value

        }, 0)


        
        return (

            <section className='totalMoney'>
                
                <div>
                    <strong>Valor Total</strong>
                    <p>$ {total}</p>
                </div>
                <p>O valor se refere ao saldo</p>
            </section>
        )
}




/*

   const total  = listransactions.reduce((valorAnterior, valorAtual) => {
        return valorAtual.price + valorAnterior;
    }, 0)

    console.log(total)



*/
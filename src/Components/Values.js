const Values = ({ValorTotal, ValorPeriodo}) => {

    return (
    <tr>
        <th style={{backgroundColor: 'red'}}>Unico Erro {"->"} </th>
        <th>Saldo Total: R$  {parseFloat(ValorTotal.toFixed(2))}</th>
        <th>Saldo no Periodo : R$ {parseFloat(ValorPeriodo.toFixed(2))}</th>
        <th style={{backgroundColor: 'red'}}> {"<"}- Update está um State atrasado   </th>
    </tr>
    )
}

export default Values
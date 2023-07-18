import Date from "./Components/Date";
import Pesquisa from "./Components/Pesquisa";
import Api from "./Api";
import React, { useEffect, useState } from "react";
import Values from "./Components/Values";

function App() {
  const [transferencias, setTransferencia] = useState([]);
  const [usuarios,setUsuarios] = useState([]);
  const [id,setid] = useState('');
  const [SaldoTotal,setSaldoTotal] = useState(0);
  const [SaldoPeriodo,setSaldoPeriodo] = useState(0);

  //Transferencia dos Usuarios
  const fetchUserData = (id , args ) => {
    const request = Api(id , args);

    fetch(request)
      .then(response => {
        return response.json();
      })
      .then(data => {
        setTransferencia(data);
      })
      .catch(e =>{
        console.log(e);
      })
  };

  //Contas dos Usuarios
  const fetchAllUsers = () =>{
    fetch("http://localhost:8080/Contas")
    .then(response => {
      return response.json();
    })
    .then(data => {
      setUsuarios(data)
    })
    .catch(e =>{
      console.log(e);
    })
  };

  const changeUsuario = (idUsuario) =>{
    setid(idUsuario);
    fetchUserData(idUsuario);
    calcSaldo();
  };

  const calcSaldo = () =>{
    let Valor = 0;
    transferencias.forEach(transferencia => Valor += transferencia.valor);
    setSaldoTotal(Valor);
    setSaldoPeriodo(Valor);
  };

  const calcSaldoPeriodo = () => {
    let Valor = 0;
    transferencias.forEach(transferencia => Valor += transferencia.valor);
    setSaldoPeriodo(Valor);
  };

  useEffect(() => {
    fetchAllUsers()
    fetchUserData()
  }, []);
  
  const onPesquisa = (argumentos) => {
    fetchUserData(id,argumentos);
    calcSaldoPeriodo();
  };

  
  return (
    <div className="container">
      {usuarios.map((usuario)=>{
        return (
          <button className='btn' key={usuario.id_conta} onClick={() =>{changeUsuario(usuario.id_conta)}}>{usuario.nome_responsavel} </button>
        )
      })}
      <Pesquisa onPesquisa={onPesquisa} />
      <div>
          <table>
            <tbody>
              <Values ValorTotal={SaldoTotal} ValorPeriodo={SaldoPeriodo}/>
              <tr>
                  <th>Dados</th>
                  <th>Valencia</th>
                  <th>Tipo</th>
                  <th>Nome do operador transicionado</th>
              </tr>
              {transferencias.map((transferencia) => {
                  return (
                      <tr key={transferencia.id}>
                          <Date dataTransferencia={transferencia.dataTransferencia}></Date>
                          <td>R$:{transferencia.valor.toFixed(2)}</td>
                          <td>{transferencia.tipo}</td>
                          <td>{transferencia.nomeOperadorTransacao}</td>
                      </tr>
                  )
              })}
            </tbody>
          </table>
        </div>
      </div>
  );
}



export default App;

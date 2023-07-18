import { useState } from "react"
const Pesquisa = ({onPesquisa}) => {

    const[diaIni,setDiaIni] = useState('');
    const[diafim,setDiaFim] = useState('');
    const[nomeOperador,setNomeOperador] = useState('');

    const onClear= () =>{
        setDiaIni('');
        setDiaFim('');
        setNomeOperador('');
    };

    const onSubmit = (e) =>{
        e.preventDefault();
        onPesquisa({diaIni,diafim,nomeOperador})
        onClear();
    };

    return (
        <form onSubmit={onSubmit}>
            <div className="form">
                <div className="form-control">
                    <label>Data de Inicio</label>
                    <input type="date" value={diaIni} onChange={(e)=>setDiaIni(e.target.value)}></input>
                </div>
                <div className="form-control">
                    <label>Data de Fim</label>
                    <input type="date" value={diafim} onChange={(e)=>setDiaFim(e.target.value)}></input>
                </div>
                <div className="form-control">
                    <label>Nome do Operador Transacional</label>
                    <input type="text" value={nomeOperador} onChange={(e)=>setNomeOperador(e.target.value)}></input>
                </div>
            </div>
            <input type="submit" value="Pesquisar" className="btn"></input>
        </form>
    )
}

export default Pesquisa
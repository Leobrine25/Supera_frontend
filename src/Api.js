
function Api(idUsuario,args) {
    let link = "http://localhost:8080/Transferencias"
    if(idUsuario){
        link = `http://localhost:8080/Transferencias/${idUsuario}`;
    }
    if(args){
        if(!(args.diaIni === '') && !(args.diafim === '') && !(args.nomeOperador === '')){
            link = `http://localhost:8080/Transferencias/${idUsuario}/${args.diaIni}/${args.diafim}/${args.nomeOperador}`
        }
        else if(!(args.diaIni === '') && !(args.diaIni === '')){
            link = `http://localhost:8080/Transferencias/${idUsuario}/${args.diaIni}/${args.diafim}`
        }
        else if(!(args.nomeOperador === '')){
            link = `http://localhost:8080/Transferencias/${idUsuario}/${args.nomeOperador}`
        }
    }

    return (
        link
    )
}

export default Api
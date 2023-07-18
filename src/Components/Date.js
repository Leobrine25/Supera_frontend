const Date = ({dataTransferencia}) => {

    function formatDate(dataTransferencia) {
        var data = dataTransferencia.split('T');
        var dias = data[0].split('-');
        return [dias[2],dias[1],dias[0]].join('/');
      }

    return (
        <td>{formatDate(dataTransferencia)}</td>
    )
}

export default Date
function Andamento() {
    return(
        <div className="bAndamento flex">
            <div className="andamentoItem">
                <h6>Diciplinas</h6>
                <div className="flex-between">
                    <p>Diciplinas obrigatórias concluídas</p>
                    <p>85%</p>
                </div>
                <div className="progressBar">
                    <div className="progress">.</div>
                </div>
                <p className="aFooter">Você já concluiu 85% das disciplinas obrigatórias.</p>
            </div>
            
            <div className="andamentoItem">
                <h6>ATIVIDADES COMPLEMENTARES</h6>
                <div className="flex-between">
                    <p>Carga horária concluída</p>
                    <p>20%</p>
                </div>
                <div className="progressBar">
                    <div className="progress2">.</div>
                </div>
                <div className="flex-around">
                    <p className="aFooter">Carga horária cumprida - 40h</p>
                    <p className="aFooter">Carga horária faltante - 160h</p>
                </div>
            </div>
        </div>
    )
    
}

export default Andamento;
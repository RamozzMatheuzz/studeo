import './sass/style-DMatriculadas.css'

function DiciplinasMatriculadas (){
    return(
        <div className="cards-wrapper flex">
            <div className="card">
                <h5>Trabalho de Conclusão de curso I</h5>
                <div className="atividades flex-between">
                    <p>Atividades Pendentes</p>
                    <p>4</p>
                </div>
                <a href="/none">Material de Apoio</a>
                <a className="go-diciplina" href="/diciplina">IR PARA DICIPLINA</a>
            </div>

            <div className="card">
                <h5>ESTUDO CONTEMPORÂNEO E TRANSVERSAL: GESTÃO DE INDICADORES</h5>
                <div className="atividades flex-between">
                    <p>Atividades Pendentes</p>
                    <p>2</p>
                </div>
                <a href="/none">Material de Apoio</a>
                <a className="go-diciplina" href="/diciplina">IR PARA DICIPLINA</a>
            </div>

            <div className="card">
                <h5>TÓPICOS ESPECIAIS EM ENGENHARIA DE SOFTWARE II</h5>
                <div className="atividades flex-between">
                    <p>Atividades Pendentes</p>
                    <p>2</p>
                </div>
                <a href="/none">Material de Apoio</a>
                <a className="go-diciplina" href="/diciplina">IR PARA DICIPLINA</a>
            </div>
            
        </div>
    )
}

export default DiciplinasMatriculadas;
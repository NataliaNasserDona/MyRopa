import "./Loading.css"

const Loading = () => {
    return (
        <div>
            <div className="spinner-border spinner" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
            <div className="cargando"><b>Cargando...</b></div>
        </div>
    )
}

export default Loading
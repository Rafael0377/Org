import "./ListaOpciones.css"
const ListaOpciones = (props) => {

   // metodo map -> arreglo.map((equipo, index) => {
   //  return <option></option>
   //})
   
   

   // const equipos = [
   //     "Programación",
   //     "Front End",
   //     "Data Science",
   //     "Devops",
   //     "UX y Diseño",
   //     "Móvil",
   //     "Innovación y Gestión"
   // ]

    const manejarCambio = (e) => {
       // console.log("cambio", e.target.value)
        props.actualizarEquipo(e.target.value)
    }
    return <div className="lista-opciones">
        <label>Equipos</label>
        <select value={props.valor} onChange={manejarCambio}>
            <option value="" disabled defaultValue="" hidden>Selecionar Equipo</option>
            {props.equipos.map( (equipo,index) => <option key={index}>{equipo}</option>
           ) }           
        </select>
    </div>
}

export default ListaOpciones
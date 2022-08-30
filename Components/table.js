import styles from '../styles/Table.module.css'
import {getData} from '../pages/api/database'
import {ChangeTeamName} from '../pages/api/database'
import {useRef} from "react"


let tableBody;

export async function Update(){

    const data = await getData()

    for(var i=0;i<4;i++){
        tableBody.current.rows[i+1].cells[0].innerHTML=i+1
        tableBody.current.rows[i+1].cells[1].innerHTML=data[i].name_team
        tableBody.current.rows[i+1].cells[2].innerHTML=data[i].wins
        tableBody.current.rows[i+1].cells[3].innerHTML=data[i].draws
        tableBody.current.rows[i+1].cells[4].innerHTML=data[i].defeats
        tableBody.current.rows[i+1].cells[5].innerHTML=data[i].goals_scored
        tableBody.current.rows[i+1].cells[6].innerHTML=data[i].goals_against
        tableBody.current.rows[i+1].cells[7].innerHTML=data[i].goals_scored-data[i].goals_against
        tableBody.current.rows[i+1].cells[8].innerHTML=data[i].points
    }
}


export default function Table(){    
    tableBody = useRef(null);

    
    var cells = []

    for(var i=0;i<9;i++){
        cells.push(<th key={i}>--</th>);
    }
    
    return(
        <div className={styles.content}> 

            <h1>Tabla de Posiciones</h1>
            <table ref={tableBody}>
                <thead>
                    <tr>
                        <th>Posición</th>
                        <th>Equipo</th>
                        <th>Victorias</th>
                        <th>Empates</th>
                        <th>Derrotas</th>                        
                        <th>Goles a Favor</th>
                        <th>Goles en Contra</th>
                        <th>Diferencia de Goles</th>
                        <th>Puntos</th>
                    </tr>
                </thead>
                <tbody >

                    <tr>
                        {cells.map(function(i, idx){
                            return(i)
                        })}
                    </tr>
                    <tr>
                        {cells.map(function(i, idx){
                            return(i)
                        })}
                    </tr>
                    <tr>
                        {cells.map(function(i, idx){
                            return(i)
                        })}
                    </tr>
                    <tr>
                        {cells.map(function(i, idx){
                            return(i)
                        })}
                    </tr>
                </tbody>
            </table>
            
        </div>
    )
}

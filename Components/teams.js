import styles from '../styles/Teams.module.css'
import {Match} from '../pages/api/database'
import { Update } from './table'

import Router from 'next/router'
export default function Teams(){

    const fields = async (event) =>{
        await Match(event.currentTarget.id, event.target.id, event.target.value)
        await Update();
    }

    
    const clear = async (event) => {
        Router.reload(window.location.pathname);
    }
    
    return(
        <div className={styles.grid}>
            
            <h1>Partidos del Cuadrangular</h1>
            
            <div className={styles.content}>
                <button onClick={clear}>Limpiar Datos</button>
                <div className={styles.card}>
                    <h2>Ronda 1</h2>
                    <h2>Marcador Partido 1</h2>
                    <form onChange={fields} id="201">
                        <label>Equipo A</label>
                        <input type="number" id='101-1' min={0}/>
                        <label>Vs Equipo B</label>
                        <input type="number" id='102-2' min={0}/>
                    </form>
                    
                    <h2>Marcador Partido 2</h2>
                    <form onChange={fields} id="202">
                        <label>Equipo C</label>
                        <input type="number" id='103-1' min={0}/>
                        <label>Vs Equipo D</label>
                        <input type="number" id='104-2' min={0}/>
                    </form>
                </div>
                <div className={styles.card}>
                    <h2>Ronda 2</h2>
                    <h2>Marcador Partido 1</h2>
                    <form onChange={fields} id="203">
                        <label>Equipo A</label>
                        <input type="number" id='101-1' min={0}/>
                        <label>Vs Equipo C</label>
                        <input type="number" id='103-2' min={0}/>
                    </form>
                    <h2>Marcador Partido 2</h2>
                    <form onChange={fields} id="204">
                        <label>Equipo B</label>
                        <input type="number" id='102-1' min={0}/>
                        <label>Vs Equipo D</label>
                        <input type="number" id='104-2' min={0}/>
                    </form>
                </div>
                <div className={styles.card}>
                    <h2>Ronda 3</h2>
                    <h2>Marcador Partido 1</h2>
                    <form onChange={fields} id="205">
                        <label>Equipo A</label>
                        <input type="number" id='101-1' min={0}/>
                        <label>Vs Equipo D</label>
                        <input type="number" id='104-2' min={0}/>
                    </form>
                    <h2>Marcador Partido 2</h2>
                    <form onChange={fields} id="206">
                        <label>Equipo B</label>
                        <input type="number" id='102-1' min={0}/>
                        <label>Vs Equipo C</label>
                        <input type="number" id='103-2' min={0}/>
                    </form>
                </div>
                <div className={styles.card}>
                    <h2>Ronda 4</h2>
                    <h2>Marcador Partido 1</h2>
                    <form onChange={fields} id="207">
                        <label>Equipo B</label>
                        <input type="number" id='102-1' min={0}/>
                        <label>Vs Equipo A</label>
                        <input type="number" id='101-2' min={0}/>
                    </form>
                    <h2>Marcador Partido 2</h2>
                    <form onChange={fields} id="208">
                        <label>Equipo D</label>
                        <input type="number" id='104-1' min={0}/>
                        <label>Vs Equipo C</label>
                        <input type="number" id='103-2' min={0}/>
                    </form>
                </div>
                <div className={styles.card}>
                    <h2>Ronda 5</h2>
                    <h2>Marcador Partido 1</h2>
                    <form onChange={fields} id="209">
                        <label>Equipo C</label>
                        <input type="number" id='103-1' min={0}/>
                        <label>Vs Equipo A</label>
                        <input type="number" id='101-2' min={0}/>
                    </form>
                    <h2>Marcador Partido 2</h2>
                    <form onChange={fields} id="210">
                        <label>Equipo D</label>
                        <input type="number" id='104-1' min={0}/>
                        <label>Vs Equipo B</label>
                        <input type="number" id='102-2' min={0}/>
                    </form>
                </div>
                <div className={styles.card}>
                    <h2>Ronda 6</h2>
                    <h2>marcador Partido 1</h2>
                    <form onChange={fields} id="211">
                        <label>Equipo D</label>
                        <input type="number" id='104-1' min={0}/>
                        <label>Vs Equipo A</label>
                        <input type="number" id='101-2' min={0}/>
                    </form>
                    <h2>Marcador Partido 2</h2>
                    <form onChange={fields} id="212">
                        <label>Equipo C</label>
                        <input type="number" id='103-1' min={0}/>
                        <label>Vs Equipo B</label>
                        <input type="number" id='102-2' min={0}/>
                    </form>
                </div>
            </div>            
        </div>
    )
    
}
import { useState } from 'react'
import NavContent from './NavContent'
import classes from './OutrosTabs.module.css'
// import OutrosContent from './OutrosContent'

import Counter from './Counter'
import MirrorText from './MirrorText'
import ToDoList from './ToDoList'


function OutrosTabs(){
    const [contentIndex, setContentIndex] = useState(0)

    const OutrosContent=[<Counter />,<MirrorText />,<ToDoList />]
    
    return(
        <div className={classes.main}>
            <header>
                <div>
                    <img src="../src/assets/react.svg" alt="" />
                </div>
                <div>
                     <h1>Mais</h1>
                     <p>Exercícios desenvolvidos durante a aula 35</p>
                </div>
             </header>

            <div className={classes.btn}>
                <button onClick={()=>{setContentIndex(0)}} className={contentIndex === 0 ? classes.active : ''}>Counter</button>
                <button onClick={()=>{setContentIndex(1)}} className={contentIndex === 1 ? classes.active : ''}>Mirror Text</button>
                <button onClick={()=>{setContentIndex(2)}} className={contentIndex === 2 ? classes.active : ''}>To Do List</button>
            </div>
            <div className={classes.cnt}>
                <div>{OutrosContent[contentIndex]}</div>
            </div>
        </div>
    )

}


export default OutrosTabs
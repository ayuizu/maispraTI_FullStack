import { useState } from 'react'
import NavContent from './NavContent'
import classes from './NavTabs.module.css'


function NavTabs(){
    const [contentIndex, setContentIndex] = useState(0)

    return(
        <div className={classes.main}>
            <header>
                <div>
                    <img src="../src/assets/react.svg" alt="" />
                </div>
                <div>
                    <h1>React.js</h1>
                    <p>i.e., using the React library for rendering the UI</p>
                </div>
             </header>
            <div className={classes.btn}>
                <button onClick={()=>{setContentIndex(0)}} className={contentIndex == 0 ? classes.active : ''}>Why React?</button>
                <button onClick={()=>{setContentIndex(1)}} className={contentIndex == 1 ? classes.active : ''}>Core Features</button>
                <button onClick={()=>{setContentIndex(2)}} className={contentIndex == 2 ? classes.active : ''}>Related Resources</button>
                <button onClick={()=>{setContentIndex(3)}} className={contentIndex == 3 ? classes.active : ''}>React vs JS</button>
            </div>
            <div className={classes.cnt}>
                <div>{NavContent(contentIndex)}</div>
            </div>
        </div>
    )

}


export default NavTabs
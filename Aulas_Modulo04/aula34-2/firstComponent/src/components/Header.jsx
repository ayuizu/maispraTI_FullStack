// import "./Header.module.css"
import classes from "./Header.module.css"

function Header(){
    return(
        <header>
            <nav id="nav">
                <div className={classes.logo}>
                    <a href="#">
                    {/* <img src="../assets/react.svg" alt="" /> */}
                    <h1>Título</h1></a>
                </div>
                <div className={classes.navHrz}>
                    <ul>
                        <li><a href="#">Nav 1</a></li>
                        <li><a href="#">Nav 2</a></li>
                        <li><a href="#">Nav 3</a></li>
                        <li><a href="#">Nav 4</a></li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}

export default Header
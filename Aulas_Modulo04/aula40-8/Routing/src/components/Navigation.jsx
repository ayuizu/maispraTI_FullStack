import { Link } from 'react-router-dom'

function Navigation(){
    return(
        <nav>
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/about'>About</Link></li>
                <li><Link to='/contact'>Contact</Link></li>
                <li><Link to='/clock'>Clock</Link></li>
                <li><Link to='/timer'>Timer</Link></li>

            </ul>
        </nav>
    )
}

export default Navigation
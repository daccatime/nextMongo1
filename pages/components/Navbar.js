import Link from 'next/link';
import 'semantic-ui-css/semantic.min.css'

const Navbar = () =>(

    <nav className="Navbar">
    
    <Link href="./">
        <a className="navbar-brand"> Note app </a>
    </Link>

    <Link href="./new">
        <a className="create">New</a>
    </Link>

    

    
    </nav>
)

export default Navbar;

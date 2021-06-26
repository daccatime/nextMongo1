import Head from 'next/head';
import Navbar from './Navbar';
import 'semantic-ui-css/semantic.min.css'

const Layout=({children}) =>(
<>
<Head>
  
    </Head>
    <Navbar></Navbar>
    {children}
</>

)

export default Layout;


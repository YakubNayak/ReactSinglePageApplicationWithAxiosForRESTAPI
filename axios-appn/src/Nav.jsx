import {Link} from 'react-router-dom'
const Nav=()=>{

    return(<>
    <div>
        <Link to="/" style={{marginRight:100}}>AddConsumer</Link>
            <Link to="/update" style={{marginRight:100}}>UpdateConsumer</Link>
            <Link to="/delete" style={{marginRight:100}}>DeleteConsumer</Link>
            <Link to="/viewall" style={{marginRight:100}}>View All Consumer Details</Link>
            <Link to="/getone" style={{marginRight:100}}>View One Consumer</Link>
    </div>
    

    </>)
}
export default Nav;
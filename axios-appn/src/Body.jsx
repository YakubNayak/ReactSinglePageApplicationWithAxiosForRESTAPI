import {Routes,Route} from 'react-router-dom'
import Insert from './Insert'
import Update from './Update'
import Getall from './Getall'
import DeleteOperation from './DeleteOperation'

const Body=()=>{

    return(<>
    <div>
        <Routes>
            <Route path="/" element={<Insert />}></Route>
            <Route path="/update" element={<Update />}></Route>
            <Route path="/delete" element={<DeleteOperation />}></Route>
            <Route path="/viewall" element={<Getall />}></Route>
        </Routes>
    </div>
    
    </>)
}
export default Body;
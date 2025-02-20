import { useRef,useState } from "react";
import axios from "axios";
const GetEx2=()=>{
    const [arr,setArr]=useState([]);
    const ref1=useRef(null);
    const fetch_data=()=>{
        getData();
    }    
    const getData=async ()=>
{
        const res=await axios.get(`https://fakestoreapi.com/products/${ref1.current.value}`);

        const {data}=res;
        setArr(data);
    }
    return(
        <>
            <input type="number" ref={ref1}></input>
            <button onClick={fetch_data}>GetData</button>
            <br></br>
            {
                arr.length!=0?(<table border={1}
                    align="center"
                    cellSpacing={10}
                    cellPadding={10}>
                  <tr>
                      <th>id</th>
                      <th>title</th>
                      <th>description</th>
                      <th>category</th>
                      <th>image</th>
                      <th>rating</th>
                  </tr>
                  {
                      arr.map((element,index)=>{
                          return(
                              <tr key={index}>
                                  <td>{element.id}</td>
                                  <td>{element.title}</td>
                                  <td>{element.description}</td>
                                  <td>{element.category}</td>
                                  <td>{element.rating}</td>
                                  <td><img src={element.image}></img></td>
                              </tr>
                          )
                      })
                  }
            </table>):(<i className="fa fa-spin fa-spinner"></i>)
            }
        </>
    )
}
export default GetEx2;
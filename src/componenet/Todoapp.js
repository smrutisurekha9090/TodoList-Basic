import React ,{useState}from 'react'
import "../index.css"

function Todoapp() {
    const bioData =
        [
            {
                id:0,
                name:"smruti",
                Age:22,
                work:"developer"
            },
            {
                id:1,
                name:"sushil",
                Age:21,
                work:" software developer"
            },
            {
                id:2,
                name:"saxey",
                Age:24,
                work:"testing"
            },
        ]
    
        const [myArray,setmyArray]=useState(bioData)
        const clearData =()=>{
            setmyArray([])
        }

        const removeElem=(id)=>{
            const newArray = myArray.filter((curElm)=>{
                return curElm.id !== id
            })
            setmyArray(newArray)
        }

  return (
    <>
        <div id="myDIV" className="header"> 
            <h2 style={{ margin: '5px' }}>My To Do List</h2>
            {
                myArray.map((curElm)=>{
                    return(
                        <h1 className='smruti'>my name is {curElm.name} & Age is {curElm.Age}
                            <button  className='addBtn'  onClick={()=> removeElem(curElm.id)}>remove</button>
                        
                        </h1>
                    )
                })
            }
        </div> 

        <br/>
        
        <button className='addBt' onClick={clearData}>clear</button>
    </>
  )
}

export default Todoapp










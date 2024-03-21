import React from "react"

export default function useRenderDisplay(){

    const [elementArr,setElementArr] = React.useState({})
    const[count,setCount] = React.useState(0)
    const display = Object.entries(elementArr).map((item)=>item[1])

    function addDisplay(name, component){
        setElementArr((prev)=>{
            return{
                ...prev,
                [name]:component
            }
        })
        setCount((prev)=>prev+1)
    }

    function removeDisplay(name){
        setElementArr((prev)=>{
            delete prev[name]
            return{
                ...prev
            }
        })
    }

    function setExistingInfo(newDisplay){
        setElementArr(Object.fromEntries(newDisplay))
        setCount(newDisplay.length)
    }

    return [count,addDisplay,removeDisplay,display,setExistingInfo]
}
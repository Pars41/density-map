import { useState } from "react"
import "./cell.css"
const Cell = () => {
  const [density, setDensity] = useState(0)
  const handleInc =()=>{
    setDensity(density+0.02)
  }
  return (
    <div className="cell" style={{backgroundColor:`rgba(255,0,0,${density})`}}
     onMouseOver={handleInc}
     ></div>
  )
}

export default Cell
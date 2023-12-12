import { useContext } from "react"
import { data } from "./Parent2"

const Children3 = () => {
    const {name, gender} = useContext(data);
  return (
    <div>
        <h2>My name is {name} and gender is {gender} </h2>
    </div>
  )
}

export default Children3
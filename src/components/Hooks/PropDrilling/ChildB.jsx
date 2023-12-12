import ChildC from "./ChildC"

// eslint-disable-next-line react/prop-types
const ChildB = ({name}) => {
  return (
    <div>
        <ChildC name={name}/>
    </div>
  )
}

export default ChildB
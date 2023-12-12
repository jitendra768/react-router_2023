import ChildB from "./ChildB"

// eslint-disable-next-line react/prop-types
const ChildA = ({name}) => {
  return (
    <div>
        <ChildB name={name}/>
    </div>
  )
}

export default ChildA
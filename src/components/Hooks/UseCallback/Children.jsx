import { memo } from "react";

// eslint-disable-next-line react/prop-types
const Children = ({learning,count}) => {
    console.log("Child components")
  return (
    <div>Children</div>
  )
}

export default memo(Children);
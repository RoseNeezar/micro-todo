import * as React from 'react'
import { useMount } from 'todo/Todo'

const Experience = () => {
  const ref = React.useRef<any>(null)
  // console.log('exp')
  React.useEffect(() => {
    if (!ref.current) return
    // console.log(ref.current, useMount)
    useMount(ref.current, null)
  }, [])

  return <div ref={ref} />
}

export default Experience

import * as React from 'react'
import { useMount } from 'todo/Todo'
import { useAuthStore } from '../store/useAuth.store'

const TodoApp = () => {
  const ref = React.useRef<any>(null)
  // console.log('exp')
  React.useEffect(() => {
    if (!ref.current) return
    // console.log(ref.current, useMount)
    useMount(ref.current, useAuthStore)
  }, [])

  return <div ref={ref} />
}

export default TodoApp

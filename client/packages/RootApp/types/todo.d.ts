/// <reference types="react" />

declare module 'todo/Button' {
  const Button: React.ComponentType<{ value?: string; swap?: () => void }>

  export default Button
}

declare module 'todo/Todo' {
  const useMount: (el: ReactDOM.Container, parentNavigation: any) => void

  export { useMount }
}

declare module 'app1/CounterAppOne' {
  const useMount: (el: ReactDOM.Container) => void

  export { useMount }
}

import React, { FC } from 'react'

const Todo: FC<{ authStore: any }> = ({ authStore }) => {
  return (
    <div tw="flex h-screen items-center justify-center">
      <h1 tw="w-52 break-all">
        {authStore && authStore().token ? authStore().token : 'standalone app'}
      </h1>
    </div>
  )
}

export default Todo

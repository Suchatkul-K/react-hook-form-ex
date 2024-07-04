import { useState } from 'react'
import { useForm } from 'react-hook-form'

function App() {
  const {register, handleSubmit} = useForm()

  return (
     <h1 className="text-3xl font-bold">
      Hello world!
    </h1>
  )
}

export default App

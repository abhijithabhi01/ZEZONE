import React, { createContext, useState } from 'react'







export const addPostResponseContext = createContext()
export const isAuthTokenContext = createContext()

function ContextShare({children}) {
    const [addPostResponse,setAddPostResponse] = useState({})

    const [editPostResponse,setEditPostResponse] = useState({})

    const [isAuthToken,setIsAuthToken]= useState(true)


  return (
    <>

<addPostResponseContext.Provider value={{addPostResponse,setAddPostResponse}}>

          {children}
       
</addPostResponseContext.Provider>



    </>
  )
}

export default ContextShare
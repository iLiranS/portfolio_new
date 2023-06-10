import AddForm from '@/components/forms/AddForm'
import React from 'react'
//TODO: admin page only needs an option to add pages. 
// so need to add ui first with fields to fill .
// create API endpoint to addPost which requires admin Key.
// api returns either 200 / 500 / 401 (bad key)
// show indicator in front.
const page = () => {
 return(
  <AddForm/>
 )
}

export default page
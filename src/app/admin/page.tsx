import AddForm from '@/components/forms/AddForm'
import React from 'react'
import { Metadata } from 'next'


export const metadata:Metadata={
       title:'LiranS - Admin',
}



const page = () => {

return(
<AddForm/>
)
}

export default page
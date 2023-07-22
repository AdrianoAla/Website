import React from 'react';
import Contact from './Contact'
import Newsletter from './Newsletter'

export default function Form(props)  {
  const type = props.block.params["Form Type"].toLowerCase()
  
  if (type == "contact") return Contact(props);
  return Newsletter(props)
} 
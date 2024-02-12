import React from 'react'
import A from './A'
import B from './B'

export default function P() {
  return (
    <div>
        <A buttonText = {'click on me to inc by 10'} />
        <B buttonText = {'click on me to inc by 20'}/>
    </div>
  )
}

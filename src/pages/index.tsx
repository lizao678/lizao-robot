import React, { useEffect, useState } from 'react'
import { Input } from 'antd'
import styles from './style.scss'

const { Search } = Input
export default function HomePage () {

  const [answer, setAnswer] = useState('')
  const onSearch = (value: string) => {
    setAnswer(value)
    console.log('e', value)
  }

  useEffect(() => {
    
  },[])

  return (
    <div>
      <h2 className={styles.title}>Yay! Welcome to umi!</h2>
      <Search placeholder="input search text" allowClear onSearch={onSearch} style={{ width: 200 }} />
        <div>
            {answer}
        </div>
    </div>
  )
}

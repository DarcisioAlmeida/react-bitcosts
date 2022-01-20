import { useState, useEffect } from 'react'

import styles from './Message.module.css'

function Message({ type, msg }) {
  const [visible, setVisible] = useState(false) // altera visiibilidade da mensagem

  useEffect(() => {
    if (!msg) {
      setVisible(false)
      return
    }

    setVisible(true)

    const timer = setTimeout(() => {
      setVisible(false)
    }, 3000) // tira mensagem depois de 3s

    return () => clearTimeout(timer)
  }, [msg])

  return (
    <>
      {visible && (
        <div className={`${styles.message} ${styles[type]}`}>{msg}</div>
      )}
    </>
  )
}

export default Message
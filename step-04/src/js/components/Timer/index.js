import React, { Component } from 'react'
import moment from 'moment'
import styles from './index.scss'

const Timer = props => {
  return (
    <div className="pall">
      <p className="font-40">
        {moment(props.seconds*1000).format("mm:ss")}
        ({props.status})
      </p>

      <button
        className={styles.btn}
        onClick={props.onReset}
      >
        重置
      </button>

      <button
        className={styles.btn}
        onClick={props.onStart}
        disabled={props==='Running'}
      >
        开始
      </button>

      <button
        className={styles.btn}
        onClick={props.onStop}
      >
        停止
      </button>
    </div>
  )
}

export default Timer
import React, {Component} from 'react'
import {Redirect, Link} from 'react-router-dom'
import styles from './styles'
import OsumAIHeader from './headers'

// メイン画面を定義したコンポーネント
export default class OsumAIMain extends Component {
  render () {
    return (
      <div>
        <OsumAIHeader title='メイン画面'/>
        <div>
        OsumAIへようこそ
        </div>
      </div>
    )
  }
}

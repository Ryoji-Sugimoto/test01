import React, {Component} from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import request from 'superagent'
import styles from './styles'
import OsumAIHeader from './headers'

// 検索結果（ライフスタイル）を定義するコンポーネント
export default class OsumAISoudanResultLifeStyle extends Component {
  constructor (props) {
    super(props)
  }
  render () {
    return (
      <div>
        <div style={}>
        	<span>入力頂いた情報から、あなたにとって最適な場所は</span>
        	<span></span>
        	<span>となりました。</span>
        </div>
        <div>
			//メリット・デメリット
        </div>
      </div>
    )
  }
}

import React, {Component} from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import request from 'superagent'
import styles from './styles'
import OsumAIHeader from './headers'

// 相談画面を定義するコンポーネント
export default class OsumAISoudan extends Component {
  constructor (props) {
    super(props)
  }
  render () {
    return (
      <div>
        <OsumAIHeader title='お住まい相談' />
        <div>
			<Tabs onSelect={this.handleSelect} selectedIndex={2}>
				<TabList>
					<Tab>検索条件</Tab>
					<Tab>ライフスタイル</Tab>
					<Tab>詳細情報</Tab>
				</TabList>
				<TabPanel>
					<h2>工事中（検索条件）</h2>
				</TabPanel>
				<TabPanel>
					<OsumAISoudanResultLifeStyle/>
				</TabPanel>
				<TabPanel>
					<h2>工事中（詳細情報）</h2>
				</TabPanel>
			</Tabs>
        </div>
      </div>
    )
  }
}

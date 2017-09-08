import React, {Component} from 'react'
import request from 'superagent'
import styles from './styles'
import OsumAIHeader from './headers'

// 相談画面を定義するコンポーネント
export default class OsumAISoudanChat extends Component {
  constructor (props) {
    super(props)
    this.state = { timelines: [] }
  }
  addAsk (ask) {
  	this.state.timelines.concat({type: 'ask', ask: ask, answer: ''})
  }
  addAnswer (answer) {
  	this.state.timelines.concat({type: 'answer', ask: '', answer: answer})
  }
  render () {
    // 
    const timelines = this.state.timelines.map(e => {
      return (
	        if(e.type === 'ask'){
				<OsumAISoudanChatAsk ask=e.ask/>
	        } else if (e.type === 'answer') {
				<OsumAISoudanChatAnswer answer=e.answer/>
	        }
        )
    })
    return (
      <div>{timelines}</div>
    )
  }
}

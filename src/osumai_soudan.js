import React, {Component} from 'react'
import request from 'superagent'
import styles from './styles'
import OsumAIHeader from './headers'
import OsumAISoudanChat from './osumai_soudan_chat'

// 相談画面を定義するコンポーネント
export default class OsumAISoudan extends Component {
  constructor (props) {
    super(props)
    this.state = { timelines: [], comment: '' }
  }
  post () {
// Watsonに尋ねて解答をもらう
//    request
//      .get('/api/add_timeline') 
//      .query({
//        userid: window.localStorage.sns_id,
//        token: window.localStorage.sns_auth_token,
//        comment: this.state.comment
//      })
//      .end((err, res) => {
//        if (err) return
//        this.setState({comment: ''})
//        //this.loadTimelines()
//      })

		// dummy Q
		this.chat.addAsk(this.state.ask)
		
		// dummy A
		this.chat.addAnswer('答えです。')

  }
  render () {
    return (
      <div>
        <OsumAIHeader title='お住まい相談' />
        <div>
          <input value={this.state.comment} size={40}
            onChange={e => this.setState({ask: e.target.value})} />
          <button onClick={e => this.post()}>送信</button>
        </div>
        <OsumAISoudanChat ref='chat'/>
      </div>
    )
  }
}

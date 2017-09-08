import React, {Component} from 'react'
import styles from './styles'

// 相談画面を定義するコンポーネント
export default class OsumAISoudanChatAnswer extends Component {
  constructor (props) {
    super(props)
  }
  render () {
    // 
    return (
      <div class="row">
      	<div class="col-xs-11">
      		<p class="balloon-left">{this.state.answer}</p>
      	</div>
      </div>
    )
  }
}

import React, {Component} from 'react'
import {Redirect, Link} from 'react-router-dom'
import styles from './styles'

const appLogin = (state) => (
    <div style={styles.login}>
    <ul>
        <li style={styles.logininline}>
            <ul style={styles.login_ul}>
                <li><ul style={styles.login_ul}><li style={styles.logininline}>ログインID</li><li style={styles.logininline}><input style={styles.logininput} value={state.userid}
                    onChange={e => changed('userid', e)} /></li></ul></li>
                <li><ul style={styles.login_ul}><li style={styles.logininline}>パスワード</li><li style={styles.logininline}><input style={styles.logininput} type='password' value={state.passwd}
                    onChange={e => changed('passwd', e)} /></li></ul></li>
            </ul>
        </li>
        <li style={styles.logininline}>
                    <button onClick={e => this.api('login')}>ログイン</button>
        </li>
        <li style={styles.header_useradd}>ユーザー新規登録</li>
        <li style={styles.header_registinfos}>基礎情報入力</li>
    </ul>
    </div>
)

const appLogout = (state) => (
    <div style={styles.login}>
    <ul>
        <li style={styles.logininline}>
            <ul style={styles.login_ul}>
                <li>
                    <ul style={styles.login_ul}>
                        <li style={styles.logininline}>ログインID</li>
                        <li style={styles.logininline}><span style={styles.logininput} />{state.userid}</li>
                    </ul>
                </li>
                <li>
                    <ul style={styles.login_ul}>
                        <li style={styles.logininline}>パスワード</li>
                        <li style={styles.logininline}><span style={styles.logininput} />{state.passwd}</li>
                    </ul>
                </li>
            </ul>
        </li>
        <li style={styles.logininline}>
                    <button onClick={e => this.api('logout')}>ログアウト</button>
        </li>
        <li style={styles.header_useradd}>ユーザー新規登録</li>
        <li style={styles.header_registinfos}>基礎情報入力</li>
    </ul>
    </div>
)

const changed = (name, e) => this.setState({[name]: e.target.value})

export default class OsumAIHeaderLogin extends Component {
    constructor (props) {
        super(props)
        this.state = { userid: '', passwd: '', jump: '', msg: '' }
    }
    render () {
        if (this.state.jump) {
            return <Redirect to={this.state.jump} />
        }
        return appLogin(this.state)
    }
}

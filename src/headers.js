import React, {Component} from 'react'
import {Redirect, Link} from 'react-router-dom'
import styles from './styles'
import OsumAIHeaderLogin from './header_login'

export default class OsumAIHeader extends Component {
    render () {
        return (
            <div>
                <h1>OsumAI</h1>
                <div style={styles.floatleft}>
                    <div style={styles.headermenubar}>
                        <ul style={styles.headermenu}>
                            <li style={styles.headeritem}><Link to="/">トップ</Link></li>
                            <li style={styles.headeritem}><Link to="/soudan">お住まい相談</Link></li>
                            <li style={styles.headeritem}><Link to="/favorite">お気に入り</Link></li>
                            <li style={styles.headeritem}><Link to="/survey">アンケート</Link></li>
                        </ul>
                        <OsumAIHeaderLogin/>
                    </div>
                    </div>
                <br style={styles.clearbath}/>
                <div>{this.props.title}</div>
            </div>
        )
    }
}

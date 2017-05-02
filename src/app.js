import {Component } from 'react'
import { observer } from 'mobx-react'

@observer
export default class App extends Component{
	constructor(props) {
		super(props)
	}

	render(){
		return (
			<div className='root'>
				<div className='root'>{this.props.children}</div>
			</div>
		)
	};
}
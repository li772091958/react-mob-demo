import { Component } from 'react'
import { Provider, observer } from 'mobx-react'

@observer
class Home extends Component {
	
	constructor(props) {
		super(props)
		this.store = this.props.store
	}

	render() {
		return (
		  <div className='home'>
		    <h1>home</h1>
		    <p>Hello, Mbox!</p>
		  </div>
		)
	}
}

export default Home

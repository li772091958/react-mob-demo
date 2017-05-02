import { Component } from 'react'
import { Provider, observer } from 'mobx-react'
import {autorun,reaction} from 'mobx';

import HomeState from '../store/home'
const homeState = new HomeState();
//console.info(appState)

autorun(() => {
    homeState.fetchData()
})

@observer
class Home extends Component {


	
	constructor(props) {
		super(props)
	}

	render() {
		return (
		  <div className='home'>
		    <h1>home</h1>
		    <p>{homeState.title}</p>
		    {
		    	homeState.province.map(obj =>
		    		<p>{obj.keyword}</p>
		    	)
		    }
		  </div>
		)
	}
}

export default Home

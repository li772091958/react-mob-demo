/**
*	路由
*/
import App from './app'
import Home from './pages/home'
const routes = {
	path: '/',
	component: App,
	indexRoute :{onEnter: (nextState, replace) => replace('/home')},
	childRoutes: [
		{
			path: 'home',
		    component:Home
		},
		{
			path: '*',//404
			getComponent (nextState, cb) {
				require.ensure([], (require)=>{
					cb(null, require('./pages/404').default)
				});
		   }
		},
	]
}

export default routes;
// import views
import homeView from './views/pages/home'
import fourOFourView from './views/pages/404'
import signinView from './views/pages/signin'
import signupView from './views/pages/signup'
import profileView from './views/pages/profile'
import editProfileView from './views/pages/editProfile'
import guideview from './views/pages/guide'
import TherapistsView from './views/pages/therapists'
import Therapists2View from './views/pages/therapists2'
import Therapists3View from './views/pages/therapists3'
import Therapists4View from './views/pages/therapists4'
import Therapists5View from './views/pages/therapists5'
import Therapists6View from './views/pages/therapists6'
import mytrackView from './views/pages/mytrack'
import scheduleView from './views/pages/schedule'
import question1View from './views/pages/question1'
import question2View from './views/pages/question2'
import question3View from './views/pages/question3'
import question4View from './views/pages/question4'
import question5View from './views/pages/question5'
import welcomepageView from './views/pages/welcomepage'
import exploreView from './views/pages/exploretracks'
import explore2View from './views/pages/exploretracks2'
import mytrack2View from './views/pages/mytrack2'
import mytrack3View from './views/pages/mytrack3'
import mytrack4View from './views/pages/mytrack4'
import schedule2View from './views/pages/schedule2'

// define routes
const routes = {
	'/': welcomepageView,	
	'404' : fourOFourView,
	'/signin': signinView,
	'/signup': signupView,
	'/profile': profileView,
	'/editProfile': editProfileView,
	'/guide' : guideview,
	'/therapists' : TherapistsView,
	'/therapists2' : Therapists2View,
	'/therapists3' : Therapists3View,
	'/therapists4' : Therapists4View,
	'/therapists5' : Therapists5View,
	'/therapists6' : Therapists6View,
	'/mytrack' : mytrackView,
	'/mytrack2' : mytrack2View,
	'/mytrack3' : mytrack3View,
	'/mytrack4' : mytrack4View,
	'/schedule' : scheduleView,
	'/schedule2' : schedule2View,
	'/question1' : question1View,
	'/question2' : question2View,
	'/question3' : question3View,
	'/question4' : question4View,
	'/question5' : question5View,
	'/welcomepage' : homeView,
	'/exploretracks' : exploreView,
	'/exploretracks2' : explore2View,
}

class Router {
	constructor(){
		this.routes = routes
	}
	
	init(){
		// initial call
		this.route(window.location.pathname)

		// on back/forward
		window.addEventListener('popstate', () => {
			this.route(window.location.pathname)
		})
	}
	
	route(fullPathname){
		// extract path without params
		const pathname = fullPathname.split('?')[0]
		const route = this.routes[pathname]
		
		if(route){
			// if route exists, run init() of the view
			this.routes[window.location.pathname].init()
		}else{			
			// show 404 view instead
			this.routes['404'].init()			
		}
	}

	gotoRoute(pathname){
		window.history.pushState({}, pathname, window.location.origin + pathname);
		this.route(pathname)
	}	
}

// create appRouter instance and export
const AppRouter = new Router()
export default AppRouter


// programmatically load any route
export function gotoRoute(pathname){
	AppRouter.gotoRoute(pathname)
}


// allows anchor <a> links to load routes
export function anchorRoute(e){
	e.preventDefault()	
	const pathname = e.target.closest('a').pathname
	AppRouter.gotoRoute(pathname)
}

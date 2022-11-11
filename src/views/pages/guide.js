import App from './../../App'
import {html, render } from 'lit-html'
import {gotoRoute, anchorRoute} from './../../Router'
import Auth from './../../Auth'
import Utils from './../../Utils'
import UserAPI from './../../UserAPI'
import { Toast } from 'bootstrap'

class GuideView {
  init(){
    document.title = 'Guide'    
    this.render()    
    Utils.pageIntroAnim()
    this.updateCurrentUser()
  }

  async updateCurrentUser(){
    try{
      const updatedUser = await UserAPI.updateUser(Auth.currentUser._id, {newUser: false}, 'json')
      console.log('user updated')
      console.log(updatedUser)
    }catch(err){
      Toast.show(err, 'error')
    }

  }

  render(){
    const template = html`
      <va-app-header title="Guide" user="${JSON.stringify(Auth.currentUser)}"></va-app-header>
      
      <div class="page-content calign">   

      <br><h3 class="brand-color">Welcome ${Auth.currentUser.firstName}!</h3>
      <p>This is a quick tour to teach you the basics of using Betterdays ...</p>
      
      <div class="guide-step">
        <h4>Find therapists</h4>
        <img src="https://images.unsplash.com/photo-1620302044885-63a750e08a71?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80">
      </div>
      
      <div class="guide-step">
        <h4>Schedule a therapy</h4>
        <img src="https://images.unsplash.com/photo-1435527173128-983b87201f4d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2067&q=80">
      </div>
      
      <div class="guide-step">
        <h4>Add tracks</h4>
        <img src="https://images.unsplash.com/photo-1569513586164-80529357ad6f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80">
      </div>
      
      <sl-button type="primary" @click=${() => gotoRoute('/welcomepage')}>Okay got it !</sl-button>
        
      </div>      
    `
    render(template, App.rootEl)
  }
}


export default new GuideView()
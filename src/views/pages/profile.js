import App from './../../App'
import {html, render } from 'lit-html'
import {gotoRoute, anchorRoute} from './../../Router'
import Auth from './../../Auth'
import Utils from './../../Utils'
import moment from 'moment'

class ProfileView {
  init(){
    console.log('ProfileView.init')
    document.title = 'Profile'    
    this.render()    
    Utils.pageIntroAnim()
  }

  render(){
    const template = html`
      <va-app-header title="Profile" user="${JSON.stringify(Auth.currentUser)}"></va-app-header>
      <div class="page-content1">

      <div class="container">

        ${Auth.currentUser && Auth.currentUser.avatar ? html`
            <sl-avatar style="--size: 150px; margin-bottom: 1em;" image=${(Auth.currentUser && Auth.currentUser.avatar) ? `${App.apiBase}/images/${Auth.currentUser.avatar}` : ''}></sl-avatar>
          `:html`
          <sl-avatar style="--size: 150px; margin-bottom: 1em;"></sl-avatar>
          `}

          <div class="pr1"
            <div>
              <sl-tooltip content="My name is ${Auth.currentUser.firstName}">
                <sl-button>Hover to find out my name</sl-button>
              </sl-tooltip>
              </div><br>

              <div class="pr">
              <sl-tooltip content="My last name is ${Auth.currentUser.lastName}">
                <sl-button>Hover to find my last name</sl-button>
              </sl-tooltip>
              </div><br>

              <div>
              <sl-tooltip content="My email is ${Auth.currentUser.email}">
                <sl-button>Hover to find out my email</sl-button>
              </sl-tooltip>
              </div><br><br>

              <p>Updated: ${moment(Auth.currentUser.updatedAt).format('MMMM Do YYYY, @ h:mm a')}</p><br>

              <sl-button size="medium" pill type="primary" @click=${()=> gotoRoute('/editProfile')}>Edit Profile</sl-button>
            </div>
          </div>
      </div>




    `
    render(template, App.rootEl)
  }
}


export default new ProfileView()
import App from './../../App'
import Auth from './../../Auth'
import {html, render } from 'lit-html'
import {anchorRoute, gotoRoute} from './../../Router'
import Utils from './../../Utils'

class SignUpView{
   
  init(){      
    console.log('SignUpView.init')  
    document.title = 'Sign Up'    
    this.render()
    Utils.pageIntroAnim()
  }

  signUpSubmitHandler(e){
    e.preventDefault()    
    const submitBtn = document.querySelector('.submit-btn')
    submitBtn.setAttribute('loading', '')    
    const formData = e.detail.formData
    
    // sign up using Auth
    Auth.signUp(formData, () => {
      submitBtn.removeAttribute('loading')
    })   
  }

  render(){
    const template = html`      
      <div class="page-content page-centered">      
        <div class="signinup-box">
        
        </div>
      </div>

	<div class="form-container sign-in-container">

		<form action="#">
			<h1 style="font-size:3em;color:white">Create Account</h1>

      <sl-form class="form-signup" @sl-submit=${this.signUpSubmitHandler}>

      <div class="social-container">
        <a href="#" class="social">

        <div style="font-size: 34px;">
          <sl-icon name="facebook"></sl-icon>
        </div>
        </a>

        <a href="#" class="social">

        <div style="font-size: 34px;">
          <sl-icon name="linkedin"></sl-icon>
        </div>
        </a>

        </div>

			<a>or use your email for registration</a>
      <h2></h2><br>

			<div class="input-group">
              <sl-input name="firstName" type="text" placeholder="First Name" required></sl-input>
            </div>

            <div class="input-group">
              <sl-input name="lastName" type="text" placeholder="Last Name" required></sl-input>
            </div>

            <div class="input-group">
              <sl-input name="email" type="email" placeholder="Email" required></sl-input>
            </div>

            <div class="input-group">
              <sl-select name="accessLevel" placeholder="I am a ...">
                <sl-menu-item value="1">Patient</sl-menu-item>
                <sl-menu-item value="2">Therapist</sl-menu-item>
                </sl-select>
            </div>

            <div class="input-group">
              <sl-input name="password" type="password" placeholder="Password" required toggle-password></sl-input>
            </div> 

            <sl-button type="primary" class="submit-btn" submit style="width: 70%;">Sign Up</sl-button>
          </sl-form>
	</div>

	<div class="overlay-container">
		<div class="overlay">
			<div class="overlay-panel overlay-right">
      <div class=girlh>

        <div class="left">
				<h1 style="font-size:3em;color:white">Welcome Back !</h1><br>
				<p style="font-weight:400 ;color:#456b60">To keep connected with us please login !</p>
        <h2></h2><br>
				<sl-button size="medium" pill class="ghost" type="primary" submit style="width: 40%;" @click=${() => gotoRoute('/signin')}>Sign In</sl-button>
			</div>
      </div>

		</div>
	</div>
</div>

    `
    render(template, App.rootEl)
  }
}


export default new SignUpView()
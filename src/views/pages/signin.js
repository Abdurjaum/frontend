import App from './../../App'
import {html, render } from 'lit-html'
import {anchorRoute, gotoRoute} from './../../Router'
import Auth from './../../Auth'
import Utils from './../../Utils'

class SignInView {
  init(){
    console.log('SignInView.init')
    document.title = 'Sign In'
    this.render()
    Utils.pageIntroAnim()
  }

  signInSubmitHandler(e){
    e.preventDefault()
    const formData = e.detail.formData
    const submitBtn = document.querySelector('.submit-btn')
    submitBtn.setAttribute('loading', '')    
    
    // sign in using Auth    
    Auth.signIn(formData, () => {
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
        <h1 style="font-size:3em;color:white">Sign in</h1>

        <sl-form class="form-signup dark-theme" @sl-submit=${this.signInSubmitHandler}>

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

        <a>or sign in with your account</a><br><br>
        <h2></h2>

        <div class="input-group">
        <sl-input name="email" type="email" placeholder="Email"></sl-input>
        </div>

        <div class="input-group">
        <sl-input name="password" type="password" placeholder="Password" required toggle-password></sl-input>
        </div>

        <a style="color:white">Forgot your password ?</a>
        <h2></h2>

        <sl-button size="medium" pill class="submit-btn" type="primary" submit style="width: 70%;">Sign In</sl-button>
      </sl-form>

    </div>


    <div class="overlay-container">
      <div class="overlay">
        <div class="overlay-panel overlay-left">
        </div>

        <div class="overlay-panel overlay-right">
        <div class=girlh>

        <div class="right">
          <h1 style="font-size:3em;color:white">Hi There !</h1><br>
          <p style="font-weight:400 ;color:#456b60">Don't have an account ? Sign up today and don't miss out on the exclusive weekly activities.</p>
          <h2></h2><br>
          <sl-button size="medium" pill class="ghost" type="primary" submit style="width: 40%;" @click=${() => gotoRoute('/signup')}>Sign Up</sl-button>
          </div>
        


        </div>

      </div>
    </div>
    </div>

    `
    render(template, App.rootEl)    
  }
}

export default new SignInView()
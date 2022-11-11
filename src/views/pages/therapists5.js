import App from './../../App'
import {html, render } from 'lit-html'
import {gotoRoute, anchorRoute} from './../../Router'
import Auth from './../../Auth'
import Utils from './../../Utils'

class Therapists5View {
  init(){
    document.title = 'Confirmation receipt'    
    this.render()    
    Utils.pageIntroAnim()
  }

  render(){
    const template = html`
      <va-app-header title="Therapists" user="${JSON.stringify(Auth.currentUser)}"></va-app-header>
      <div class="page-content calign">        
        <br><h1 class="heading">Therapist</h1><br>

        <div class="column-thx" style="background-color:#97bbf9;">

            <div class="icon-button-color-th">
              <sl-icon-button name="x" label="x" style="font-size: 2.5rem;" @click=${() => gotoRoute('/therapists')}></sl-icon-button>
            </div>

            <div class="icon-button-color-thx">
              <sl-icon-button name="arrow-left-short" label="arrow-left-short" style="font-size: 2.5rem;" @click=${() => gotoRoute('/therapists4')}></sl-icon-button>
            </div>

          <div class="dc-th">
          </div>
        
          <div class="text-th">
            <h3 style="color:#fff">Mark Harel</h3>
            <p style="color:#fff">Couple therapist</p>
            <p style="color:#fff">1 hour</p>
            <p style="color:#fff">$ 40</p>
            <sl-rating label="Rating" precision="0.5" readonly value="4.5"></sl-rating><br><br>
          </div>

          <div class="end-th">

        <div class="text1">
        <br></br><p style="color:#456b60">Date</p>
        <h5 style="color:#456b60">07/12/2022</h5>
        </br><p style="color:#456b60">Time</p>
        <h5 style="color:#456b60">10:30 AM</h5>
        </br><p style="color:#456b60">Payment details</p>
        <h5 style="color:#456b60">Mark Harel for couple therapy</h5>
        <h6 style="color:#456b60">Payment done via Visa</h6>
        <br><p style="color:#456b60">Total Amount</p>
        <h5 style="color:#456b60">$ 40</h5><br><br>


        <div class="ava">
        <br><br><sl-button type="primary" @click=${() => gotoRoute('/therapists6')}>CONFIRM</sl-button>
        </div>

        </div>

      </div> 
    `
    render(template, App.rootEl)
  }
}


export default new Therapists5View()
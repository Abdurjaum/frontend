import App from './../../App'
import {html, render } from 'lit-html'
import {gotoRoute, anchorRoute} from './../../Router'
import Auth from './../../Auth'
import Utils from './../../Utils'

class Therapists3View {
  init(){
    document.title = 'Book now'    
    this.render()    
    Utils.pageIntroAnim()
  }

  render(){
    const template = html`
      <va-app-header title="Therapists" user="${JSON.stringify(Auth.currentUser)}"></va-app-header>
      <div class="page-content calign">        
        <br><h1 class="heading">Therapist</h1><br>

        <div class="column-th" style="background-color:#97bbf9;">

            <div class="icon-button-color-th">
              <sl-icon-button name="x" label="x" style="font-size: 2.5rem;" @click=${() => gotoRoute('/therapists')} ></sl-icon-button>
            </div>

            <div class="icon-button-color-thx">
              <sl-icon-button name="arrow-left-short" label="arrow-left-short" style="font-size: 2.5rem;" @click=${() => gotoRoute('/therapists2')}></sl-icon-button>
            </div>

          <div class="dc-th">
          </div>
        
          <div class="text-th">

            <h3 style="color:#fff">Mark Harel</h3>
            <p style="color:#fff">Couple therapist</p>
            <p style="color:#fff">1 hour</p>
            <p style="color:#fff">$ 40</p>
            <sl-rating label="Rating" precision="0.5" readonly value="4.5"></sl-rating><br><br>
            <br><br><br><br><br>

            <sl-dropdown>
              <sl-button slot="trigger" caret>Date</sl-button>
              <sl-menu>
                <sl-menu-item>7th December 2022</sl-menu-item>
                <sl-menu-item>11th December 2022</sl-menu-item>
                <sl-menu-item>14th December 2022</sl-menu-item>
                </sl-menu-item>
              </sl-menu>
            </sl-dropdown><br><br><br>

            <sl-dropdown>
              <sl-button slot="trigger" caret>Time</sl-button>
              <sl-menu>
                <sl-menu-item>10:30 AM</sl-menu-item>
                <sl-menu-item>13:00 PM</sl-menu-item>
                <sl-menu-item>15:00 PM</sl-menu-item>
                </sl-menu-item>
              </sl-menu>
            </sl-dropdown><br><br><br>

            <br><h4 style="color:#456b60">Prefered communication</h4><br>
            
            <p style="color:#456b60">Please select a prefered method of communication to get in</p>
            <p style="color:#456b60">contact with your therapist </p><br>

            <div class="social-container">
              <a href="#" class="social">

                <div style="font-size: 40px;">
                  <sl-icon name="whatsapp"></sl-icon>
                </div>
              </a>

              <a href="#" class="social">

                <div style="font-size: 40px;">
                  <sl-icon name="camera-video-fill"></sl-icon>
                </div>
              </a>

              <a href="#" class="social">

                <div style="font-size: 40px;">
                  <sl-icon name="chat-fill"></sl-icon>
                </div>
              </a>
            </div>

            <br><br><h4 style="color:#456b60">Payment method</h4><br>
            
            <p style="color:#456b60">Please select a prefered method of payment</p><br>

            <div class="row-the">
              <div class="column-the">
                <img src="images/visa.png" alt="Snow" style="width:55%">
              </div>

              <div class="column-the">
                <img src="images/mastercard.png" alt="Forest" style="width:35%">
              </div>

              <div class="column-the">
                <img src="images/paypal.png" alt="Mountains" style="width:30%">
              </div>
            </div>

            <br><br><br><sl-button type="primary" @click=${() => gotoRoute('/therapists4')}>DONE</sl-button>


          </div>
        </div>

      
      </div>      
    `
    render(template, App.rootEl)
  }
}


export default new Therapists3View()
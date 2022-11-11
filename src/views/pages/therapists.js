import App from './../../App'
import {html, render } from 'lit-html'
import {gotoRoute, anchorRoute} from './../../Router'
import Auth from './../../Auth'
import Utils from './../../Utils'

class TherapistsView {
  init(){
    document.title = 'Therapists'    
    this.render()    
    Utils.pageIntroAnim()
  }

  render(){
    const template = html`
      <va-app-header title="Therapists" user="${JSON.stringify(Auth.currentUser)}"></va-app-header>
      <div class="page-content calign">        
        <br><h1 class="heading">Therapist</h1><br>

      
        <sl-input placeholder="Find a therapist" size="medium">
        <sl-icon name="search" slot="prefix"></sl-icon>
        </sl-input><br></br><br>

        <div class="row">
              <div class="column2" style="background-color:#f08b58;">

                <div class="txt-th">
                <h1 style="color:#fff" >Our best therapist for you</h1>

              </div>
              </div>

              <div class="column" style="background-color:#97bbf9;">

                <div class="dc">
                </div>
              
                <br><h4 style="color:#fff">Mark Harel</h4>
                <p style="color:#fff">Couple therapist</p><br><br>

                <div class="rating-dc">
                <sl-rating label="Rating" precision="0.5" readonly value="4.0"></sl-rating>
                </div>

                <div class="read-dc">
                <p style="color:#28443c" @click=${() => gotoRoute('/therapists2')}>More info</p>
                </div>

              </div>

              <div class="column" style="background-color:#97bbf9;">

                <div class="dc1">
                </div>
              
                <br><h4 style="color:#fff">Jessica West</h4>
                <p style="color:#fff">Anger management therapist</p><br><br>

                <div class="rating-dc">
                <sl-rating label="Rating" precision="0.5" readonly value="4.5"></sl-rating>
                </div>

                <div class="read-dc">
                <p style="color:#28443c">More info</p>
                </div>

              </div>

              <div class="column" style="background-color:#97bbf9;">

                <div class="dc2">
                </div>
              
                <br><h4 style="color:#fff">Monica Everline</h4>
                <p style="color:#fff">Stress management therapist</p><br><br>

                <div class="rating-dc">
                <sl-rating label="Rating" precision="0.5" readonly value="4.5"></sl-rating>
                </div>

                <div class="read-dc">
                <p style="color:#28443c">More info</p>
                </div>

              </div>
            </div>

        
        
      </div>      
    `
    render(template, App.rootEl)
  }
}


export default new TherapistsView()
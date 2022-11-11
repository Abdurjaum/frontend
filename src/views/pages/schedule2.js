import App from './../../App'
import {html, render } from 'lit-html'
import {gotoRoute, anchorRoute} from './../../Router'
import Auth from './../../Auth'
import Utils from './../../Utils'

class schedule2View {
  init(){
    document.title = 'Schedule 2'    
    this.render()    
    Utils.pageIntroAnim()
  }

  render(){
    const template = html`
      <va-app-header title="Schedule" user="${JSON.stringify(Auth.currentUser)}"></va-app-header>
      <div class="page-content calign">   

        <br><h1 class="heading">Schedule</h1><br>

        <div class="clearfix">

          <div class="box1" style="background-color:#97bbf9">

            <div class="ld6">
            </div>

            <div class="txt5">
              <h4 style="color:#fff">Mark Harel</h4>
              <p style="color:#fff">Couple therapist</p>
              <div class="rating">
                <sl-rating label="Rating" precision="0.5" readonly value="4.0"></sl-rating>
              </div>
            </div>

            <div class="read2">
              <p style="color:#456b60;font-weight:400">View appointment</p>
            </div>

          </div>
          
          <div class="box1" style="background-color:#97bbf9">

            <div class="ld7">
            </div>

            <div class="txt5">
              <h4 style="color:#fff">Jessica West</h4>
              <p style="color:#fff">Anger management therapist</p>
              <div class="rating">
               <sl-rating label="Rating" precision="0.5" readonly value="4.5"></sl-rating>
              </div>
            </div>

            <div class="read2">
              <p style="color:#456b60;font-weight:400">View appointment</p>
            </div>

          </div>

          <div class="box1" style="background-color:#eaf2ff">
          </div>

          <div class="box1" style="background-color:#eaf2ff">
          </div>
        </div>

        <div class="end2">

        <div class="text-3">

        <div class="bigx">
        <sl-icon-button name="x" label="x" style="font-size: 2.5rem;" @click=${() => gotoRoute('/schedule')} ></sl-icon-button>
        </div>

        <h5 style="color:#ee570c">Appointment</h5>
        <br><h3 style="color:white">07 / 12 / 2022</h3>
        </br><h5 style="color:#ee570c">Time</h5>
        <br><h3 style="color:white">10:30 AM</h3>

        </div>
      </div>      
    `
    render(template, App.rootEl)
  }
}


export default new schedule2View()
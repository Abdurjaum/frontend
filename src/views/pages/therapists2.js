import App from './../../App'
import {html, render } from 'lit-html'
import {gotoRoute, anchorRoute} from './../../Router'
import Auth from './../../Auth'
import Utils from './../../Utils'

class Therapists2View {
  init(){
    document.title = 'Therapists more info'    
    this.render()    
    Utils.pageIntroAnim()
  }

  render(){
    const template = html`
      <va-app-header title="Therapists" user="${JSON.stringify(Auth.currentUser)}"></va-app-header>
      <div class="page-content calign">        
        <br><h1 class="heading">Therapist</h1><br>

        <div class="column-thz" style="background-color:#97bbf9;">

            <div class="icon-button-color-th">
              <sl-icon-button name="x" label="x" style="font-size: 2.5rem;" @click=${() => gotoRoute('/therapists')} ></sl-icon-button>
            </div>

          <div class="dc-th">
          </div>
        
          <div class="text-th">
            <h3 style="color:#fff">Mark Harel</h3>
            <p style="color:#fff">Couple therapist</p>
            <p style="color:#fff">1 hour</p>
            <p style="color:#fff">$ 40</p>
            <sl-rating label="Rating" precision="0.5" readonly value="4.5"></sl-rating><br><br>
            <sl-button size="medium" @click=${() => gotoRoute('/therapists3')} pill>Book now</sl-button><br><br><br>

            <p style="color:#fff">Clinical Psychologist EMDR and Cognitive Behavioral therapy practitioner</p>
            <p style="color:#fff">Speciality: Psychology</p>
            <p style="color:#fff">Qualifications</p>
            
            <p style="color:#fff">Master II clinical psychology, Nice university (France)</p>
            <p style="color:#fff">Cognitive behavioural therapy, Lyon University (France)</p>
            <p style="color:#fff">Eye movement desensitization and reprocessing therapy (EMDR) (France)</p>
            
            <br><h5 style="color:#fff">Specialization</h5><br>
            
            <p style="color:#fff">Clinical psychology</p>
            <p style="color:#fff">Family therapy (parents, children, adolescent)</p>
            <p style="color:#fff">Adult mental health</p>
            <p style="color:#fff">Cognitive behavioural therapy</p>
            <p style="color:#fff">Post traumatic stress</p><br>
            
            <h5 style="color:#fff">Work Experience</h5><br>
            
            <p style="color:#fff">Les sources Hospital (2016) France</p>
            
            <p style="color:#fff">Private practice (2017-2019) France</p>
            <p style="color:#fff">Geriatric clinic (2017-2018) France</p>
            <p style="color:#fff">Psychologist-trainer (2017-2019) France</p>
            <p style="color:#fff">Wellkin psychologist (2019-presently)</p>

          </div>

        </div>

      
      </div>      
    `
    render(template, App.rootEl)
  }
}


export default new Therapists2View()
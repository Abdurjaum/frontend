import App from './../../App'
import {html, render } from 'lit-html'
import {gotoRoute, anchorRoute} from './../../Router'
import Auth from './../../Auth'
import Utils from './../../Utils'

class question5View {
  init(){
    document.title = 'Question 5'    
    this.render()    
    Utils.pageIntroAnim()
  }

  render(){
    const template = html`
    <div class="quest calign">

    <br></br><h1 class="heading">BetterDays</h1><br>

    <div class="progress" style="height: 10px;">
    <div class="progress-bar" role="progressbar" style="width: 100%;" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
    </div><br><br>

      <div class="question">

        <div class="qt">

        <br><h4>Have you ever been to a therapy session ?</h4><br><br>
        <sl-radio-group>
        <sl-radio value="1">No, never</sl-radio><br></br><br>
        <sl-radio value="2">No, but i'd like to</sl-radio><br></br><br>
        <sl-radio value="3">Yes, i've been to</sl-radio><br></br><br>
        <sl-radio value="4">Yes, that's my escape !</sl-radio><br></br><br>
        </sl-radio-group></div>

        
      </div>

      <br></br><sl-button @click=${() => gotoRoute('/question4')}>Previous question</sl-button>
      <sl-button type="primary" @click=${() => gotoRoute('/signin')}>Sign In</sl-button>
      </div>
    `
    render(template, App.rootEl)
  }
}


export default new question5View()
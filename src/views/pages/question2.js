import App from './../../App'
import {html, render } from 'lit-html'
import {gotoRoute, anchorRoute} from './../../Router'
import Auth from './../../Auth'
import Utils from './../../Utils'

class question2View {
  init(){
    document.title = 'Question 2'    
    this.render()    
    Utils.pageIntroAnim()
  }

  render(){
    const template = html`
    <div class="quest calign">

    <br></br><h1 class="heading">BetterDays</h1><br>

    <div class="progress" style="height: 10px;">
    <div class="progress-bar" role="progressbar" style="width: 40%;" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100"></div>
    </div><br><br>

      <div class="question">

        <div class="qt">

        <br><h4>In the past two weeks, how often have you felt down, depressed or hopeless ?</h4><br><br>
        <sl-radio-group>
        <sl-radio value="1">Not at all</sl-radio><br></br><br>
        <sl-radio value="2">Several days</sl-radio><br></br><br>
        <sl-radio value="3">More than a week</sl-radio><br></br><br>
        <sl-radio value="4">Everyday</sl-radio><br></br><br>
        </sl-radio-group></div>

        
      </div>

      <br></br><sl-button @click=${() => gotoRoute('/question1')}>Previous question</sl-button>
      <sl-button type="primary" @click=${() => gotoRoute('/question3')}>Next question</sl-button>
      </div>
    `
    render(template, App.rootEl)
  }
}


export default new question2View()
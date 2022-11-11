import App from './../../App'
import {html, render } from 'lit-html'
import {gotoRoute, anchorRoute} from './../../Router'
import Auth from './../../Auth'
import Utils from './../../Utils'

class question3View {
  init(){
    document.title = 'Question 3'    
    this.render()    
    Utils.pageIntroAnim()
  }

  render(){
    const template = html`
    <div class="quest calign">

    <br></br><h1 class="heading">BetterDays</h1><br>

    <div class="progress" style="height: 10px;">
    <div class="progress-bar" role="progressbar" style="width: 60%;" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"></div>
    </div><br><br>

      <div class="question">

        <div class="qt">

        <br><h4>How is your sleep ?</h4><br><br>
        <sl-radio-group>
        <sl-radio value="1">Sleeping as usual</sl-radio><br></br><br>
        <sl-radio value="2">Slight difficulty</sl-radio><br></br><br>
        <sl-radio value="3">Sleep reduced</sl-radio><br></br><br>
        <sl-radio value="4">Getting less than 3 hours of sleep at night</sl-radio><br></br><br>
        </sl-radio-group></div>

        
      </div>

      <br></br><sl-button @click=${() => gotoRoute('/question2')}>Previous question</sl-button>
      <sl-button type="primary" @click=${() => gotoRoute('/question4')}>Next question</sl-button>
      </div>
    `
    render(template, App.rootEl)
  }
}


export default new question3View()
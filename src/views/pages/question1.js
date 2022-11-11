import App from './../../App'
import {html, render } from 'lit-html'
import {gotoRoute, anchorRoute} from './../../Router'
import Auth from './../../Auth'
import Utils from './../../Utils'

class question1View {
  init(){
    document.title = 'Question 1'    
    this.render()    
    Utils.pageIntroAnim()
  }

  render(){
    const template = html`
    <div class="quest calign">

      <br></br><h1 class="heading">BetterDays</h1><br>

      <div class="progress" style="height: 10px;">
    <div class="progress-bar" role="progressbar" style="width: 20%;" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div>
    </div><br><br>

      <div class="question">

        <div class="qt">

        <br><h4>How are you feeling today ?</h4><br></br>
        <sl-radio-group>
        <sl-radio value="1">Anxious</sl-radio><br></br><br>
        <sl-radio value="2">Depressed</sl-radio><br></br><br>
        <sl-radio value="3">Stressed</sl-radio><br></br><br>
        <sl-radio value="4">Sad</sl-radio><br></br><br>
        </sl-radio-group></div>
        
      </div>

      <br></br><sl-button type="primary" @click=${() => gotoRoute('/question2')}>Next question</sl-button>
      </div>
    `
    render(template, App.rootEl)
  }
}


export default new question1View()
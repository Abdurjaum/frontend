import App from './../../App'
import {html, render } from 'lit-html'
import {gotoRoute, anchorRoute} from './../../Router'
import Auth from './../../Auth'
import Utils from './../../Utils'

class mytrack2View {
  init(){
    document.title = 'My Track 2'    
    this.render()    
    Utils.pageIntroAnim()
  }

  render(){
    const template = html`
      <va-app-header title="My Track" user="${JSON.stringify(Auth.currentUser)}"></va-app-header>
      <div class="page-content">    
        
        <br><h1 class="heading">My Track</h1>

        <div class="four">
            
            <div class="myt">

            <div class="icon-button-color">
            <sl-icon-button name="x" label="x" style="font-size: 2.5rem;" @click=${() => gotoRoute('/mytrack')} ></sl-icon-button>
            </div>


              <h3 style="color:#f08b58";>Thursday</h3><br>
                
                <br><h5 style="color:white">Write down all the things you've done this week that make you feel accomplished.</h5><br>
                <sl-textarea placeholder="Don't be afraid, we are here for you !" filled></sl-textarea><br>

                <br><h5 style="color:white">How your day-to-day accomplishments are meaningful. Do you make people feel cared for at work? Do your sacrifices help provide for your family ?</h5><br>
                <sl-textarea placeholder="Don't be afraid, we are here for you !" filled></sl-textarea><br><br><br>

                <div class="dn">
                  <sl-button size="large" @click=${() => gotoRoute('/mytrack3')} >Done</sl-button><br><br><br><br>
                </div>

            </div>

      </div>      
    `
    render(template, App.rootEl)
  }
}


export default new mytrack2View()
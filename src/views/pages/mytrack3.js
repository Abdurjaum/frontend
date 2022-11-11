import App from './../../App'
import {html, render } from 'lit-html'
import {gotoRoute, anchorRoute} from './../../Router'
import Auth from './../../Auth'
import Utils from './../../Utils'

class mytrack3View {
  init(){
    document.title = 'My Track 3'    
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
            <sl-icon-button name="x" label="x" style="font-size: 2.5rem;" @click=${() => gotoRoute('/mytrack4')} ></sl-icon-button>
            </div>

        </div>

        <div class="ld5">
        </div>
        
              <div class="myt1">           
              <br><h1 class="my1">Well Done</h1>

              <h5 style="color:white">We wish this exercise was a help for you !</h5>
              </div>

            </div>

      </div>      
    `
    render(template, App.rootEl)
  }
}


export default new mytrack3View()
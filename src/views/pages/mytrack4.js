import App from './../../App'
import {html, render } from 'lit-html'
import {gotoRoute, anchorRoute} from './../../Router'
import Auth from './../../Auth'
import Utils from './../../Utils'

class mytrack4View {
  init(){
    document.title = 'My Track 4'    
    this.render()    
    Utils.pageIntroAnim()
  }

  render(){
    const template = html`
      <va-app-header title="My Track" user="${JSON.stringify(Auth.currentUser)}"></va-app-header>
      <div class="page-content">        
        
        <br><h1 class="heading">My Track</h1><br></br>

        <p class="wt" style="color:#456b60;">“Just one small positive thought</p>
        <p class="wt" style="color:#456b60;">in the morning can change your whole day.”</p>

        <hr color="#212121" class="ln"><br>


        <div class="circle">
          <div class="cc" style="font-size: 36px; color:#fff;">
          <sl-icon name="emoji-smile"></sl-icon>
          </div>
          <h3 class="mt3" style="color:#456b60;">Mon</h3>

        <div class="circle1">
        <div class="cc" style="font-size: 36px; color:#fff;">
        <sl-icon name="emoji-smile"></sl-icon>
        </div>
        <h3 class="mt3" style="color:#456b60;">Tue</h3>
        <div>

        <div class="circle2">
        <div class="cc" style="font-size: 36px; color:#fff;">
        <sl-icon name="emoji-smile"></sl-icon>
        </div>
        <h3 class="mt3" style="color:#456b60;">Wed</h3>
        <div>

        <div class="circle3" @click=${() => gotoRoute('/mytrack2')}>
        <div class="cc" style="font-size: 36px; color:#f9d2bf;">
        <sl-icon name="hand-index-thumb"></sl-icon>
        </div>
        <h3 class="mt3" style="color:#F08b58;">Thu</h3>
        <div>

        <div class="ld9">
        </div>

        <div class="circle4">
        <h3 class="mt" style="color:#456b60;">Fri</h3>
        <div>

        <div class="circle5">
        <h3 class="mt" style="color:#456b60;">Sat</h3>
        <div>

        <div class="circle6">
        <h3 class="mt" style="color:#456b60;">Sun</h3>
        <div><br><br>

        <h1></h1>

        </div>

      </div>      
    `
    render(template, App.rootEl)
  }
}


export default new mytrack4View()
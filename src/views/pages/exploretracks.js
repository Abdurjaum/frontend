import App from './../../App'
import {html, render } from 'lit-html'
import {gotoRoute, anchorRoute} from './../../Router'
import Auth from './../../Auth'
import Utils from './../../Utils'

class exploreView {
  init(){
    document.title = 'Explore Tracks Page'    
    this.render()    
    Utils.pageIntroAnim()
  }

  render(){
    const template = html`

    <va-app-header title="Home" user=${JSON.stringify(Auth.currentUser)}></va-app-header>
      
    <div class="page-content">

        <div class="Speciality">

          <section class="review" id="review">

            <br><br><h1 class="heading1" >Explore</h1>
            <h1 class="heading2">Thank you for choosing us</h1><br><br>
            <p class="p1">Making proffessional theraphy accessible, affordable</p>
            <p class="p1">and convenient. So anyone who struggles with life's challenges </p>
            <p class="p1">can get help anytime and anywhere.</p><br></br><br>

            
            <div class="row">
              <div class="column">
              <div class="square">

                <div class="txt"><br><br><br><br><br><br><br>
                <br><br><br><br><br><br><br><br><h2 style="color:#fff" >Our best features for you</h2>

              </div>
              </div>
              </div>

              <div class="column" style="background-color:#97bbf9;">
                <h3 style="color:#fff">Cope with stress</h3><br>
                <p style="color:#fff">sed quia non numquam eius a incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>

                <div class="read">
                <p @click=${() => gotoRoute('/exploretracks2')}>Read more</p>
                </div>

              </div>

              <div class="column" style="background-color:#97bbf9;">
                <h3 style="color:#fff">Depression</h3><br>
                <p style="color:#fff">sed quia non numquam eius a incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>

                <div class="read">
                <p>Read more</p>
                </div>

              </div>

              <div class="column" style="background-color:#97bbf9;">
                <h3 style="color:#fff">Build on Self confidence</h3><br>
                <p style="color:#fff">sed quia non numquam eius a incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>

                <div class="read1">
                <p>Read more</p>
                </div>

              </div>
            </div>

          
          </section>
        </div>

        <div class="ft"></div>

    </div>
     
    `
    render(template, App.rootEl)
  }
}


export default new exploreView()
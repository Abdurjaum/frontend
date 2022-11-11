import App from './../../App'
import {html, render } from 'lit-html'
import {gotoRoute, anchorRoute} from './../../Router'
import Auth from './../../Auth'
import Utils from './../../Utils'

class explore2View {
  init(){
    document.title = 'Explore Tracks 2'    
    this.render()    
    Utils.pageIntroAnim()
  }

  render(){
    const template = html`

    <va-app-header title="Home" user=${JSON.stringify(Auth.currentUser)}></va-app-header>
      
    <div class="page-content">

        <div class="Speciality">

          <section class="review" id="review">

            <br><br><h1 class="heading1" >Explore</h1><br>
          
          </section>
        </div>

        <div class="three">

        <section class="banner1">
            
        <iframe controls src="https://www.youtube.com/embed/DwCl_0u7sHw" class="video-section" title="YouTube video player" frameborder="0"
         allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

        </section>

        <div class="ld2">

          <div class="ld3">
            <br><br><h1 style="color:white">Cope with stress</h1><br>
            <p>sed quia non numquam eius a incidunt ut labore et dolore magnam aliquam quaerat perspiciatis ut </p>
            <p>voluptatem.Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque sud</p>
            <p>laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beate</p>
            <p>vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fug</p>
            <p>quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est</p>
            <p>perspiciatis ipsum quia dolor sit amet, consectetur, adipiscis velit, sed quia non numquame tempora.</p>
          </div>

          <div class="ld4">
          <sl-button @click=${() => gotoRoute('/exploretracks')} size="medium" pill>Add to track</sl-button><br><br><br><br> 
          </div>

        </div>


    </div>
     
    `
    render(template, App.rootEl)
  }
}


export default new explore2View()
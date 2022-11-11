import App from './../../App'
import {html, render } from 'lit-html'
import {gotoRoute, anchorRoute } from './../../Router'
import Auth from './../../Auth'
import Utils from './../../Utils'

class HomeView {
  init(){    
    console.log('HomeView.init')
    document.title = 'Welcome page'    
    this.render()    
    Utils.pageIntroAnim()    
  }

  render(){
    const template = html`
      
      <div class="page-content1">
      <div class="one">
      
        <div class="abs">
        
        <h2 style="color:black">Welcome to BetterDays !</h2>
        <p style="color:black">Making proffessional theraphy accessible, affordable</p>
        <p style="color:black">and convenient. Anyone who struggles with life's challenges </p>
        <p style="color:black">can get help anytime and anywhere.</p><br></br>

        <sl-button type="primary" size="medium" @click=${() => gotoRoute('/signin')} pill>Let's get started</sl-button>
        <p>&nbsp;</p>
      </div>
      </div>

      <div class="aboutus">
      
        <div class="abt">
          <h1 style="color:white">About Us</h1><br></br>
          <p style="color:white">Sometimes it's not always possible to see a therapist in person. Online or virtual therapy is helpful for people</p>
          <p style="color:white">who live in remote areas where there are not a lot of options for seeing if a therapist in person.</p>
          <p style="color:white">BetterDays provides resources for therapists who are all over the country. Also it's important to see what</p>
          <p style="color:white">kind of theraphy works best for you</p>

        </div>

      </div>


        <div class="Speciality">

        <div class="custom-shape-divider-top-1662745506">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M649.97 0L550.03 0 599.91 54.12 649.97 0z" class="shape-fill"></path>
    </svg>
</div>      

      <section class="review" id="review">

        <h1 class="heading3" >Our</h1>  
        <h1 class="heading4" >Specialities</h1><br></br><br>


        <br><div class="flip-card">

        <div class="box-container">

          <div class="box">
          
          <div class="flip-card-inner">
          
          <div class="flip-card-front">
              <img src="images/pic1.jpeg" alt="">
              <h2>Stress</h2>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat </p>
          </div>

            <div class="flip-card-back">
                <img src="images/pic1.jpeg" />
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit </p>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit </p>
            </div>
          </div>
          </div><br><br>

          <div class="box">

          <div class="flip-card-inner">
          <div class="flip-card-front">

              <img src="images/pic2.jpeg" alt="">
              <h2>Depression</h2>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat </p>
          </div>

          <div class="flip-card-back">

              <img src="images/pic2.jpeg" />
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit </p>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit </p>

          </div>
          </div>
          </div><br><br>

          <div class="box">
              <img src="images/pic3.jpeg" alt="">
              <h2>Anxiety</h2>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat </p>
          </div>

        </div>

      </section>
      </div>
      <br></br><br></br><br></br>

        <div class="two">

        <section class="banner">
            
        <iframe controls src="https://www.youtube.com/embed/DwCl_0u7sHw" class="video-section" title="YouTube video player" frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>


            <div class="banner-content">
                <h1>We are all for life</h1>
                <h3>Betterdays managed by c-care.<br></h3>

            </div>
         </section>

      
        <div class="end">

        <div class="text1">
        <br></br><p style="color:white">Client Satisfaction</p>
        <br><h2 style="color:white">What the client's say ?</h2>
        <br><p style="color:white">Have had this app for 3 years now and always</p>
        <p style="color:white">found it a really helpful tool to help me sleep.</p><br>

        <hr color="#212121" class="line"><br>
        
        <sl-avatar
        image="https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
        label="Avatar of woman"
        ></sl-avatar>
        
        <p class="txt2">Abby Grey</p><br><br>

        </div>
        

        <div class="social-container-1">
          <a href="#" class="social">

            <div style="font-size: 40px;">
              <sl-icon name="facebook"></sl-icon>
            </div>
          </a>

          <a href="#" class="social">

            <div style="font-size: 40px;">
              <sl-icon name="linkedin"></sl-icon>
            </div>
          </a>

        </div>

    </div>
     
    `
    render(template, App.rootEl)
  }
}

export default new HomeView()
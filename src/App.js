
import './App.css';
import AiImage from './images/aiwoman.png'
import Arrow from './Arrow'

function App() {
  return (
    <div className="App">
       <div className='container'>
          <h3>Ship Ai.</h3>
        <div className="links">
          <a className='active' href="#">Home</a>
          <a href="#">Pricing</a>
          <a href="#">About</a>
          <a href="#">Get Started</a>

        </div>


       </div>

       <div className='container-for-hero'>
          <div className='hero'>
             <h1>Find <span className='headerbutcolor'>Love</span>  </h1> <br/>
             <h1 className='nextword'>With AI Coach.</h1>
             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, unde ducimus? Hic ducimus velit labore reprehenderit deserunt animi ratione magnam quas mollitia dolore perspiciatis, quae dolores eum rem dolorum. Odio
             Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, unde ducimus? Hic ducimus velit labore repreh.</p>
            <div className='btns'>
            <a href='#'>Get started Now! <span className='spanforarrow'> <Arrow /> </span> </a>
            </div>
          </div>
          <div className="images">
            <img src={AiImage}  alt='aiwomen'/>
          </div>

       </div>

       <div className='were-part'>

         <div className="were-real">
           <h3>Get An Expert's Advice On <br /> How To Find Love</h3>
           <p>
             Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat amet fugiat eos voluptate nihil, odit adipisci eius. Ad cum labore nulla sint quia aliquid voluptatem! Porro voluptatum quos iste nihil.
           </p>
           <div  className='were-btn'>
             <a href='#'>Start For Free</a>
           </div>
         </div>
         <div className="were-real">
           <h3>Elevate Your Social Skill By <br/> Harnessing AI </h3>
           <p>
             Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat amet fugiat eos voluptate nihil, odit adipisci eius. Ad cum labore nulla sint quia aliquid voluptatem! Porro voluptatum quos iste nihil.
           </p>
           <div className='were-btn'>
             <a href='#'>Are You Ready?</a>
           </div>
         </div>

       </div>
    </div>
  );
}

export default App;

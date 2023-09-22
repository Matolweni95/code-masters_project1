  import React from 'react';
  import '../css/About.css';
  import vision from '../images/IMG_8375.JPG';

  const About = () => {
    return (
      
      <section className='about'>
        <div className='about-container d-flex flex-column'>
          <div className='about-heading d-flex flex-column align-items-center justify-content-center'>
            <h1 className='about-header'>About</h1>
            <div className='about-line'></div>
          </div>

          <div className='about-desc d-flex justify-content-center'>
            <p className='about-summary'>
              Lorem ipsum dolor sit amet consectetur. Praesent est lectus vulputate nec sodales placerat egestas
              dignissim. Malesuada faucibus lorem accumsan sem venenatis imperdiet dolor. Nisl quis semper 
              vulputate habitasse facilisis congue nec. Quis lectus sit velit cras metus.
            </p>
          </div>
        </div>

        <div className='aim d-flex flex-wrap justify-content-center'>
          <div className='aim-container'>
            <img className='aim-image' src={vision}/>
          </div>
          <div className='mission-text d-flex flex-column justify-content-center align-items-center'>
            <h3>OUR MISSION</h3>
            <p className='aim-paragraph'>
            Lorem ipsum dolor sit amet consectetur. Sodales vestibulum integer nisl sodales id. Tellus
            est sit quis at suspendisse in massa egestas. Blandit aliquam sit rhoncus vitae est est 
            justo pellentesque. Duis enim tincidunt proin urna gravida quam commodo malesuada rutrum.
              Est a nibh ut ac est pellentesque. Molestie tellus lobortis tortor ultricies in dignissim 
              pellentesque proin mattis. Magna pulvinar non praesent at mattis senectus praesent tellus.
            </p>
          </div>
       
        
        <div className='vision-text  d-flex flex-column justify-content-center align-items-center'>
          <h3>OUR MISSION</h3>
              <p className='mission-paragraph'>
                Lorem ipsum dolor sit amet consectetur. Sodales vestibulum integer nisl sodales id. Tellus
                est sit quis at suspendisse in massa egestas. Blandit aliquam sit rhoncus vitae est est 
                justo pellentesque. Duis enim tincidunt proin urna gravida quam commodo malesuada rutrum.
                  Est a nibh ut ac est pellentesque. Molestie tellus lobortis tortor ultricies in dignissim 
                  pellentesque proin mattis. Magna pulvinar non praesent at mattis senectus praesent tellus.
              </p>
        </div>
        <div className='aim-container'>
            <img className='aim-image' src={vision}/>
          </div>
        </div>
      </section>
      
    );
  }

export default About;
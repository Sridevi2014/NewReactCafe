import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 


 let styles = {
    margin: 'auto',
	width: '500px',
	
  };
  
function HomeComponent() {
  return (
	<React.Fragment>
	<div style={styles}>
		
		<Carousel>
			<div>
            <img src="/assets/images/img15.jpg" alt="cafe" />
				<p className="cafe">Cafe</p>
			</div>
			<div>
				<img src="/assets/images/img16.jpg" alt="cafe"/>
				<p className="Cafe">Cafe</p>
			</div>
			<div>
				<img src="/assets/images/img17.jpg" alt="cafe" />
				<p className="Cafe">Cafe</p>
			</div>
			<div>
				<img src="/assets/images/img18.jpg" alt="cafe"/>
				<p className="Cafe">Cafe</p>
			</div>
		</Carousel>

	</div>
	</React.Fragment>
  );
}

export default HomeComponent; 

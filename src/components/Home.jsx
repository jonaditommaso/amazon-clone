import React from 'react';
import Product from './Product';
import '../styles/home.css';


function Home() {

    return (
        <div className="home"> 
            <a href='https://www.primevideo.com/' target='_blank' rel="noopener noreferrer"> 
                <img 
                    className="home__image"
                    src="/assets/img/amazon_video.jpg"
                    alt=""
                /> 
            </a> 

            <div className="home__row">
                <div className="home__rowFlex">
                    <Product
                        id="12321341"
                        title="The Lean Startup"
                        price={11.96}
                        rating={5}
                        image="/assets/img/lean_startup.jpg"
                    />
                    <Product
                        id="49538094"
                        title="Mixer with K-beater"
                        subtitle=" Kenwood kMix Stand Mixer for Baking, Dough Hook and Whisk, 5 Litre Glass Bowl"
                        price={239.0}
                        rating={4}
                        image="/assets/img/beater.jpg"
                    />
                </div>
            </div>
            <div className="home__row">
                <div className="home__rowFlex">
                    <Product
                        id="4903850"
                        title="Watch Fitbit Pro"
                        subtitle=" LC49RG90SSUXEN Style"
                        price={199.99}
                        rating={3}
                        image="/assets/img/watch.jpg"
                    />
                    <Product
                        id="23445930"
                        title="Amazon Echo (3rd generation)"
                        subtitle=" | Smart speaker with Alexa, Charcoal Fabric"
                        price={98.99}
                        rating={5}
                        image="/assets/img/speaker.jpg"
                    />
                    <Product
                        id="3254354345"
                        title="New Apple iPad Pro Silver (4th Generation)"
                        subtitle=" - (12.9-inch, Wi-Fi, 128GB)"
                        price={598.99}
                        rating={4}
                        image="/assets/img/ipad.jpg"
                    />
                </div>
            </div>
            <div className="home__row">
                <div className="home__rowFlex">
                    <Product
                        id="90829332"
                        title="Monitor Curved LED Samsung 49'"
                        subtitle=" LCRG90 Gaming Ultra Wide Dual 5120x1440"
                        price={1094.98}
                        rating={4}
                        image="/assets/img/monitor.jpg"
                    />
                </div>
            </div>    
        </div>
    );
}

export default Home;
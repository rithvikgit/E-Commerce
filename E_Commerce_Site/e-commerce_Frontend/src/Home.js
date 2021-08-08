import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img className="home__image" src="/Banner.png" />

        <div className="home__row">
          <Product
            id="1"
            title="The Rudest Book Ever Paperback"
            price={350.00}
            rating={5}
            image="/Book.jpg"
          />
          <Product 
            id="2"
            title="Lenovo Legion Y540 9th Gen Core Intel I5 15.6 inch FHD Gaming Laptop-Lenovo 2TB External Hard Drive"
            price={76759.00}
            rating={5}
            image="/laptop.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="3"
            title="Apple iPhone 11 Pro (64 gb)"
            price={99599.00}
            rating={4}
            image="/iphone.jpg"
          />
          <Product
            id="4"
            title="Fossil Machine Chronograph Men's Watch - FS4487"
            price={9495.00}
            rating={4}
            image="/watch.jpg"
          />
          <Product
            id="5"
            title="Whirlpool 355 L 3 Star Frost Free Double Door Refrigerator"
            price={36980.00}
            rating={4}
            image="/fridge.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="6"
            title="Samsung 138 cm (55 Inches) Wondertainment Series Ultra HD LED Smart TV UA55TUE60AKXXL"
            price={51990.00}
            rating={4}
            image="/tv.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id="7"
            title="Van Heusen Athleisure Men's Solid Regular Fit Polo"
            price={999.00}
            rating={4}
            image="/shirt.webp"
          />
          <Product
            id="8"
            title="Nike WearalldayMen's Shoe Casuals For Men  (White)"
            price={4995.00}
            rating={4}
            image="/shoe.jpeg"
          />
          <Product
            id="9"
            title="Under Armour Women's Cap"
            price={999.00}
            rating={4}
            image="/cap.jpg"
          />
           <Product
            id="10"
            title="GUESS Mens GU6941"
            price={8400.00}
            rating={5}
            image="/shades.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;

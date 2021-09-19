import React from "react";
import "./Home.css";
import Product from "./Product";
function Home() {
  return (
    <div className='home'>
      <img
        className='home__image'
        src='https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg'
        alt='home-page-image'
      />
      <div className="home__row">
      <Product
        id='35456'
        title='Mouse Pad'
        image='https://m.media-amazon.com/images/I/61SAa5qiaIL._AC_UY327_QL65_.jpg'
        price={254}
        rating={3}
      />
       <Product
        id='35456'
        title='Computers & Accessories'
        image='https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/July/amazonbasics_520x520._SY304_CB442725065_.jpg'
        price={254}
        rating={5}
      />
    
     </div>

    <div className="home__row">
    <Product
        id='35456'
        title='Comfy Styles for Her'
        image='https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_WomenFashion_Sweatshirt_Quad_Cat_1x._SY116_CB418609101_.jpg'
        price={254}
        rating={5}
      /> <Product
      id='35456'
      title='Gaming Accessories'
      image='https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/June/Fuji_Quad_Headset_1x._SY116_CB667159060_.jpg'
      price={254}
      rating={5}
    /> <Product
    id='35456'
    title='Explore home bedding'
    image='https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_Laptops_379x304_1X_en_US._SY304_CB418608471_.jpg'
    price={254}
    rating={5}
  />
    </div>
    <div className="home__row">
    <Product
        id='354556'
        title=' Oculus'
        image='https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/June/Fuji_Dash_Oculus_1x._SY304_CB667158353_.jpg'
        price={254}
        rating={3}
      />
    </div>


    </div>
  );
}

export default Home;

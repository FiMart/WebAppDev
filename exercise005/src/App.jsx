import "./App.css";
import React from "react";
import Foodbox from "./components/Foodbox";

class App extends React.Component {
  render() {
    const foodboxdata = [
      {
        key: 0,
        header: "อาหารคาว",
        subheader: "ข้าวผัด",
        detail:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quis lacus eget risus faucibus pellentesque a in mauris. Donec elit ex, efficitur sed tellus non, rutrum ullamcorper arcu. Sed pulvinar nisi et hendrerit pretium. Aliquam sed nibh eleifend, egestas erat sit amet, hendrerit justo. Praesent accumsan mattis nibh, vitae fermentum eros suscipit a. Sed diam tortor, porta vel sem nec, porttitor efficitur massa. Cras vehicula tempus aliquet. Nullam pellentesque ornare justo eget luctus. Quisque lacus sem, vestibulum ut dui eget, mollis molestie.",
        imgalt: "รูปข้าวผัด",
        imgsrc: "https://i.ytimg.com/vi/VEDycvxbMYw/maxresdefault.jpg",
      },
      {
        key: 1,
        header: "อาหารหวาน",
        subheader: "บัวลอย",
        detail:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quis lacus eget risus faucibus pellentesque a in mauris. Donec elit ex, efficitur sed tellus non, rutrum ullamcorper arcu. Sed pulvinar nisi et hendrerit pretium. Aliquam sed nibh eleifend, egestas erat sit amet, hendrerit justo. Praesent accumsan mattis nibh, vitae fermentum eros suscipit a. Sed diam tortor, porta vel sem nec, porttitor efficitur massa. Cras vehicula tempus aliquet. Nullam pellentesque ornare justo eget luctus. Quisque lacus sem, vestibulum ut dui eget, mollis molestie.",
        imgalt: "รูปบัวลอย",
        imgsrc: "https://lamphuonline.com/images/00-2022/bua-loi-kaiwan.jpg",
      },
    ];

    return (
      <div className="App">
        <h1>โหวตอาหาร</h1>
        {foodboxdata.map((data) => (
          <Foodbox
            key={data.header}
            header={data.header}
            subheader={data.subheader}
            detail={data.detail}
            imgalt={data.imgalt}
            imgsrc={data.imgsrc}
          />
        ))}
      </div>
    );
  }
}

export default App;

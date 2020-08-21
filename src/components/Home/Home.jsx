import React, { Component } from "react"
import ItemsCarousel from 'react-items-carousel';
import "./Home.scss"
import image1 from "../../assets/1.jpg"
import image2 from "../../assets/2.jpg"
import image3 from "../../assets/3.jpg"
import image4 from "../../assets/4.jpg"

const images = [image1, image2, image3, image4];
const finalImages = images.map(
    (image) =>
        <div className="image">
            <img src={image} />
        </div>
)

class Home extends Component {
    state = {
        activeItemIndex: 0,
    };
    getInfo(index) {
        if (index< 2) {
            return "info1"
        }else if (index>= 2 && index< 4) {
            return "info2"
        }
    }
    changeActiveItem = (activeItemIndex) => this.setState({ activeItemIndex });
    render() {
        const {
            activeItemIndex,
        } = this.state;
        const {
            changeActiveItem,
            getInfo
        } = this
        return (
            <div className="home-container">
                <div className="carousel-container">
                    <ItemsCarousel
                        infiniteLoop
                        numberOfCards={2}
                        gutter={12}
                        slidesToScroll={2}

                        requestToChangeActive={changeActiveItem}
                        activeItemIndex={activeItemIndex}
                        activePosition={'center'}

                        chevronWidth={24}
                        rightChevron={<span className="chevron">{'>'}</span>}
                        leftChevron={<span className="chevron">{'<'}</span>}
                        outsideChevron
                    >
                        {finalImages}
                    </ItemsCarousel>
                </div>
                <div className="information-container">
                    {getInfo(activeItemIndex)}
                </div>
            </div>
        )
    }
}

export default Home;
import React, { Component } from "react"
import { Stress, Solution, Introduction} from "../index"
import ItemsCarousel from 'react-items-carousel';
import { Button } from 'antd';
import 'antd/dist/antd.css';
import "./Home.scss"
import { RightOutlined, LeftOutlined} from '@ant-design/icons'
import image1 from "../../assets/1.jpg"
import image2 from "../../assets/2.jpg"
import image3 from "../../assets/3.jpg"
import image4 from "../../assets/4.jpg"
import image5 from "../../assets/5.jpg"
import image6 from "../../assets/6.jpg"

const images = [image1, image2, image3, image4, image5, image6, image5, image6];
const finalImages = images.map(
    (image) =>
        <div className="carousel-image">
            <img src={image} alt="this images is not found" />
        </div>
)

class Home extends Component {
    state = {
        activeItemIndex: 1,
    };
    getInfo = (index) => {
        const { activeItemIndex} = this.state
        if (activeItemIndex === 1) {
            return <Introduction />
        } else if(activeItemIndex === 3){
            return <Stress />
        } else if(activeItemIndex === 5){
            return <Solution />
        } else {
            return "Informacion4"
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
                        //infiniteLoop
                        numberOfCards={2}
                        gutter={12}
                        slidesToScroll={2}

                        requestToChangeActive={changeActiveItem}
                        activeItemIndex={activeItemIndex}
                        activePosition={'center'}

                        chevronWidth={24}
                        rightChevron={<Button style={{position:'relative' ,right: '5px', paddingTop:'5px'}} type="default" shape="circle" icon={<RightOutlined />} />}
                        leftChevron={<Button style={{ position: 'relative', left: '5px', paddingTop: '5px' }} type="default" shape="circle" icon={<LeftOutlined />} />}
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
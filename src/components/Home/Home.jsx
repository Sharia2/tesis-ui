import React, { Component } from "react"
import { Stress } from "../index"
import ItemsCarousel from 'react-items-carousel';
import { Button, Col } from 'antd';
import 'antd/dist/antd.css';
import { RightOutlined, LeftOutlined} from '@ant-design/icons'
import "./Home.scss"
import image1 from "../../assets/1.jpg"
import image2 from "../../assets/2.jpg"
import image3 from "../../assets/3.jpg"
import image4 from "../../assets/4.jpg"

const images = [image1, image2, image3, image4];
const finalImages = images.map(
    (image) =>
        <div className="carousel-image">
            <img src={image} />
        </div>
)

class Home extends Component {
    state = {
        activeItemIndex: 0,
        firstPage: true
    };
    getInfo = (index) => {
        const { firstPage } = this.state;
        if (firstPage) {
            return "infor1"
        } else {
            return <Stress />
        }
    }
    changeActiveItem = (activeItemIndex) => this.setState({ activeItemIndex, firstPage: !this.state.firstPage });
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
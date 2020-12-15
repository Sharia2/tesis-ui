import React, { Component } from "react"
import { Stress, Solution, Introduction} from "../index"
import ItemsCarousel from 'react-items-carousel';
import { Button } from 'antd';
import 'antd/dist/antd.css';
import "./Home.scss"
import { RightOutlined, LeftOutlined} from '@ant-design/icons'
import image1 from "../../assets/1.png"
import image2 from "../../assets/2.png"
import image3 from "../../assets/3.png"


const images = [image1, image2, image3];
const finalImages = images.map(
    (image) =>
        <div className="carousel-image">
            <img src={image} alt="this images is not found" />
        </div>
)

class Home extends Component {
    state = {
        activeItemIndex: 0,
    };
    getInfo = (index) => {
        const { activeItemIndex} = this.state
        if (activeItemIndex === 0) {
            return <Solution />
        } else if(activeItemIndex === 1){
            return <Stress />
        } else {
            return <Introduction /> 
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
                        numberOfCards={1}
                        gutter={12}
                        slidesToScroll={1}

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
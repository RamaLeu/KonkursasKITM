import React, {useState} from 'react'
import HTMLFlipBook from "react-pageflip";
import title from '../assets/Main.png'
import one from '../assets/1.jpg'
import two from '../assets/2.jpg'
import three from '../assets/3.jpg'
import four from '../assets/4.jpg'
import five from '../assets/5.jpg'
import six from '../assets/6.jpg'
import seven from '../assets/7.jpg'
import eight from '../assets/8.jpg'
import nine from '../assets/9.jpg'
import ten from '../assets/10.jpg'
import eleven from '../assets/11.jpg'
import twelve from '../assets/12.jpg'
import thirt from '../assets/13.jpg'
import fourth from '../assets/14.jpg'
import fifth from '../assets/15.jpg'

class Flipbook extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            extend: false
        };
    }

    render() {
        return(
        <div class="flipbook">
            <HTMLFlipBook 
            width={500}
            height={800}
            size="stretch"
            minWidth={315}
            maxWidth={1000}
            showCover={true}
            className="demo-book">
                <div className="my-page"><img src={title}></img></div>
                <div className="my-page"><img src={one}></img></div>
                <div className="my-page"><img src={two}></img></div>
                <div className="my-page"><img src={three}></img></div>
                <div className="my-page"><img src={four}></img></div>
                <div className="my-page"><img src={five}></img></div>
                <div className="my-page"><img src={six}></img></div>
                <div className="my-page"><img src={seven}></img></div>
                <div className="my-page"><img src={eight}></img></div>
                <div className="my-page"><img src={nine}></img></div>
                <div className="my-page"><img src={ten}></img></div>
                <div className="my-page"><img src={eleven}></img></div>
                <div className="my-page"><img src={twelve}></img></div>
                <div className="my-page"><img src={thirt}></img></div>
                <div className="my-page"><img src={fourth}></img></div>
                <div className="my-page"><img src={fifth}></img></div>
            </HTMLFlipBook>
        </div>
    )}
}

export default Flipbook

import React, {useState} from 'react'
import menu from '../assets/burger.png';
import FadeIn from 'react-fade-in';
import logo from '../assets/KITM.jpg'


function Header(){

    let [menuPressed, menuClick] = useState(false)

    const change = () =>{
        if (menuPressed === true){
            menuClick(false)
        }
        else{
            menuClick(true)
        }


    const menu = () =>{
        return(
            <div>yeehaw</div>
        )
    }
    }
    return (
        <header>
            <div class="logo">
            <img src={logo}/>
            </div>
            <div class="banner">
                <div class="burger">
                    <a onClick={() => change()}><img class="menu" src={menu}></img></a>
                </div>
            {menuPressed===true &&<FadeIn className="menuscreen">
                <img src={logo}/>
                <a href="http://kitm.lt"><div class="linkButn">Mokyklos Puslapis</div></a>
                <a href="https://www.facebook.com/kaunoitmokykla" ><div class="linkButn">Mokyklos Facebook</div></a>
                </FadeIn>}
            </div>
        </header>
    )
}

export default Header;

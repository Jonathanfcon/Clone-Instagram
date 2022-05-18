import Logo from "./images/logo.svg";
import ProfilePhoto from "./images/ProfilePhoto.jpg";
import { AiOutlineSearch, AiFillHome } from 'react-icons/ai'
import { RiMessengerLine } from 'react-icons/ri'
import { MdHomeFilled, MdOutlineExplore } from 'react-icons/md'
import { BsPlusSquare } from 'react-icons/bs'
import { FiHeart } from 'react-icons/fi'
import { IconContext } from "react-icons";

import './style.css'

export function Header() {
    return (
        <header className="header">
          <div className='container'>
  
            <img className="logo" src={Logo} />
  
            <div className='input-fake'>
                <IconContext.Provider value={{ color: "#8e8e8e" }}>
                    <AiOutlineSearch className="react-icon" />
                </IconContext.Provider>
              <input placeholder="Pesquisar"/>
  
            </div>
  
            <div className="menu-icons">
                <IconContext.Provider value={{ size: '26px' }}>
                    <div>
                        <MdHomeFilled className="react-icon"/>
                    </div>
                    <div>
                        <RiMessengerLine className="react-icon"/>
                    </div>
                    <div>
                        <BsPlusSquare className="react-icon"/>
                    </div>
                    <div>
                        <MdOutlineExplore className="react-icon"/>
                    </div>
                    <div>
                        <FiHeart className="react-icon"/>    
                    </div>
                </IconContext.Provider>
                <img className="img-user" src={ProfilePhoto} />
            </div>
  
          </div>
        </header>
    );
  }
  
  export default Header;
  
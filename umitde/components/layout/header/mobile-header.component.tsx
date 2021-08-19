import React from 'react'


const MobileHeader: React.FC = () => {
    return (
        <>
        <div className="mobile_menu--overlay"></div>
        <div className="mobile_menu">
          <div className="mobile_menu--first">
            <div className="mobile_menu--logo">
              <a href="#" className="logo text">umitde<span className="logo--faded">mir</span></a>
              <a href="#" className="mobile_menu--closer"
                ><i className="far fa-times-circle"></i
              ></a>
            </div>
            <div className="mobile_menu--menu">
              <ul>
                <li><a href="#">Blog</a></li>
                <li><a href="#" className="active">Hakkımda</a></li>
              </ul>
            </div>
          </div>
          <div className="mobile_menu--last">
            <button className="white_button with_arrow">
              İletişime geç <i className="fas fa-arrow-right"></i>
            </button>
          </div>
        </div>
        </>
    )
}

export default MobileHeader;
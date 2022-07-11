import React from 'react'
import './menu.css';
import Outline from '../../assets/image.png';

const Menu = () => {
  return (
    <div id="Menu" className='sbb__menu'>
        <div>
            <h1>Meny</h1>
            <h2>En lista över våra helt hemmagjorda burgare</h2>
        </div>

        <div className='sbb__menu-container'>
            <img src={Outline} className='sbb__menu-img' width="500px"/>
            <div className='sbb__menu-itemlist'>
                <div className='sbb__menu-item'>
                        <div className='sbb__menu-item-row'>
                        <div className="sbb__menu-item-left">Brooklyn</div>
                        <div className="sbb__menu-item-dotted"></div>
                        <div className="sbb__menu-item-right">174:-</div>
                    </div>
                    <div className='sbb__menu-item-content'>
                        2x90g högrev, briochebröd, hellmans mayo, FYRA skivor cheddar, ketchup, senap
                    </div>
                </div>

                <div className='sbb__menu-item'>
                        <div className='sbb__menu-item-row'>
                        <div className="sbb__menu-item-left">Bronx</div>
                        <div className="sbb__menu-item-dotted"></div>
                        <div className="sbb__menu-item-right">174:-</div>
                    </div>
                    <div className='sbb__menu-item-content'>
                        2x90g högrev, briochebröd, cheddarost, bacon, sallad, karameliserad lök
                    </div>
                </div>

                <div className='sbb__menu-item'>
                        <div className='sbb__menu-item-row'>
                        <div className="sbb__menu-item-left">Queens</div>
                        <div className="sbb__menu-item-dotted"></div>
                        <div className="sbb__menu-item-right">174:-</div>
                    </div>
                    <div className='sbb__menu-item-content'>
                        2x90g högrev, briochebröd, dillpicklad gurka, sirachaketchup, isad silverlök, cheddarost, fermenterad
                        vitlöksmayo, sallad
                    </div>
                </div>

                <div className='sbb__menu-item'>
                        <div className='sbb__menu-item-row'>
                        <div className="sbb__menu-item-left">Staten island</div>
                        <div className="sbb__menu-item-dotted"></div>
                        <div className="sbb__menu-item-right">174:-</div>
                    </div>
                    <div className='sbb__menu-item-content'>
                        2x90g högrev, briochebröd, cheddarost, tryffelmayo, sallad, picklad rödlök, rostad lök
                    </div>
                </div>

                <div className='sbb__menu-item'>
                        <div className='sbb__menu-item-row'>
                        <div className="sbb__menu-item-left">Manhattan</div>
                        <div className="sbb__menu-item-dotted"></div>
                        <div className="sbb__menu-item-right">166:-</div>
                    </div>
                    <div className='sbb__menu-item-content'>
                        Halloumiost, briochebröd, jalapenomajonäs, tomat, picklad lök, sallad
                    </div>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Menu
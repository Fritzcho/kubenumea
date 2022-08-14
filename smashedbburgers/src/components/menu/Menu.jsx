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
            
            <img src={Outline} className='sbb__menu-img'/>
            <div className='sbb__menu-itemlist'>
                <div className='sbb__menu-item'>
                    <div className='sbb__menu-item-row'>
                        <div className="sbb__menu-item-left">Brooklyns Treat</div>
                        <div className="sbb__menu-item-dotted"></div>
                        <div className="sbb__menu-item-right">119:-</div>
                    </div>
                    <div className='sbb__menu-item-content'>
                        Brioche bröd, Kött, 2x Cheddar ost, Hamburgerdressing, 
                        Krispsallad & Picklad rödlök
                    </div>
                </div>

                <div className='sbb__menu-item'>
                    <div className='sbb__menu-item-row'>
                        <div className="sbb__menu-item-left">Bronx Burning</div>
                        <div className="sbb__menu-item-dotted"></div>
                        <div className="sbb__menu-item-right">119:-</div>
                    </div>
                    <div className='sbb__menu-item-content'>
                        Brioche bröd, Kött, Cheddarost, Hellmans mayo, Färsk chili, 
                        Jalapeños & Sriracha (smashed chili cheese)
                    </div>
                </div>

                <div className='sbb__menu-item'>
                    <div className='sbb__menu-item-row'>
                        <div className="sbb__menu-item-left">Upper East Side</div>
                        <div className="sbb__menu-item-dotted"></div>
                        <div className="sbb__menu-item-right">119:-</div>
                    </div>
                    <div className='sbb__menu-item-content'>
                        Brioche bröd, Kött, Cheddarost, Tryffelmayo, Krispsallad, Tomat, 
                        Picklad rödlök & Rostad lök
                    </div>
                </div>

                <div className='sbb__menu-item'>
                    <div className='sbb__menu-item-row'>
                        <div className="sbb__menu-item-left">Harlem Street</div>
                        <div className="sbb__menu-item-dotted"></div>
                        <div className="sbb__menu-item-right">119:-</div>
                    </div>
                    <div className='sbb__menu-item-content'>
                        Brioche bröd, Kött, Cheddarost, Sriracha ketchup, 
                        Smashed onion, Dillpicklad gurka & Fermenterad vitlöksmayo
                    </div>
                </div>

                <div className='sbb__menu-item'>
                    <div className='sbb__menu-item-row'>
                        <div className="sbb__menu-item-left">Staten Islands Finest</div>
                        <div className="sbb__menu-item-dotted"></div>
                        <div className="sbb__menu-item-right">119:-</div>
                    </div>
                    <div className='sbb__menu-item-content'>
                        Brioche bröd, Kött, Cheddarost, Bacon, Smashed onion, 
                        Chipotle majonnäs, Krispsallad & Tomat
                    </div>
                </div>

                <div className='sbb__menu-item'>
                    <div className='sbb__menu-item-row'>
                        <div className="sbb__menu-item-left">Queens</div>
                        <div className="sbb__menu-item-dotted"></div>
                        <div className="sbb__menu-item-right">119:-</div>
                    </div>
                    <div className='sbb__menu-item-content'>
                        Brioche bröd, Halloumi ost, jalapeño majonnäs, Krispsallad & Picklad rödlök
                    </div>
                </div>

                
            </div>
        </div>
        <div className='sbb__menu-addons'>
            <div className='sbb__addons-left'>
                <h2 className='sbb__addon-subtitle'>Tillbehör</h2>
                <div className='sbb__addon-item'>
                    <div className='sbb__menu-item-row'>
                        <div className="sbb__menu-item-left light">Dirty Fries</div>
                        <div className="sbb__menu-item-dotted"></div>
                        <div className="sbb__menu-item-right light">69:-</div>
                    </div>
                    <div className='sbb__menu-item-row'>
                        <div className="sbb__menu-item-left light">Sötpommes</div>
                        <div className="sbb__menu-item-dotted"></div>
                        <div className="sbb__menu-item-right light">25:-</div>
                    </div>
                    <div className='sbb__menu-item-row'>
                        <div className="sbb__menu-item-left light">Pommes Frites</div>
                        <div className="sbb__menu-item-dotted"></div>
                        <div className="sbb__menu-item-right light">25:-</div>
                    </div>
                    <div className='sbb__menu-item-row'>
                        <div className="sbb__menu-item-left light">Extra Kött</div>
                        <div className="sbb__menu-item-dotted"></div>
                        <div className="sbb__menu-item-right light">25:-</div>
                    </div>
                    <div className='sbb__menu-item-row'>
                        <div className="sbb__menu-item-left light">Bacon</div>
                        <div className="sbb__menu-item-dotted"></div>
                        <div className="sbb__menu-item-right light">20:-</div>
                    </div>
                    <div className='sbb__menu-item-row'>
                        <div className="sbb__menu-item-left light">Chili Cheese, 6st</div>
                        <div className="sbb__menu-item-dotted"></div>
                        <div className="sbb__menu-item-right light">30:-</div>
                    </div>
                    <div className='sbb__menu-item-row'>
                        <div className="sbb__menu-item-left light">Lökringar, 6st</div>
                        <div className="sbb__menu-item-dotted"></div>
                        <div className="sbb__menu-item-right light">30:-</div>
                    </div>
                    <div className='sbb__menu-item-row'>
                        <div className="sbb__menu-item-left light">Läsk</div>
                        <div className="sbb__menu-item-dotted"></div>
                        <div className="sbb__menu-item-right light">25:-</div>
                    </div>
                </div>
            </div>
            <div className='sbb__addons-right'>
                <h2 className='sbb__addon-subtitle'>Dippsåser</h2>
                <div className='sbb__menu-item-row'>
                    <div className="sbb__menu-item-left light">Hamburgerdressing</div>
                    <div className="sbb__menu-item-dotted"></div>
                    <div className="sbb__menu-item-right light">15:-</div>
                </div>
                <div className='sbb__menu-item-row'>
                    <div className="sbb__menu-item-left light">Chipotle Majonnäs</div>
                    <div className="sbb__menu-item-dotted"></div>
                    <div className="sbb__menu-item-right light">15:-</div>
                </div>
                <div className='sbb__menu-item-row'>
                    <div className="sbb__menu-item-left light">Siracha</div>
                    <div className="sbb__menu-item-dotted"></div>
                    <div className="sbb__menu-item-right light">15:-</div>
                </div>
                <div className='sbb__menu-item-row'>
                    <div className="sbb__menu-item-left light">Hellmans Majonnäs</div>
                    <div className="sbb__menu-item-dotted"></div>
                    <div className="sbb__menu-item-right light">15:-</div>
                </div>
                <div className='sbb__menu-item-row'>
                    <div className="sbb__menu-item-left light">Smältost</div>
                    <div className="sbb__menu-item-dotted"></div>
                    <div className="sbb__menu-item-right light">20:-</div>
                </div>
                <div className='sbb__menu-item sbb__menu-btncontainer'>
                    <button className='sbb__menu-button'>Beställ här!</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Menu
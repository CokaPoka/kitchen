import React, { useState } from 'react';
import './Packages.css'
import 'aos/dist/aos.css';

const Packages = () => {

    const [cena, setCena] = useState('89');
    const [cenaKT, setCenaKT] = useState('129');
    const [cenaOpenSpace, setCenaOpenSpace] = useState('189');

    const handleCena = (e) => {
        if (e.target.value === '5') {
            setCena(89)
        }
        if (e.target.value === '10') {
            setCena(129)
        }
        if (e.target.value > 10) {
            setCena(169)
        }
    }

    const handleCenaKT = (e) => {
        if (e.target.value === '10') {
            setCenaKT(129)
        }
        if (e.target.value === '20') {
            setCenaKT(169)
        }
        if (e.target.value > 20) {
            setCenaKT(209)
        }
    }

    const handleCenaOpenSpace = (e) => {
        if (e.target.value === '15') {
            setCenaOpenSpace(189)
        }
        if (e.target.value === '25') {
            setCenaOpenSpace(249)
        }
        if (e.target.value > 25) {
            setCenaOpenSpace(309)
        }
    }


    return (
        <div id="packages-container" data-aos="fade-in" data-aos-duration="3000" data-aos-delay="400">
            <h1>Paketi</h1>
            <div className="package-items-container">
                <div className="package-item">
                    <div className="package-item-top">
                        <h1>K</h1>
                    </div>
                    <div className="package-item-middle">
                        <p>
                            <span role="img" aria-label="check">✔️</span> crteži kuhinje sa merama
                            </p>
                        <hr></hr>
                        <p>
                            <span role="img" aria-label="check">✔️</span> osnova prostorije sa rasporedom elemenata
                            </p>
                        <hr></hr>
                        <p>
                            <span role="img" aria-label="check">✔️</span> odabir materijala i okova
                            </p>
                        <hr></hr>
                        <p>
                            <span role="img" aria-label="check">✔️</span> spisak uređaja za kupovinu
                            </p>
                        <hr></hr>
                        <p>
                            <span role="img" aria-label="check">✔️</span> do dve varijacije projekta prema vašim željama
                            </p>
                        <hr></hr>
                        <p>
                            <span role="img" aria-label="check">✔️</span> 3D foto-render cele kuhinje iz više uglova + VIDEO
                            </p>
                        <hr></hr>
                        <p>
                            <span role="img" aria-label="check">✔️</span> podrška u realizaciji projekta
                            </p>
                    </div>
                    <div className="package-item-bottom">
                        <div className="kitchen-size-container">
                            <p className="kitchen-size-title">Veličina kuhinje:</p>
                            <select className="kitchen-size-select" onChange={(e) => { handleCena(e) }}>
                                <option value='5'>5</option>
                                <option value='10'>10</option>
                                <option value='11'>&#x3e; 10</option>
                            </select>
                            <p className="kitchen-size-title-squared">m</p>
                        </div>
                        <h4 style={{ color: "#fff" }}>cena</h4>
                        <h2 style={{ color: "#fff", paddingBottom:"0px" }}>{cena} €</h2>
                        <a href="/questionsheet">
                            <button className="button type1" >poruči</button>
                        </a>
                    </div>
                </div>
                <div className="package-item">
                    <div className="package-item-top">
                        <h1>K+T</h1>
                    </div>
                    <div className="package-item-middle">
                        <p>
                            <span role="img" aria-label="check">✔️</span> crteži kuhinje + trpezarije sa merama
                            </p>
                        <hr></hr>
                        <p>
                            <span role="img" aria-label="check">✔️</span> osnova prostorije sa rasporedom elemenata
                            </p>
                        <hr></hr>
                        <p>
                            <span role="img" aria-label="check">✔️</span> odabir materijala i okova
                            </p>
                        <hr></hr>
                        <p>
                            <span role="img" aria-label="check">✔️</span> spisak uređaja za kupovinu
                            </p>
                        <hr></hr>
                        <p>
                            <span role="img" aria-label="check">✔️</span> do dve varijacije projekta prema vašim željama
                            </p>
                        <hr></hr>
                        <p>
                            <span role="img" aria-label="check">✔️</span> 3D foto-render cele kuhinje + trpezarije iz više uglova + VIDEO
                            </p>
                        <hr></hr>
                        <p>
                            <span role="img" aria-label="check">✔️</span> podrška u realizaciji projekta
                            </p>
                    </div>
                    <div className="package-item-bottom">
                        <div className="kitchen-size-container">
                            <p className="kitchen-size-title">Veličina kuhinje:</p>
                            <select className="kitchen-size-select" onChange={(e) => { handleCenaKT(e) }}>
                                <option value='10'>10</option>
                                <option value='20'>20</option>
                                <option value='21'>&#x3e; 20</option>
                            </select>
                            <p className="kitchen-size-title-squared">m</p>
                        </div>
                        <h4 style={{ color: "#fff" }}>cena</h4>
                        <h2 style={{ color: "#fff", paddingBottom: "0px" }}>{cenaKT} €</h2>
                        <a href="/questionsheet">
                            <button className="button type1" >poruči</button>
                        </a>
                    </div>
                </div>
                <div className="package-item">
                    <div className="package-item-top">
                        <h1>OPEN SPACE</h1>
                    </div>
                    <div className="package-item-middle">
                        <p>
                            <span role="img" aria-label="check">✔️</span> crteži kuhinje + trpezarije + dnevnog boravka sa merama
                            </p>
                        <hr></hr>
                        <p>
                            <span role="img" aria-label="check">✔️</span> osnova prostorije sa rasporedom elemenata
                            </p>
                        <hr></hr>
                        <p>
                            <span role="img" aria-label="check">✔️</span> odabir materijala i okova
                            </p>
                        <hr></hr>
                        <p>
                            <span role="img" aria-label="check">✔️</span> spisak uređaja za kupovinu
                            </p>
                        <hr></hr>
                        <p>
                            <span role="img" aria-label="check">✔️</span> do dve varijacije projekta prema vašim željama
                            </p>
                        <hr></hr>
                        <p>
                            <span role="img" aria-label="check">✔️</span> 3D foto-render cele kuhinje + trpezarije + dnevnog boravka iz više uglova + VIDEO
                            </p>
                        <hr></hr>
                        <p>
                            <span role="img" aria-label="check">✔️</span> podrška u realizaciji projekta
                            </p>
                    </div>
                    <div className="package-item-bottom">
                        <div className="kitchen-size-container">
                            <p className="kitchen-size-title">Veličina kuhinje:</p>
                            <select className="kitchen-size-select" onChange={(e) => { handleCenaOpenSpace(e) }}>
                                <option value='15'>15</option>
                                <option value='25'>25</option>
                                <option value='26'>&#x3e; 25</option>
                            </select>
                            <p className="kitchen-size-title-squared">m</p>
                        </div>
                        <h4 style={{ color: "#fff" }}>cena</h4>
                        <h2 style={{ color: "#fff", paddingBottom: "0px" }}>{cenaOpenSpace} €</h2>
                        <a href="/questionsheet">
                            <button className="button type1">poruči</button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Packages
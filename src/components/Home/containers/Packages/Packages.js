import React, { useState } from 'react';
import './Packages.css'
import 'aos/dist/aos.css';

const Packages = () => {

    const [cena, setCena] = useState('89');

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
                        <h3 style={{ color: "#fff" }}>cena</h3>
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
                        <h3 style={{ color: "#fff" }}>cena</h3>
                        <h2 style={{ color: "#fff" }}>149 €</h2>
                        <a href="/questionsheet">
                            <button className="button type1">poruči</button>
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
                        <h3 style={{ color: "#fff" }}>cena</h3>
                        <h2 style={{ color: "#fff" }}>219 €</h2>
                        <a href="/questionsheet">
                            <button className="button type1">poruči</button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

// // class Packages extends Component {
// //     constructor(props, context) {
// //         super(props, context);
// //         AOS.init();
// //     }

// //     componentWillReceiveProps() {
// //         AOS.refresh();
// //     }


//     // componentDidMount(){
//     //     var a = 0;
//     //     $(window).scroll(function () {
//     //         var oTop = $('#counter').offset().top - window.innerHeight;
//     //         if (a === 0 && $(window).scrollTop() > oTop) {
//     //             $('.counter-value').each(function () {
//     //                 var $this = $(this),
//     //                     countTo = $this.attr('data-count');
//     //                 $({
//     //                     countNum: $this.text()
//     //                 }).animate({
//     //                     countNum: countTo
//     //                 },
//     //                     {
//     //                         duration: 3000,
//     //                         easing: 'swing',
//     //                         step: function () {
//     //                             $this.text(Math.floor(this.countNum));
//     //                         },
//     //                         complete: function () {
//     //                             $this.text(this.countNum);
//     //                             //alert('finished');
//     //                         }
//     //                     });
//     //             });
//     //             a = 1;
//     //         }
//     //     });
//     // }

//     // render() {
//     //     return (
//     //         <div id="packages-container" data-aos="fade-in" data-aos-duration="3000" data-aos-delay="400">
//     //             <h1>Paketi</h1>
//     //             <div className="package-items-container">
//     //                 <div className="package-item">
//     //                     <div className="package-item-top">
//     //                         <h1>K</h1>
//     //                     </div>
//     //                     <div className="package-item-middle">
//     //                         <p>
//     //                             ✔️ crteži kuhinje sa merama
//     //                         </p>
//     //                         <hr></hr>
//     //                         <p>
//     //                             ✔️ osnova prostorije sa rasporedom elemenata
//     //                         </p>
//     //                         <hr></hr>
//     //                         <p>
//     //                             ✔️ odabir materijala i okova
//     //                         </p>
//     //                         <hr></hr>
//     //                         <p>
//     //                             ✔️ spisak uređaja za kupovinu
//     //                         </p>
//     //                         <hr></hr>
//     //                         <p>
//     //                             ✔️ do dve varijacije projekta prema vašim željama
//     //                         </p>
//     //                         <hr></hr>
//     //                         <p>
//     //                             ✔️ 3D foto-render cele kuhinje iz više uglova + VIDEO
//     //                         </p>
//     //                         <hr></hr>
//     //                         <p>
//     //                             ✔️ podrška u realizaciji projekta
//     //                         </p>
//     //                     </div>
//     //                     <div className="package-item-bottom">
//     //                         <h3 style={{color:"#fff"}}>cena</h3>
//     //                         <h2 style={{ color: "#fff" }}>89 €</h2>
//     //                         <button class="button type1" >poruči</button>
//     //                     </div>
//     //                 </div>
//     //                 <div className="package-item">
//     //                     <div className="package-item-top">
//     //                         <h1>K+T</h1>
//     //                     </div>
//     //                     <div className="package-item-middle">
//     //                         <p>
//     //                             ✔️ crteži kuhinje + trpezarije sa merama
//     //                         </p>
//     //                         <hr></hr>
//     //                         <p>
//     //                             ✔️ osnova prostorije sa rasporedom elemenata
//     //                         </p>
//     //                         <hr></hr>
//     //                         <p>
//     //                             ✔️ odabir materijala i okova
//     //                         </p>
//     //                         <hr></hr>
//     //                         <p>
//     //                             ✔️ spisak uređaja za kupovinu
//     //                         </p>
//     //                         <hr></hr>
//     //                         <p>
//     //                             ✔️ do dve varijacije projekta prema vašim željama
//     //                         </p>
//     //                         <hr></hr>
//     //                         <p>
//     //                             ✔️ 3D foto-render cele kuhinje + trpezarije iz više uglova + VIDEO
//     //                         </p>
//     //                         <hr></hr>
//     //                         <p>
//     //                             ✔️ podrška u realizaciji projekta
//     //                         </p>
//     //                     </div>
//     //                     <div className="package-item-bottom">
//     //                         <h3 style={{ color: "#fff" }}>cena</h3>
//     //                         <h2 style={{ color: "#fff" }}>149 €</h2>
//     //                         <button class="button type1">poruči</button>
//     //                     </div>
//     //                 </div>
//     //                 <div className="package-item">
//     //                     <div className="package-item-top">
//     //                         <h1>OPEN SPACE</h1>
//     //                     </div>
//     //                     <div className="package-item-middle">
//     //                         <p>
//     //                             ✔️ crteži kuhinje + trpezarije + dnevnog boravka sa merama
//     //                         </p>
//     //                         <hr></hr>
//     //                         <p>
//     //                             ✔️ osnova prostorije sa rasporedom elemenata
//     //                         </p>
//     //                         <hr></hr>
//     //                         <p>
//     //                             ✔️ odabir materijala i okova
//     //                         </p>
//     //                         <hr></hr>
//     //                         <p>
//     //                             ✔️ spisak uređaja za kupovinu
//     //                         </p>
//     //                         <hr></hr>
//     //                         <p>
//     //                             ✔️ do dve varijacije projekta prema vašim željama
//     //                         </p>
//     //                         <hr></hr>
//     //                         <p>
//     //                             ✔️ 3D foto-render cele kuhinje + trpezarije + dnevnog boravka iz više uglova + VIDEO
//     //                         </p>
//     //                         <hr></hr>
//     //                         <p>
//     //                             ✔️ podrška u realizaciji projekta
//     //                         </p>
//     //                     </div>
//     //                     <div className="package-item-bottom">
//     //                         <h3 style={{ color: "#fff" }}>cena</h3>
//     //                         <h2 style={{ color: "#fff" }}>219 €</h2>
//     //                         <button class="button type1">poruči</button>
//     //                     </div>
//     //                 </div>
//     //             </div>
//                 {/* <div className="flippy-container">
//                     <Flippy className="flippy"
//                         flipOnHover={true}
//                         flipDirection="horizontal"
//                         ref={(r) => this.flippy = r}
//                         style={{ width: '250px', height: '350px' }}
//                     >
//                         <FrontSide
//                             style={{
//                                 backgroundColor: '#a3ccb6', display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", color:"#fff"
//                             }}
//                         >
//                             <h2>K</h2>
//                             <div id="counter" style={{ display: "flex", width: "80px", justifyContent: "space-between", alignItems: "center" }}>
//                                 <div className="counter-value" data-count="89" style={{ fontSize: "50px", fontFamily: "Exo 2", fontWeight: "bolder" }}>0</div>
//                                 <h1 style={{ fontSize: "50px", fontFamily: "Exo 2", fontWeight: "bolder" }}>€</h1>
//                             </div>
//                         </FrontSide>
//                         <BackSide
//                             style={{ backgroundColor: '#9e9e9e', textAligin: "center", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
//                             <h3>
//                                 KUHINJA
//                             </h3>
//                             <button className="button type1">poruci</button>
//                         </BackSide>
//                     </Flippy>
//                     <Flippy className="flippy"
//                         flipOnHover={true}
//                         flipDirection="horizontal"
//                         ref={(r) => this.flippy = r}
//                         style={{ width: '250px', height: '350px' }}
//                     >
//                         <FrontSide
//                             style={{
//                                 backgroundColor: '#a3ccb6', display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", color: "#fff"
//                             }}
//                         >
//                             <h2>K+T</h2>
//                             <div id="counter" style={{ display: "flex", width: "110px", justifyContent: "space-between", alignItems: "center" }}>
//                                 <div className="counter-value" data-count="149" style={{ fontSize: "50px", fontFamily: "Exo 2", fontWeight: "bolder" }}>0</div>
//                                 <h1 style={{ fontSize: "50px", fontFamily: "Exo 2", fontWeight: "bolder" }}>€</h1>
//                             </div>
//                         </FrontSide>
//                         <BackSide
//                             style={{ backgroundColor: '#9e9e9e', textAligin: "center", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
//                             <h3>
//                                 KUHINJA + TRPEZARIJA
//                             </h3>
//                             <button className="button type1">poruci</button>
//                         </BackSide>
//                     </Flippy>
//                     <Flippy className="flippy"
//                         flipOnHover={true}
//                         flipDirection="horizontal"
//                         ref={(r) => this.flippy = r}
//                         style={{ width: '250px', height: '350px' }}
//                     >
//                         <FrontSide
//                             style={{
//                                 backgroundColor: '#a3ccb6', display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", color: "#fff"
//                             }}
//                         >
//                             <h2>OPEN SPACE</h2>
//                             <div id="counter" style={{ display: "flex", width: "110px", justifyContent: "space-between", alignItems:"center" }}>
//                                 <div className="counter-value" data-count="219" style={{ fontSize: "50px", fontFamily: "Exo 2", fontWeight: "bolder" }}>0</div>
//                                 <h1 style={{ fontSize: "50px", fontFamily: "Exo 2", fontWeight: "bolder" }}>€</h1>
//                             </div>
//                         </FrontSide>
//                         <BackSide
//                             style={{ backgroundColor: '#9e9e9e', textAligin: "center", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
//                             <h3>
//                                 KUHINJA + TRPEZARIJA + DNEVNA SOBA
//                             </h3>
//                             <button class="button type1">poruci</button>
//                         </BackSide>
//                     </Flippy>
//                 </div> */}
// //             </div>
// //         )
// //     }
// // }

export default Packages
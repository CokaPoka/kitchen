import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import './QuestionSheet.css';
import axios from 'axios';
import AOS from 'aos';

const QuestionSheet = () => {

    AOS.init()

    const [file, setFile] = useState({});
    const [file2, setFile2] = useState({});
    const [file3, setFile3] = useState({});
    const [file4, setFile4] = useState({});
    const [message,setMessage] = useState('');

    const onClickHandler = () => {
        const formData = new FormData()
        formData.append('myimage1', file);
        formData.append('myimage2', file2);
        formData.append('myimage3', file3);
        formData.append('myimage4', file4);

        console.log(...formData);

        axios.post("http://localhost:4000/questionsheet", formData).then(res => {
            console.log(res.statusText)
        })
    }

    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('cokapokajelena_gmail_com', 'template_FuUMUmGL', e.target, 'user_0iylAGLRRt4r9xMlJh9Qd')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset();
        setMessage("Hvala! Usprešno ste popunili upitnik. Bićete kontaktirani u najkraćem mogućem roku.")
    }

    return (
        <div className="wrapper-question-sheet" data-aos="fade-in" data-aos-duration="3000" data-aos-delay="400">
            <div className="question-sheet-header">
                <div className="question-sheet-header-img">
                    <div className="question-sheet-content">
                        <h1 id="question-sheet-header-title">NARUČITE PROJEKAT KUHINJE / TRPEZARIJE / DNEVNOG BORAVKA</h1>
                    </div>
                </div>
            </div>
            <form className="questionsheet-form" onSubmit={(e) => { sendEmail(e); onClickHandler(e) }}>
                <div className="question-sheet-title">
                    <h1>POPUNITE NEOPHODNE PODATKE ZA CRTANJE KUHINJE / TRPEZARIJE / DNEVNOG BORAVKA:</h1>
                </div>
                <div className="question-container">
                    <h1>IZGLED KUHINJE</h1><br></br>
                    <h2>Izaberite stil Vaše kuhinje.</h2>
                    <h3>Ovo su tri osnovna stila kuhinje, ukoliko imate sliku kuhinje čiji Vam se stil dopada dodajte je.</h3>
                    <div className="form-checkbox-container">
                        <div>
                            <input type="checkbox" id="stil" name="classic" value="Klasična"></input>
                            <label htmlFor="classic">Klasična</label>
                        </div>
                        <div>
                            <input type="checkbox" id="stil" name="modern" value="Moderna"></input>
                            <label htmlFor="modern">Moderna</label>
                        </div>
                        <div>
                            <input type="checkbox" id="stil" name="wooden" value="Drvena"></input>
                            <label htmlFor="wooden">Drvena</label>
                        </div>
                        <div>
                            <input type="checkbox" id="stil" name="idk" value="Još se nisam odlučio/la"></input>
                            <label htmlFor="idk">Još se nisam odlučio/la</label>
                        </div><br></br>
                        <label htmlFor="img">Dodajte fotografiju:</label>
                        <input type="file" id="myFile" name="img" accept="image/png, image/jpeg" required onChange={(event) => setFile(event.target.files[0])} ></input>

                    </div><br></br>
                    <h2>Kakvu kuhinju biste voleli? </h2>
                    <h3>Izaberite materijal od čega biste voleli da Vam bude lice (front) kuhinje:</h3>
                    <div className="form-checkbox-container">
                        <div>
                            <input type="checkbox" id="materijal" name="front-masiv" value="Front od masiva (drvena)"></input>
                            <label htmlFor="front-masiv">Front od masiva (drvena)</label>
                        </div>
                        <div>
                            <input type="checkbox" id="materijal" name="front-univer" value="Front univer ABS"></input>
                            <label htmlFor="front-univer">Front univer ABS</label>
                        </div>
                        <div>
                            <input type="checkbox" id="materijal" name="front-medijapan" value="Front medjapan farbani"></input>
                            <label htmlFor="front-medijapan">Front medjapan farbani</label>
                        </div>
                        <div>
                            <input type="checkbox" id="materijal" name="ne-znam" value="Još se nisam odlučio/la"></input>
                            <label htmlFor="ne-znam">Još se nisam odlučio/la</label>
                        </div>
                        <div>
                            <input type="checkbox" id="materijal" name="drugo" value="Drugo"></input>
                            <label htmlFor="drugo">Drugo</label>
                        </div>
                    </div>
                </div>
                <div className="question-container">
                    <h1>TEHNIKA</h1><br></br>
                    <h2>Kakve uređaje planirate?</h2>
                    <h3>Opišite nam kakve uređaje (tehniku) planirate u Vašoj kuhinji, obratite pažnju da li želite ugradne ili neugradne uređaje.</h3>
                    <div className="form-checkbox-container">
                        <div>
                            <input type="checkbox" id="tehnika" name="ugradni-frizider" value="Frižider ugradni"></input>
                            <label htmlFor="ugradni-frizider">Frižider ugradni</label>
                        </div>
                        <div>
                            <input type="checkbox" id="tehnika" name="neugradni-frizider" value="Frižider neugradni"></input>
                            <label htmlFor="neugradni-frizider">Frižider neugradni</label>
                        </div>
                        <div>
                            <input type="checkbox" id="tehnika" name="sudomasina-45" value="Mašina za sudove 45cm"></input>
                            <label htmlFor="sudomasina-45">Mašina za sudove 45cm</label>
                        </div>
                        <div>
                            <input type="checkbox" id="tehnika" name="sudomasina-60" value="Mašina za sudove 60cm"></input>
                            <label htmlFor="sudomasina-60">Mašina za sudove 60cm</label>
                        </div>
                        <div>
                            <input type="checkbox" id="tehnika" name="rerna-ispod-ploce" value="Rerna ispod ploče"></input>
                            <label htmlFor="rerna-ispod-ploce">Rerna ispod ploče</label>
                        </div>
                        <div>
                            <input type="checkbox" id="tehnika" name="rerna-orman" value="Rerna u visokom ormanu"></input>
                            <label htmlFor="rerna-orman">Rerna u visokom ormanu</label>
                        </div>
                        <div>
                            <input type="checkbox" id="tehnika" name="kero-ploca" value="Kero Ploča"></input>
                            <label htmlFor="kero-ploca">Kero Ploča</label>
                        </div>
                        <div>
                            <input type="checkbox" id="tehnika" name="neugradni-sporet" value="Neugradni šporet"></input>
                            <label htmlFor="neugradni-sporet">Neugradni šporet</label>
                        </div>
                        <div>
                            <input type="checkbox" id="tehnika" name="aspirator-ugradni" value="Aspirator ugradni"></input>
                            <label htmlFor="aspirator-ugradni">Aspirator ugradni</label>
                        </div>
                        <div>
                            <input type="checkbox" id="tehnika" name="aspirator-dekorativni" value="Aspirator dekorativni"></input>
                            <label htmlFor="aspirator-dekorativni">Aspirator dekorativni</label>
                        </div>
                        <div>
                            <input type="checkbox" id="tehnika" name="aspirator-centralni" value="Aspirator centralni u pultu"></input>
                            <label htmlFor="aspirator-centralni">Aspirator centralni u pultu</label>
                        </div>
                        <div>
                            <input type="checkbox" id="tehnika" name="ostalo" value="Ostalo"></input>
                            <label htmlFor="ostalo">Ostalo</label>
                        </div>
                    </div>
                </div>

                <div className="question-container">
                    <h1>VELIČINA PROSTORIJE</h1><br></br>
                    <div>
                        <h3>Kuhinje:</h3>
                        <div>
                            <label>ZID A</label>
                            <input type="text" name="zid-a" required placeholder="Upišite dužinu zida A kuhinje" />
                        </div>
                        <div>
                            <label>ZID B</label>
                            <input type="text" name="zid-b" required placeholder="Upišite dužinu zida B kuhinje" />
                        </div>
                        <div>
                            <label>ZID C</label>
                            <input type="text" name="zid-c" required placeholder="Upišite dužinu zida C kuhinje" />
                        </div>
                        <div>
                            <label>Visina prostorije </label>
                            <input type="text" name="visina" required placeholder="Upišite visinu prostorije" />
                        </div>
                    </div>
                    <div>
                        <h3>Trpezarije:</h3>
                        <div>
                            <label>ZID A</label>
                            <input type="text" name="zid-a" placeholder="Upišite dužinu zida A" />
                        </div>
                        <div>
                            <label>ZID B</label>
                            <input type="text" name="zid-b" placeholder="Upišite dužinu zida B" />
                        </div>
                        <div>
                            <label>ZID C</label>
                            <input type="text" name="zid-c" placeholder="Upišite dužinu zida C" />
                        </div>
                        <div>
                            <label>ZID D</label>
                            <input type="text" name="zid-d" placeholder="Upišite dužinu zida D" />
                        </div>
                        <div>
                            <label>Visina prostorije </label>
                            <input type="text" name="visina" placeholder="Upišite visinu prostorije" />
                        </div>
                    </div>
                    <div>
                        <h3>Dnevnog boravka:</h3>
                        <div>
                            <label>ZID A</label>
                            <input type="text" name="zid-a" placeholder="Upišite dužinu zida A" />
                        </div>
                        <div>
                            <label>ZID B</label>
                            <input type="text" name="zid-b" placeholder="Upišite dužinu zida B" />
                        </div>
                        <div>
                            <label>ZID C</label>
                            <input type="text" name="zid-c" placeholder="Upišite dužinu zida C" />
                        </div>
                        <div>
                            <label>ZID D</label>
                            <input type="text" name="zid-d" placeholder="Upišite dužinu zida D" />
                        </div>
                        <div>
                            <label>Visina prostorije </label>
                            <input type="text" name="visina" placeholder="Upišite visinu prostorije" />
                        </div>
                    </div>
                </div>
                <div className="question-container">
                    <h1>PROZOR I POLOŽAJ (UKOLIKO GA IMA)</h1><br></br>
                    <h3>Da li u prostoriji ima prozor?</h3>
                    <div className="form-checkbox-container">
                        <div>
                            <input type="checkbox" id="prozor" name="da" value="Da"></input>
                            <label htmlFor="da">Da</label>
                        </div>
                        <div>
                            <input type="checkbox" id="prozor" name="ne" value="Ne"></input>
                            <label htmlFor="ne">Ne</label>
                        </div>
                    </div>
                    <h3>Na kom zidu se nalazi prozor?</h3>
                    <h3>Označite na kojem zidu se nalazi prozor ukoliko ga ima.</h3>
                    <div className="form-checkbox-container">
                        <div>
                            <input type="checkbox" id="prozor" name="ZID A" value="ZID A"></input>
                            <label htmlFor="ZID A">ZID A</label>
                        </div>
                        <div>
                            <input type="checkbox" id="prozor" name="ZID B" value="ZID B"></input>
                            <label htmlFor="ZID B">ZID B</label>
                        </div>
                        <div>
                            <input type="checkbox" id="prozor" name="ZID C" value="ZID C"></input>
                            <label htmlFor="ZID C">ZID C</label>
                        </div>
                    </div>
                    <h3>Dimenzije prozora.</h3>
                    <h3>Upišite dimenzije prozora ŠxV (širina-visina), koliko je udaljen od susednog zida i kog (npr. 100x80, 85cm, od zida B)</h3>
                    <textarea className="dimenzije-prozora-textarea" name="dimenzije prozora" required />
                    <h3>Priložite plan kao dodatak.</h3>
                    <h3>Plan 1</h3>
                    <input type="file" id="myFile" name="img" accept="image/png, image/jpeg" required onChange={(event) => setFile2(event.target.files[0])} />
                    <h3>Plan 2</h3>
                    <input type="file" id="myFile" name="img" accept="image/png, image/jpeg" required onChange={(event) => setFile3(event.target.files[0])} />
                    <h3>Plan 3</h3>
                    <input type="file" id="myFile" name="img" accept="image/png, image/jpeg" required onChange={(event) => setFile4(event.target.files[0])} />
                    <h4>Dodajte plan, skicu ili projekat gde se mogu videti dimenzije prostora gde će se nalaziti kuhinja. (png | jpg )</h4>
                    <h3>Opis</h3>
                    <h4>Udaljenost odvoda, radna ploča, prozor...(ukoliko nije ucrtano u priloženim projektu)</h4>
                    <textarea className="opis-prozora-textarea" name="dimenzije prozora" required />
                </div>

                <div className="question-container">
                    <h1>HAJDE DA ZAPOČNEMO VAŠ PROJEKAT</h1><br></br>
                    <div className="form-checkbox-container">
                        <div>
                            <input type="text" name="user_name" required placeholder="Ime" />
                        </div>
                        <div>
                            <input type="text" name="user_surname" required placeholder="Prezime" />
                        </div>
                        <div>
                            <input type="text" name="user_address" required placeholder="Adresa" />
                            <p style={{ margin: "10px 0" }}>Nije potrebna tačna adresa, već grad u kojem se nalazi prostor koji želite da uređujete.</p>
                        </div>
                        <div>
                            <input type="email" name="user_email" required placeholder="Email" />
                        </div>
                        <div style={{ display: "flex", padding: "10px 0" }}>
                            <p style={{ margin: "10px 0", paddingRight: "10px" }}>Paket usluga koji ste izabrali:</p>
                            <select >
                                <option value='K'>K</option>
                                <option value='K+T'>K+T</option>
                                <option value='OPEN SPACE'>OPEN SPACE</option>
                            </select>
                        </div>
                        <div>
                            <h2 style={{ paddingBottom: "5px", paddingTop: "10px" }}>Ukratko opišite šta biste želili da dobijete od ovog projekta</h2>
                            <textarea className="opis-projekat" name="opis-projekat" />
                            <p style={{ margin: "10px 0" }}>Napišite sve ono što smatrate bitnim informacijama vezanim za prostor koji želite da uredimo</p>
                        </div>

                    </div>
                    <input type="submit" className="button-send" value="Pošalji" />
                    <p style={{ margin: "2px", color: "red"}}>{message}</p>
                </div>
            </form>
        </div>
    );
};

export default QuestionSheet
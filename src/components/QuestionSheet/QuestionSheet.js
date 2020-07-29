import React from 'react';
import emailjs from 'emailjs-com';
import './QuestionSheet.css';

const QuestionSheet = () => {

    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('cokapokajelena_gmail_com', 'template_FuUMUmGL', e.target, 'user_0iylAGLRRt4r9xMlJh9Qd')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
            e.target.reset();
    }


    return (
        <div className="wrapper-question-sheet">
            <form className="questionsheet-form" onSubmit={sendEmail}>
                <div className="question-sheet-title">
                    <h1>POPUNITE NEOPHODNE PODATKE ZA CRTANJE KUHINJE:</h1>
                </div>
                <div className="question-sheet-part1">
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
                        <input type="file" id="myFile" name="img" accept="image/png, image/jpeg" ></input>
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
                <div className="question-sheet-part1">
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

                <div className="question-sheet-part1">
                    <h1>Veličina prostorije</h1><br></br>
                    <div>
                        <label>ZID A</label>
                        <input type="text" name="zid-a" required />
                        <h3>Upišite dužinu zida A</h3>
                    </div>
                    <div>
                        <label>ZID B</label>
                        <input type="text" name="zid-b" required />
                        <h3>Upišite dužinu zida B</h3>
                    </div>
                    <div>
                        <label>ZID C</label>
                        <input type="text" name="zid-c" required />
                        <h3>Upišite dužinu zida C</h3>
                    </div>
                    <div>
                        <label>Visina prostorije </label>
                        <input type="text" name="visina" required />
                    </div>
                </div>

                <div className="question-sheet-part1">
                    <div>
                        <label>Ime</label>
                        <input type="text" name="user_name" required />
                    </div>
                    <div>
                        <label>Prezime</label>
                        <input type="text" name="user_surname" required />
                    </div>
                    <div>
                        <label>Email</label>
                        <input type="email" name="user_email" required />
                    </div>
                </div>

                <input type="submit" value="Send" />
            </form>
        </div>
    );
};

export default QuestionSheet
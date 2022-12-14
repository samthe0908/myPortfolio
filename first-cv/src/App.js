import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import {Col, Tooltip, OverlayTrigger, Row} from "react-bootstrap";
import {FaPhoneSquare, FaEnvelopeSquare, FaLinkedin, FaGithubSquare} from "react-icons/fa";


function App() {
    return (
        <div className=" vh-100 container-fluid gx-0">
            <div className="Header-container min-vh-25 ">
                Samantha Theerawat
                <h1> Full-stack webbutvecklare </h1>
            </div>
            <div className=" Content-container min-vh-75 ">
                <Row className=" row-cols-1  ">
                    <Col className=" col-md-3 d-flex flex-column justify-content-center text-center mt-3 mb-3 ">
                        <div>
                            <img src="./images/samantha13.jpg" alt="Samantha Theerawat"
                                 style={{width: "200px", height: "200px", border: "5px double saddlebrown"}}
                                 className="rounded-circle "/>
                        </div>

                        <div className="  d-flex flex-row justify-content-center text-center ">
                            <OverlayTrigger
                                overlay={<Tooltip id="tooltip-disabled">samanthathee0908@gmail.com</Tooltip>}>
                            <span className="d-inline-block">
                                <a className="mail" href="mailto:samanthathee0908@gmail.com">
                                    <FaEnvelopeSquare style={{pointerEvents: 'none'}} disabled/>
                                </a>
                            </span>
                            </OverlayTrigger>

                            <a className="github" href="https://github.com/samthe0908"><FaGithubSquare/></a>
                            <a className="linkedin"
                               href="https://www.linkedin.com/in/samantha-theerawat-b59438100/"><FaLinkedin/></a>

                            <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">0739-606265</Tooltip>}>
                            <span className="d-inline-block">
                            <FaPhoneSquare className="phone" style={{margin: "10px", pointerEvents: 'none'}} disabled/>
                            </span>
                            </OverlayTrigger>
                        </div>
                    </Col>

                    <Col className="col-md-7 d-flex flex-column mb-3 ">
                        <h1 className="text-center fw-bold fs-1 mt-3"> UTBILDNING</h1>
                        <div className="mt-2">
                            <h3 className="fw-bold"> Webbutveckling, Campus M??lndal <br/>Examens??r: 2022</h3>
                            <h3> HTML, CSS, JavaScript, TypeScript, UX/UI, React.js, Node.js, Express.js,
                                API, MongoDB, RestAPI, Mongoose, SQL, NoSQL, MERN, frontend, backend, fullstack
                            </h3>
                        </div>
                        <div className="mt-3">
                            <h3 className="fw-bold"> International IATA & Amadeus Foundation <br/>Examens??r: 2013</h3>
                            <h3> Utbildning och Certifiering i regulj??ra bokningssystem AMADEUS , Amadeus The
                                Essentials, Foundation in Travel And Tourism</h3>
                        </div>

                    </Col>
                </Row>

                <Row className="ms-5 me-5" style={{borderTop: "saddlebrown solid 3px "}}>>
                    <h1 className="text-center fw-bold fs-1 mt-0"> OM MIG</h1>
                    <h3 className="text-start my-5">
                        Efter mer ??n 30 ??r varav 22 ??r med egen verksamhet inom restaurangbranschen, k??nner att jag vill
                        ??ndra min karri??r och testa p?? n??gon ny uppmaning. Det blev d?? programmering f??r det alltid har
                        legat i mitt intresse och k??ndes att det ligger r??tt i tiden.
                        <br/><br/>
                        Jag ??r mycket driven person och utmanar mig hela tiden att prestera mitt absolut b??sta. F??r mig
                        ??r detaljer lika viktiga som helheten och jag ??r snabb p?? att hitta l??sningar p?? de problem som
                        uppst??r.
                        <br/><br/>
                        Som person ??r jag positiv, glad, nyfiken och ??ppet f??r att l??ra mig nya saker, stresst??lig ,
                        lugn, l??tt att jobba med och har en stor portion humor.
                        <br/><br/>
                        Av min erfarenheten som egen f??retagare i 22 ??r, bidrog till att jag ??r m??lmedveten,
                        probleml??sare, fram??tdrivande, ??dmjuk, beslutsamt, delaktig och uppmuntran, flexibel och lyh??rd


                    </h3>
                    <h3 className="text-start my-3"> Spr??k: Svenska, Engelska, Thail??ndska (modersm??l)</h3>
                    <h3 className="text-start mt-2 mb-3"> K??rkort: Beh??righet B</h3>
                </Row>

                <Row className="ms-5 me-5 " style={{borderTop: "saddlebrown solid 3px "}}>>
                    <Col className="d-flex flex-column mt-3 mb-3 ">
                        <Row>
                            <h1 className="text-center fw-bold fs-1 mt-3"> ARBETSLIVSERFARENHET</h1>
                        </Row>
                        <Row className=" d-flex mt-4 ">
                            <Col className="mt-3">
                                <h3>2000 ??? 2022 <br/>Restaurang Sala thai,G??teborg <br/>Egenf??retagare med fyra
                                    anst??llda. </h3>
                            </Col>
                            <Col className="mt-3">
                                <h3>1999<br/>Liseberg, G??teborg <br/>Restaurang personal <br/>
                                    Jag s??kte s??songarbete, fick stationerad p?? fastfood-restaurang. </h3>
                            </Col>
                            <Col className="mt-3">
                                < h3>1993 ??? 2000 <br/> Asiatiska restauranger, G??teborg <br/> Servitris/ Kokerska <br/>
                                    Jag tog restaurang jobb p?? flera olika restauranger och under denna period l??ser in
                                    beh??righet till h??gskolan. </h3>
                            </Col>
                            <Col className="mt-3">
                                <h3>1991 ??? 1993 <br/>Restaurang Evergreen, G??teborg <br/> Servitris <br/>
                                    Heltid anst??llning, avslutade pga att restaurang st??ngdes</h3>
                            </Col>

                        </Row>
                    </Col>

                </Row>
            </div>
        </div>
    )
}

export default App;

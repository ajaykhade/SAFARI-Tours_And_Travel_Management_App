import React from 'react'

const sports1 = require('../images/sports1.jpg')
const sports2 = require('../images/sports2.jpg')
const sports3 = require('../images/sports3.jpg')
const sports4 = require('../images/sports4.jpg')


const Card = () => {

    return (
        <div className='container'>



            <div className='row' style={{ display: 'flex' }}>


                <div className="col-md-3">

                    <div className='card' style={{ width: "16rem", height: "30rem",  border: "none", marginLeft: 10 }}>

                        <img src={sports1} alt="..." className="card-img-top" style={{ borderRadius: "50%" }} />


                        <div className="card-body" style={{ justifyContent: 'center', alignItems: 'center' }}>
                            <h5 className="card-title" style={{ fontFamily: 'Nunito' }}><strong>PARAGLIDING</strong></h5>
                            <p className="card-text" style={{ fontFamily: 'Signika Negative', }}>Paragliding is the recreational and competitive adventure sport of flying parachutes with design modifications that enhance their gliding capabilities.</p>
                        </div>

                    </div>
                </div>
                <div className="col-md-3">

                    <div className='card' style={{ width: "16rem", height: "30rem", border: "none", marginLeft: 10 }}>

                        <img src={sports2} alt="..." className="card-img-top" style={{ borderRadius: "50%" }} />


                        <div className="card-body" style={{ justifyContent: "center", alignItems: "center" }}>
                            <h5 className="card-title" style={{ fontFamily: 'Nunito' }}><strong>BUNGEE JUMPING</strong></h5>
                            <p className="card-text" style={{ fontFamily: 'Signika Negative', }}>Bungee jumping is a sport wherein the jumper usually falls from a great height while attached to a rubber cable.Bungy jumping, often known as Bungy lumping.</p>
                        </div>

                    </div> </div>
                <div className="col-md-3">

                    <div className='card' style={{ width: "16rem", height: "30rem", border: "none", marginLeft: 10 }}>

                        <img src={sports3} alt="..." className="card-img-top" style={{ borderRadius: "50%" }} />


                        <div className="card-body" style={{ justifyContent: "center", alignItems: "center" }}>
                            <h5 className="card-title" style={{ fontFamily: 'Nunito' }}><strong>ROWING</strong></h5>
                            <p className="card-text" style={{ fontFamily: 'Signika Negative', }}>Rowing, sometimes called crew in the United States, is the sport of racing boats using oars.Rowing is one of the oldest Olympic sports.</p>
                        </div>

                    </div> </div>
                <div className="col-md-3">

                    <div className='card' style={{ width: "16rem", height: "30rem", border: "none", marginLeft: 10 }}>

                        <img src={sports4} alt="..." className="card-img-top" style={{ borderRadius: "50%" }} />


                        <div className="card-body" style={{ justifyContent: "center", alignItems: "center" }}>
                            <h5 className="card-title" style={{ fontFamily: 'Nunito' }}><strong>RIVER RAFTING</strong></h5>
                            <p className="card-text" style={{ fontFamily: 'Signika Negative', }}>Rafting and whitewater rafting are recreational outdoor activities which use an inflatable raft to navigate a river or other body of water.</p>
                        </div>

                    </div>
                </div>
                

            </div>
        </div>

    )
}

export default Card
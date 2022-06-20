import React from "react";
import "./DiseaseDetection.css";
import BreastCancer from "../../Assets/BreastCancer.jfif"
import Diabeties from "../../Assets/Diabeties.jpg"
import KidneyDisease from "../../Assets/kidney.jpg"
import Heart from "../../Assets/heart.jpg"

function DiseaseDetection() {
    return (
        <>
            <div className="heading">
                <h1>Disease Detection</h1>
            </div>

            <div className="work-exp">
                <ul className="work-exp-list">

                    <li>
                        <div className="exp">
                            <a href="https://breastcancerdetectionweb.herokuapp.com/" target="blank" >
                                <img src={BreastCancer} className="exp__image" alt="" />
                                <div className="exp__overlay">
                                    <div className="exp__header">
                                        <svg className="exp__arc" xmlns="http://www.w3.org/2000/svg">
                                            <path />
                                        </svg>
                                        <img className="exp__thumb" alt="Data Science" src="https://img.icons8.com/fluent/100/000000/web-analystics.png" />
                                        <div className="exp__header-text">
                                            <h3 className="exp__title">Breast cancer Prediction</h3>
                                            <span className="exp__status">Detect breast cancer</span>
                                        </div>
                                    </div>
                                    <p className="exp__description">Symptoms of breast cancer include a lump in the breast, bloody discharge from the nipple and changes in the shape or texture of the nipple or breast.</p>
                                </div></a>
                        </div>
                    </li>

                    <li>
                        <div className="exp">
                            <a href="https://diabetiespredictionweb.herokuapp.com/" target="blank" >
                                <img src={Diabeties} className="exp__image" alt="" />
                                <div className="exp__overlay">
                                    <div className="exp__header">
                                        <svg className="exp__arc" xmlns="http://www.w3.org/2000/svg">
                                            <path />
                                        </svg>
                                        <img className="exp__thumb" alt="Data Science" src="https://img.icons8.com/fluent/100/000000/web-analystics.png" />
                                        <div className="exp__header-text">
                                            <h3 className="exp__title">Diabeties Prediction</h3>
                                            <span className="exp__status">Predict the chances of getting diabeties</span>
                                        </div>
                                    </div>
                                    <p className="exp__description">Diabetes is a disease that occurs when your blood glucose, also called blood sugar, is too high. Blood glucose is your main source of energy and comes from the food you eat.</p>
                                </div></a>
                        </div>
                    </li>

                    <li>
                        <div className="exp">
                            <a href="https://heartdiseasepredictionweb.herokuapp.com" target="blank" >
                                <img src={Heart} className="exp__image" alt="" />
                                <div className="exp__overlay">
                                    <div className="exp__header">
                                        <svg className="exp__arc" xmlns="http://www.w3.org/2000/svg">
                                            <path />
                                        </svg>
                                        <img className="exp__thumb" alt="Data Science" src="https://img.icons8.com/fluent/100/000000/web-analystics.png" />
                                        <div className="exp__header-text">
                                            <h3 className="exp__title">Heart disease</h3>
                                            <span className="exp__status">Predict Heart Disease</span>
                                        </div>
                                    </div>
                                    <p className="exp__description">It develops when the arteries that supply blood to the heart become clogged with plaque. This causes them to harden and narrow.</p>
                                </div></a>
                        </div>
                    </li>

                    <li>
                        <div className="exp">
                            <a href="https://kidneydiseasepredictionweb.herokuapp.com/" target="blank" >
                                <img src={KidneyDisease} className="exp__image" alt="" />
                                <div className="exp__overlay">
                                    <div className="exp__header">
                                        <svg className="exp__arc" xmlns="http://www.w3.org/2000/svg">
                                            <path />
                                        </svg>
                                        <img className="exp__thumb" alt="Data Science" src="https://img.icons8.com/fluent/100/000000/web-analystics.png" />
                                        <div className="exp__header-text">
                                            <h3 className="exp__title">Kidney disease</h3>
                                            <span className="exp__status">Predict kidney disease</span>
                                        </div>
                                    </div>
                                    <p className="exp__description">The kidneys filter waste and excess fluid from the blood. As kidneys fail, waste builds up.</p>
                                </div></a>
                        </div>
                    </li>

                </ul>
            </div>
        </>
    );


}

export default DiseaseDetection;

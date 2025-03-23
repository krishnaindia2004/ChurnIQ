import React from 'react';
import counterIconOne from '../../assets/images/icon/counter-icon-1.svg';
import counterIconTwo from '../../assets/images/icon/counter-icon-2.svg';
import counterIconThree from '../../assets/images/icon/counter-icon-3.svg';
import counterIconFour from '../../assets/images/icon/counter-icon-4.svg';
import CounterUpCom from '../../lib/CounterUpCom.jsx';
import { motion } from 'framer-motion';

const CounterCard = ({ icon, endValue, title, description }) => {
  return (
    <motion.div
      className="appie-single-counter mt-30 wow animated fadeInUp"
      data-wow-duration="2000ms"
      data-wow-delay="200ms"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="counter-content">
        <div className="icon">
          <img src={icon} alt="" />
        </div>
        <h3 className="title">
          <span className="counter-item">
            <CounterUpCom endValue={endValue} sectionSelect="counter" />
          </span>
          {title}
        </h3>
        <p
          className="hover:scale-110 transition-transform duration-300 ease-in-out"
        >
          {description}
        </p>
      </div>
    </motion.div>
  );
};

function CounterArea({ style }) {
  return (
    <section
      className="appie-counter-area pt-90 pb-190"
      id="counter"
      style={{ backgroundColor: '#290645', color: 'white',margin:"50px 50px", padding:"50px 30px", borderRadius:"24px" }}
    >
      <div  className="container">
            <div className="appie-section-title">
              <h3 className="appie-title" style={{padding:"0px 0px 10px", color: 'white' }}>
                Working Of ChurnIQ
              </h3>
              <p
                style={{
                    // margin:"20px",
                  padding: '15px',
                  borderRadius: '16px',
                  boxShadow: '5px 5px 10px #FDCA2F',
                  cursor:"pointer",
                  color:"wheat"
                }}
              >
                <b  className="hover:scale-110 transition-transform duration-300 ease-in-out">
                  Data Preprocessing:
                </b>
                <br />
                The system preprocesses the uploaded data by handling missing values, scaling features, and balancing the dataset using SMOTE.
                <hr />
                <b className="hover:scale-110 transition-transform duration-300 ease-in-out">
                  Churn Prediction Model:
                </b>
                <br />
                The preprocessed data is fed into a Random Forest model, which analyzes patterns and predicts the likelihood of each customer churning.
                <hr />
                <b className="hover:scale-110 transition-transform duration-300 ease-in-out">
                  Visualization and Insights:
                </b>
                <br />
                The React front-end displays results as visualizations (e.g., graphs, charts), helping users understand key factors influencing churn.
                <hr />
                <b className="hover:scale-110 transition-transform duration-300 ease-in-out">
                  Real-Time Assistance:
                </b>
                <br />
                A Gen AI-powered chatbot assists users by answering queries, providing explanations of churn predictions, and suggesting retention strategies.
                <hr />
                <b className="hover:scale-110 transition-transform duration-300 ease-in-out">
                  Retention Strategy Implementation:
                </b>
                <br />
                Businesses act on insights by targeting at-risk customers with tailored retention campaigns, reducing churn and improving customer satisfaction.
                <hr />
              </p>
            </div>
        {/* <div className="row">
          <div className="col-lg-3 col-md-6">
            <CounterCard
              icon={counterIconOne}
              endValue={95}
              title="% Accuracy"
              description="Upto On XGBoosting"
            />
          </div>
          <div className="col-lg-3 col-md-6">
            <CounterCard
              icon={counterIconTwo}
              endValue={108}
              title="+"
              description="Active Installation"
            />
          </div>
          <div className="col-lg-3 col-md-6">
            <CounterCard
              icon={counterIconThree}
              endValue={307}
              title="+"
              description="Active Installation"
            />
          </div>
          <div className="col-lg-3 col-md-6">
            <CounterCard
              icon={counterIconFour}
              endValue={725}
              title="k+"
              description="Active Installation"
            />
          </div>
        </div> */}
      </div>
    </section>
  );
}

export default CounterArea;
import React from "react";
import "./Supports.css";

const Supports = () => {
  return (
    <div className="SupportsSection">
      <h1>Use our chatbot today. We provide:</h1>
      <section className="SupportsBody">
        <div className="supoort">
          <div>
            <ul>
              <p>Immediate Access to Support</p>
              <li>
                Availability: The chatbot is available 24/7, providing students
                with immediate access to support whenever they need it,
                regardless of the time of day.
              </li>
              <li>
                Anonymity: Students can express their feelings and concerns
                anonymously, which can be particularly helpful for those who are
                hesitant to seek help in person due to stigma or privacy
                concerns.
              </li>
            </ul>
          </div>
        </div>
        <div className="supoort">
          <div>
            <ul>
              <p> Initial Emotional Relief</p>
              <li>
                Listening Ear: The chatbot can offer a compassionate and
                non-judgmental listening ear, allowing students to vent their
                feelings and relieve some of their immediate emotional burden.
              </li>
              <li>
                Validation and Empathy: By acknowledging and validating
                students' feelings, the chatbot can provide a sense of
                understanding and empathy, which is crucial in the early stages
                of addressing a mental health crisis.
              </li>
            </ul>
          </div>
        </div>{" "}
        <div className="supoort">
          <div>
            <ul>
              <p> Guidance and Information</p>
              <li>
                Psychoeducation: The chatbot can provide educational resources
                and information about mental health, helping students understand
                their feelings and the importance of self-care.
              </li>
              <li>
                Coping Strategies: It can suggest practical coping strategies
                and exercises, such as mindfulness, deep breathing, or
                journaling, to help manage stress and anxiety.
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Supports;

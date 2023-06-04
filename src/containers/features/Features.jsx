import React from 'react';
import Feature from '../../components/feature/Feature';
import './features.css';

const featuresData = [
  {
    title: 'Fast and Accurate',
    text: 'Our AI model has been trained on a vast amount of data to understand and comprehend complex information. It can provide precise answers to a wide range of questions.It will help to answer and generate trained data in multiple different ways.',
  },
  {
    title: 'Contextual Understanding',
    text: 'Our AI system takes into account the context of the document and the question being asked, enabling it to provide more accurate and relevant answers.',
  },
  {
    title: 'Scalable Solution',
    text: 'Whether you have a single PDF document or a large collection of documents, our AI system can handle the workload efficiently and provide answers in real-time.',
  },
  {
    title: 'Extract data from Google and Youtube',
    text: 'It extract the information you asked from GOOGLE and YOUTUBE, so that you dont need go anywhere and get in single page more quickly.',
  },
];

const Features = () => (
  <div className="gpt3__features section__padding" id="features">
    <div className="gpt3__features-heading">
      <h1 className="gradient__text">Get all your Queries answered with the help of an AI.</h1>
      <p>Experience it Now</p>
    </div>
    <div className="gpt3__features-container">
      {featuresData.map((item, index) => (
        <Feature title={item.title} text={item.text} key={item.title + index} />
      ))}
    </div>
  </div>
);

export default Features;
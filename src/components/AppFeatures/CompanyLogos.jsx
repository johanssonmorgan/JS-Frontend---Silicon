import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
import ImageContainer from '../UI/ImageContainer'
import logo1 from '/src/assets/logoipsum-logo1.svg'
import logo2 from '/src/assets/logoipsum-logo2.svg'
import logo3 from '/src/assets/logoipsum-logo3.svg'
import logo4 from '/src/assets/logoipsum-logo4.svg'
import logo5 from '/src/assets/logoipsum-logo5.svg'
import logo6 from '/src/assets/logoipsum-logo6.svg'

const CompanyLogos = () => {
  const [logos, setLogos] = useState([
    {
      id: uuidv4(),
      imageUrl: logo1,
      altText: "Company logo",
      class: "border-logoipsum"
    },
    {
      id: uuidv4(),
      imageUrl: logo2,
      altText: "Company logo",
      class: "border-logoipsum"
    },
    {
      id: uuidv4(),
      imageUrl: logo3,
      altText: "Company logo",
      class: "border-logoipsum"
    },
    {
      id: uuidv4(),
      imageUrl: logo4,
      altText: "Company logo",
      class: "border-logoipsum"
    },
    {
      id: uuidv4(),
      imageUrl: logo5,
      altText: "Company logo",
      class: "border-logoipsum brand-5"
    },
    {
      id: uuidv4(),
      imageUrl: logo6,
      altText: "Company logo",
      class: "border-logoipsum brand-6"
    }
]);

  return (
    <div className="brands">
      {logos.map(logo => (
        <ImageContainer key={logo.id} imageUrl={logo.imageUrl} altText={logo.altText} className={logo.class} />
      ))}
    </div>
  );
};

export default CompanyLogos
import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import ImageContainer from '../UI/ImageContainer';
import MobileImage from '/src/assets/how-does-it-work-mobile-phone.svg';
import TabletImage1 from '/src/assets/how-does-it-work-tablet-phone1.svg';
import TabletImage2 from '/src/assets/how-does-it-work-tablet-phone2.svg';
import TabletImage3 from '/src/assets/how-does-it-work-tablet-phone3.svg';
import DesktopImage1 from '/src/assets/how-does-it-work-desktop-phone1.svg';
import DesktopImage2 from '/src/assets/how-does-it-work-desktop-phone2.svg';
import DesktopImage3 from '/src/assets/how-does-it-work-desktop-phone3.svg';

const ResponsiveImageContainer = () => {

  const [tabletImages, setTabletImages] = useState([
    {
      id: uuidv4(),
      imageUrl: TabletImage1,
      altText: "Your cards screen, showing your saved credit cards and its transaction history.",
      class: "s3-img2"
    },
    {
      id: uuidv4(),
      imageUrl: TabletImage2,
      altText: "Transfer screen, showing account balance and a list of phone contacts as potentional recivers.",
      class: "s3-img3"
    },
    {
      id: uuidv4(),
      imageUrl: TabletImage3,
      altText: "Transfer screen, showing an ongoing transaction to Sister Alice from contacts.",
      class: "s3-img4"
    },
  ]);

  const [desktopImages, setDesktopImages] = useState([
    {
      id: uuidv4(),
      imageUrl: DesktopImage1,
      altText: "My budget screen, showing line graph of the users spendings.",
      class: "s3-img5"
    },
    {
      id: uuidv4(),
      imageUrl: DesktopImage2,
      altText: "Your cards screen, showing your saved credit cards and its transaction history.",
      class: "s3-img6"
    },
    {
      id: uuidv4(),
      imageUrl: DesktopImage3,
      altText: "Transfer screen, showing account balance and a list of phone contacts as potentional recivers.",
      class: "s3-img7"
    },
  ]);

  return (
    <div className="section-3-images">
        <div className="section-3-images-mobile">
            <ImageContainer optionalClassName='s3-img1' image={MobileImage} altText='Transfer screen, showing account balance and a list of phone contacts as potentional recivers.' />
        </div>
        <div className="section-3-images-tablet">
            {tabletImages.map(image => (
              <ImageContainer key={image.id} image={image.imageUrl} altText={image.altText} optionalClassName={image.class} />
            ))}
        </div>
        <div className="section-3-images-desktop">
            {desktopImages.map(image => (
              <ImageContainer key={image.id} image={image.imageUrl} altText={image.altText} optionalClassName={image.class} />
            ))}
        </div>
    </div>
  );
};

export default ResponsiveImageContainer
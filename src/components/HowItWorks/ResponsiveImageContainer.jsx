import React from 'react'
import ImageContainer from '../UI/ImageContainer'

const ResponsiveImageContainer = () => {
  return (
    <div className="section-3-images">
        <div className="section-3-images-mobile">
            <ImageContainer optionalClassName='s3-img1' image={"src/assets/how-does-it-work-mobile-phone.svg"} altText='Transfer screen, showing account balance and a list of phone contacts as potentional recivers.' />
        </div>
        <div className="section-3-images-tablet">
            <ImageContainer optionalClassName='s3-img2' image={"src/assets/how-does-it-work-tablet-phone1.svg"} altText='Your cards screen, showing your saved credit cards and its transaction history.' />
            <ImageContainer optionalClassName='s3-img3' image={"src/assets/how-does-it-work-tablet-phone2.svg"} altText='Transfer screen, showing account balance and a list of phone contacts as potentional recivers.' />
            <ImageContainer optionalClassName='s3-img4' image={"src/assets/how-does-it-work-tablet-phone3.svg"} altText='Transfer screen, showing an ongoing transaction to Sister Alice from contacts.' />
        </div>
        <div className="section-3-images-desktop">
            <ImageContainer optionalClassName='s3-img5' image={"src/assets/how-does-it-work-desktop-phone1.svg"} altText='My budget screen, showing line graph of the users spendings.' />
            <ImageContainer optionalClassName='s3-img6' image={"src/assets/how-does-it-work-desktop-phone2.svg"} altText='Your cards screen, showing your saved credit cards and its transaction history.' />
            <ImageContainer optionalClassName='s3-img7' image={"src/assets/how-does-it-work-desktop-phone3.svg"} altText='Transfer screen, showing account balance and a list of phone contacts as potentional recivers.' />
        </div>
    </div>
  )
}

export default ResponsiveImageContainer
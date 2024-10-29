import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
import FAQCard from './FAQCard';

const FAQAccordion = () => {

    const [faqContent, setFaqContent] = useState([
        {
            "id": uuidv4(),
            "title": "Is any of my personal information stored in the App?",
            "content": "No, the app does not store any personal information. All data is encrypted and stored securely on our servers. You have full control over your data at all times."
        },
        {
            "id": uuidv4(),
            "title": "What formats can I download my transaction history in?",
            "content": "You can download your transaction history in various formats such as PDF, CSV, and Excel. This allows you to easily manage and review your transactions."
        },
        {
            "id": uuidv4(),
            "title": "Can I schedule future transfers?",
            "content": "Yes, you can schedule future transfers. Simply choose the date and time for the transfer and the app will handle the rest, ensuring that your transfer is processed on time."
        },
        {
            "id": uuidv4(),
            "title": "When can I use Banking App services?",
            "content": "Our banking services are available 24/7, so you can access your account and make transactions anytime, from anywhere."
        },
        {
            "id": uuidv4(),
            "title": "Can I create my own password that is easy for me to remember?",
            "content": "Yes, you can create your own password following our security guidelines. We recommend using a combination of letters, numbers, and special characters for a strong and memorable password."
        },
        {
            "id": uuidv4(),
            "title": "What happens if I forget or lose my password?",
            "content": "If you forget your password, you can reset it using the 'Forgot Password' feature. A verification code will be sent to your registered email or phone number to help you reset your password."
        }       
    ])


  return (
    <div className="p6-faq-cont br-05 border-faq-cont faq-divider">
        {faqContent.map(data => (
            <FAQCard key={data.id} title={data.title} content={data.content} />
        ))}
    </div>
  )
}

export default FAQAccordion
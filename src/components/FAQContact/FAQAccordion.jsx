import React, { useState, useEffect } from 'react';
import FAQCard from './FAQCard';

const FAQAccordion = () => {
    const [faqContent, setFaqContent] = useState([]);
    const [open, setOpen] = useState(null);

    const fetchData = async () => {
        const res = await fetch('https://win24-assignment.azurewebsites.net/api/faq')
        const data = await res.json()
        setFaqContent(data)
    }

    const toggleOpen = (id) => {
        setOpen((prevOpen) => (prevOpen === id ? null : id));
    };

    useEffect(() => {
        fetchData()
    }, [])

  return (
    <div className="p6-faq-cont br-05 border-faq-cont faq-divider">
        {faqContent.map(data => (
            <FAQCard key={data.id} data={data} isOpen={open === data.id} toggleOpen={() => toggleOpen(data.id)}/>
        ))}
    </div>
  )
}

export default FAQAccordion
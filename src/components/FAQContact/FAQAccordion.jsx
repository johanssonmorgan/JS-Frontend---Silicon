import React, { useEffect, useState } from 'react'
import FAQCard from './FAQCard';

const FAQAccordion = () => {

    const [openId, setOpenId] = useState(null);
    const [faqContent, setFaqContent] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const toggleOpen = (id) => {
        setOpenId((prevOpenId) => (prevOpenId === id ? null : id));
    };

    useEffect(() => {
        const fetchFAQContent = async () => {
            try {
                setLoading(true);
                const response = await fetch('https://win24-assignment.azurewebsites.net/api/faq');
                if (!response.ok) {
                    throw new Error('Failed to fetch FAQ content');
                }
                const data = await response.json();

                const faqData = data.map(item => ({...item}));
                setFaqContent(faqData);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchFAQContent();
    }, []);

    if (loading) return <p>Loading FAQs...</p>;
    if (error) return <p>Error: {error}</p>;


  return (
    <div className="p6-faq-cont br-05 border-faq-cont faq-divider">
        {faqContent.map(data => (
            <FAQCard key={data.id} data={data} isOpen={openId === data.id} toggleOpen={() => toggleOpen(data.id)}/>
        ))}
    </div>
  )
}

export default FAQAccordion
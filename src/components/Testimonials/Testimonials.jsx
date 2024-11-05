import react, { useEffect, useState } from 'react';
import ReviewCard from './ReviewCard';

function Testimonials() {

    const [testimonials, setTestimonials] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchTestimonials = async () => {
            try {
                setLoading(true);
                const response = await fetch('https://win24-assignment.azurewebsites.net/api/testimonials');
                if (!response.ok) {
                    throw new Error('Failed to fetch FAQ content');
                }
                const data = await response.json();

                const testimonial = data.map(item => ({...item}));
                setTestimonials(testimonial);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchTestimonials();
    }, []);

    if (loading) return <p>Loading FAQs...</p>;
    if (error) return <p>Error: {error}</p>;

	return (
		<>
			{
				testimonials.map(testimonial => (
					<ReviewCard key={testimonial.id} testimonial={testimonial} />
				))
			}
		</>

	)
}
export default Testimonials
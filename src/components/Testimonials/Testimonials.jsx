import react, { useEffect, useState } from 'react';
import ReviewCard from './ReviewCard';

function Testimonials() {

    const [testimonials, setTestimonials] = useState([]);

    const fetchData = async () => {
        const res = await fetch('https://win24-assignment.azurewebsites.net/api/testimonials')
        const data = await res.json()
        setTestimonials(data)
    }

    useEffect(() => {
        fetchData()
    }, [])


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
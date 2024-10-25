import react, { useState } from 'react'
import ReviewCard from './ReviewCard'

function Testimonials() {

const [testimonials, setTestimonials] = useState([
	{
	id: crypto.randomUUID(),
	author: "Fannie Summers",
	jobRole: "Designer",
	starRating: 4,
	avatarUrl: "src/assets/fannie-avatar.svg",
	comment: "Working with this team has been a fantastic experience! They understood my vision and delivered a design that exceeded my expectations. I would definitely reccomend them."
	},
	{
	id: crypto.randomUUID(),
	author: "Albert Flores",
	jobRole: "Developer",
	starRating: 5,
	avatarUrl: "src/assets/albert-avatar.svg",
	comment: "The project ran smoothly, and their technical expertise was evident from start to finish. Everything was delivered on time and exceeded our requirements. Full marks for their professionalism."
	}
	])

	return (
		<>
			{
				testimonials.length > 0 && testimonials.map(testimonial => (
					<ReviewCard key={testimonial.id} testimonial={testimonial} />
				))
			}
		</>

	)
}
export default Testimonials
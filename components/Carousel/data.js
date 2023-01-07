import devIcon from '../../public/images/web-development.png'
import ux from '../../public/images/ux-design.png'
import marketing from '../../public/images/strategy-development.png'

const tabData = [
  {
    set: 'UX / UI Design', 
    name: 'UX / UI Design',
    image: ux,
    description: 'Finding the balance between design and functionality is important when designing interfaces. Always sleek, always responsive.', skills: [ 'Adobe Photoshop','Figma', 'Sketch'],
  },
  {
    set: 'Front-End Experience',
    name: 'Web Development',
    image: devIcon,
    description: 'Front-end engineer with full-stack development knowledge. Creating memorable experiences through intuitive designs is my forte.',
    skills: [ 'HTML', 'CSS', 'Javascript', 'React','Node JS', 'MongoDB'],
    icons: ['https://www.flaticon.com/free-icons/html-5',]
  },
  {
    set: 'SEO & Marketing', 
    name: 'SEO & Marketing',
    image: marketing,
    description: 'I use marketing tools, photography, and social media platforms to create a brand, grow your audience, and scale your business.',
    skills: [ 'Google Ads', 'Google Analytics', 'Photography', 'SEO', 'Social Media Marketing'],
  }
]

export default tabData 
import devIcon from '../../public/images/web-development.png'
import ux from '../../public/images/ux-design.png'
import marketing from '../../public/images/strategy-development.png'

const tabData = [
  {
    set: 'Front-End Experience',
    name: 'Web Development',
    image: devIcon,
    description: 'I create memorable experiences using my knowledge of full-stack development.',
    skills: [ 'Shopify', 'HTML', 'CSS', 'Javascript / Node', 'React', 'Mongo DB'],
    icons: ['https://www.flaticon.com/free-icons/html-5',]
  },
  {
    set: 'UX / UI Design', 
    name: 'UX / UI Design',
    image: ux,
    description: 'User-friendly designs with purpose and functionality. Always sleek, always responsive.', skills: [ 'Adobe Photoshop', 'Figma', , 'Sketch', 'Wireframing', 'Flow Charts'],
  },
  {
    set: 'SEO & Marketing', 
    name: 'SEO & Marketing',
    image: marketing,
    description: 'I establish a brand and help grow a business using marketing tools and social media platforms.',
    skills: [ 'Branding', 'Google Ads', 'Google Analytics', 'Photography', 'SEO', 'Social Media Marketing'],
  }
]

export default tabData 
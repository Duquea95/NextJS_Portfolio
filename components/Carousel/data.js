import devIcon from '../../public/images/web-development.png'
import ux from '../../public/images/ux-design.png'
import marketing from '../../public/images/strategy-development.png'

const tabData = [
  {
    set: 'Front-End Experience',
    name: 'Web Development',
    image: devIcon,
    description: 'Creating memorable experiences using knowledge of full-stack development and best practices.',
    skills: [ 'Shopify', 'HTML / CSS', 'Javascript / Node', 'React', 'Mongo DB'],
    icons: ['https://www.flaticon.com/free-icons/html-5',]
  },
  {
    set: 'UX / UI Design', 
    name: 'UX / UI Design',
    image: ux,
    description: 'Designing user-friendly themes with functionality and  purpose. Always sleek, always responsive.', skills: [ 'Adobe Photoshop', 'Figma', , 'Sketch', 'Wireframing', 'Flow Charts'],
  },
  {
    set: 'SEO & Marketing', 
    name: 'SEO & Marketing',
    image: marketing,
    description: 'Establishing an identity and helping your business grow using marketing tools and social media platforms.',
    skills: [ 'Google Ads', 'Google Analytics', 'Photography', 'SEO', 'Marketing'],
  }
]

export default tabData 
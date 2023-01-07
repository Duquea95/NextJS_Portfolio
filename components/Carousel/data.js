import devIcon from '../../public/images/web-development.png'
import ux from '../../public/images/ux-design.png'
import marketing from '../../public/images/strategy-development.png'

const tabData = [
  {
    set: 'Front-End Experience',
    name: 'Web Development',
    image: devIcon,
    description: 'Front-end engineer with full-stack development knowledge. I create memorable experiences through intuitive designs.',
    skills: [ 'Shopify', 'HTML', 'CSS', 'Javascript', 'React','Node JS', 'MongoDB'],
    icons: ['https://www.flaticon.com/free-icons/html-5',]
  },
  {
    set: 'UX / UI Design', 
    name: 'UX / UI Design',
    image: ux,
    description: 'Finding the balance between design and functionality is important when designing interfaces. Always sleek, always responsive.', skills: [ 'Adobe Photoshop','Figma', 'Product Retouching', 'Sketch', 'Wireframing', 'Flow Charts'],
  },
  {
    set: 'SEO & Marketing', 
    name: 'SEO & Marketing',
    image: marketing,
    description: 'I use marketing tools, photography, and social media platforms to create a brand, grow your audience, and scale your business.',
    skills: [ 'Branding', 'Google Ads', 'Google Analytics', 'Photography', 'SEO', 'Social Media Marketing'],
  }
]

export default tabData 
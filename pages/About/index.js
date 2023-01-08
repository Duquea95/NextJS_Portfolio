import Layout from '../../components/layout';
import ErrorPage from "../../components/404"
import TextWithImage from "../../components/TextWithImage"
import CopyBlock from '../../components/CopyBlock';

const About = () => {
  return(
    <>
      <TextWithImage/>
      <CopyBlock/>
    </>
  )
}

export default About;

About.getLayout = function getLayout(page) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}
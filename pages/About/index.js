import Layout from '../../components/layout';
import ErrorPage from "../../components/404"

const About = () => {
  return(
    <ErrorPage/>
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
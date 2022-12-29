import Layout from '../../components/layout';
import ErrorPage from "../../components/404"


const Work = () => {
  return(<>
    <ErrorPage/>
  </>)
}

export default Work

Work.getLayout = function getLayout(page) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}
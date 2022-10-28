import Layout from '../../components/layout';
import ErrorPage from "../../components/404"


const Works = () => {
  return(<>
    <ErrorPage/>
  </>)
}

export default Works

Works.getLayout = function getLayout(page) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}
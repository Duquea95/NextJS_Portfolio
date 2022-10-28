import Layout from '../../components/layout';
import ErrorPage from "../../components/404"

const Blog = () => {
  return(
    <ErrorPage/>
  )
}

export default Blog;

Blog.getLayout = function getLayout(page) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}
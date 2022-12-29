import Layout from '../../components/layout';
import Mailer from "../../components/Mailer"
import ErrorPage from "../../components/404"

const Contact = () => {
  return(
    <Mailer/>
  )
}

export default Contact;

Contact.getLayout = function getLayout(page) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}
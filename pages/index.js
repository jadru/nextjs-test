import Layout from '../components/layout'
import NestedLayout from '../components/index-layout'

export default function Page() {
    return <h1>Hello world!</h1>
}

Page.getLayout = function getLayout(page) {
  return (
      <Layout>
        <NestedLayout>{page}</NestedLayout>
      </Layout>
  )
}
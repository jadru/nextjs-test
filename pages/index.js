import Layout from '../components/layout'
import Link from "next/link";

export default function Page() {
    return <div claaaName={"menu"}>
        <h1>
            Read {' '}
            <Link href="/about">
                <a>About us</a>
            </Link>
        </h1>
    </div>
}

Page.getLayout = function getLayout(page) {
  return (
      <Layout>
        {page}
      </Layout>
  )
}
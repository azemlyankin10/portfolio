import { Layout } from '../../components/Layout/Layout'
import { ProgectsPageComponent } from '../../components/ProgectsPage/ProgectsPage'

const ProgectsPage = ({ data }: { data: [] }) => {

  return(
    <Layout>
      <ProgectsPageComponent
        data={data}
      />
    </Layout>
  )
}
export default ProgectsPage

export async function getStaticProps() {
  const res = await fetch(`${process.env.API_URL}/api/progects`)
  const data = await res.json()
  
  return {
    props: { data }
  }
}

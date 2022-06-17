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
  const res = await fetch('http://localhost:3000/api/progects')
  const data = await res.json()
  
  return {
    props: { data }
  }
}

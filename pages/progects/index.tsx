import { Layout } from '../../components/Layout/Layout'
import { ProgectsPageComponent } from '../../components/ProgectsPage/ProgectsPage'

export default function ProgectsPage({ data }: { data: [] }) {
  if(!data) return null
  return(
    <Layout>
      <ProgectsPageComponent
        data={data}
      />
    </Layout>
  )
}

export async function getStaticProps() {
  try {
    const res = await fetch(`${process.env.API_URL}/api/progects`)
    const data = await res.json()
    
    return {
      props: { data }
    }
  } catch {
    return {
      props: { data: null }
    }
  }
}

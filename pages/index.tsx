import { Layout } from '../components/Layout/Layout'
import { IMe, MainPageComponent } from '../components/MainPage/MainPage'
import parse from 'html-react-parser'

export default function MainPage({ data }: {data: IMe}) {
  if(!data) return null
  return (
    <Layout>
        <MainPageComponent 
          name={data.name} 
          job={data.job} 
          description={parse(data.description) as string} 
          img={data.img}
        />
    </Layout>
  )
}



export async function getStaticProps() {
  try {
    const res = await fetch(`${process.env.API_URL}/api/me`)
    const data = await res.json()
    
    return {
      props: {
        data
      }
    }
  } catch {
    return {
      props: {
        data: null
      }
    }
  }
}



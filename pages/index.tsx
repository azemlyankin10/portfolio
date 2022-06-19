import { Layout } from '../components/Layout/Layout'
import { IMe, MainPageComponent } from '../components/MainPage/MainPage'
import parse from 'html-react-parser'
import Head from 'next/head'

export default function MainPage({ data }: {data: IMe}) {
  if(!data) return <>Not Found</>
    return (
      <>
        <Head>
          <title>Introduction Page</title>
        </Head>
        <Layout>
          <MainPageComponent 
            name={data.name} 
            job={data.job} 
            description={parse(data.description) as string} 
            img={data.img}
            social={data.social}
          />
        </Layout>
      </>
    )
}

export async function getServerSideProps() {
  try {
    const res = await fetch(`${process.env.API_URL}/api/me`)
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



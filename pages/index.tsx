import { Layout } from '../components/Layout/Layout'
import { IMe, MainPageComponent } from '../components/MainPage/MainPage'
import parse from 'html-react-parser'

export default function MainPage({ data }: {data: IMe}) {
  if(!data) return <>Not Found</>
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



export async function getServerSideProps() {
  console.log(process.env.API_URL)
  
  try {
    const res = await fetch(`${process.env.API_URL}/api/me`)
    const data = await res.json()
    
    return {
      props: {
        data
      }
    }
  } catch(e) {
    console.log(e)
    
      return {
        props: {
          data: null
        }
      }
  }
}



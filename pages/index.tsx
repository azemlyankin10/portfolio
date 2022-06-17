import { Layout } from '../components/Layout/Layout'
import { IMe, MainPageComponent } from '../components/MainPage/MainPage'
import parse from 'html-react-parser'
import { useRecoilState } from 'recoil'
import { isLoading } from '../Store/Atoms'
import { useEffect } from 'react'

const MainPage = ({ data }: {data: IMe}) => {

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
export default MainPage


export async function getStaticProps() {
  const res = await fetch('http://localhost:3000/api/me')
  const data = await res.json()
  
  return {
    props: {
      data
    }
  }
}



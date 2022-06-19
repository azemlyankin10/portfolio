import Head from 'next/head'
import { useEffect, useState } from 'react'
import { Layout } from '../../components/Layout/Layout'
import { Loader } from '../../components/Loader/Loader'
import { ProgectsPageComponent } from '../../components/ProgectsPage/ProgectsPage'

export default function ProgectsPage() {
  const [loading, setLoading] = useState(false)
  const [data, setData] = useState([])
  const [error, setError] = useState('')
  useEffect(() => {
    setLoading(true)
    fetch(`${process.env.API_URL}/api/progects`)
      .then(res => res.json())
      .then(data => setData(data))
      .catch(e => { setError(e.toString()) })
      .finally(() => { setLoading(false) })
  }, [])
  
  
  return(
    <>
      <Head>
        <title>My portfolio</title>
      </Head>
      <Layout>
        {data && !loading && <ProgectsPageComponent data={data} />}
        {loading && <div className='mt-5 pt-5'><Loader/></div>}
        {error && <h1>{error}</h1>}
      </Layout>
    </>
  )
}


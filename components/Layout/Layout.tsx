import { Header } from '../Header/Header'

interface ILayout {
  children: React.ReactNode
}

export const Layout = ({ children }: ILayout) => (
  <>
    <Header/>
    <main>
      { children }
    </main>
  </>
)


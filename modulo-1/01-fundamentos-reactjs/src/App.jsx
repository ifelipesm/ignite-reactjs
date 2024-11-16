import { Header } from "./components/header"
import './global.css';
import { Post } from './post'

export function App() {

  return (
  <>
    <div>
      <Header />
        <div>
          <Post  title="Título do Post" text="Conteudo do post Conteudo do post Conteudo do post" />
        </div>
    </div>
  </>
  )
}


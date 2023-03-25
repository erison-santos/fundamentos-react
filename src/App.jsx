import { Header } from './components/Header'
import { Post } from './Post'
import './global.css'

export function App() {

  return (
    <div>
      <Header />
      <Post
        author="Diego Fernandes"
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam doloremque nesciunt modi error autem nostrum rerum illum, tempora, nemo sit assumenda ea fugiat quod voluptate suscipit! Fuga totam ipsa vitae."
      />
      <Post 
        author="Gabriel Pedro"
        content="Novo poste muito legal!"
      />
    </div>
  )
}
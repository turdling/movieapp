import { useRouter } from 'next/router'
import Modal from './modal'
import MovieCreateForm from './movieCreateForm'
import { createMovie } from '../actions'

const Sidebar = (props) => {
  const { categories } = props
  const router = useRouter()
  let modal = null

  const handleCreateMovie = (movie) => {
    createMovie(movie).then((movies) => {
      //in order to access "closeModal" function, Modal needs to be a class, and to make reference to the element
      modal.closeModal()
      //re routes to home page
      router.push('/')
    })
  }


    return (
        <div>
          <Modal ref={ele => modal = ele} hasSubmit={false}>
            <MovieCreateForm handleFormSubmit={handleCreateMovie}/>
          </Modal>
          <h1 className="my-4">Shop Name</h1>
          <div className="list-group">
            { categories.map(c =>
              <a
                onClick={() => props.changeCategory(c.name)}
                key={c.id} 
                href="#" 
                className={`list-group-item ${props.activeCategory === c.name ? 'active' : ''}`}>{c.name}</a> 
              )
            }
          </div>
        </div> 
    )
}

export default Sidebar
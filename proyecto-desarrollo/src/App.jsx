//import logo from './vite.svg';

// Hoja de estilos CSS del proyecto 
import './App.css';

// Importamos los hooks useEffect y useState 
import { useEffect, useState } from 'react';

// Importamos axios 
import axios from 'axios';

// Función principal 
function App() {

  // Iniciamos el estado de 'pos' y la función setPost() para actualizarlo 
  const [post, setPost] = useState([]);

  // Obtenemos las entradas de la API de WordPress 
  const fetchData = () => {
    return axios.get("https://tupagina.com/wp-json/wp/v2/posts/")
    /*
    .then(function (response) {
      console.log(response.data);
    })
    */

    // Recibimos los datos de la API
    .then((response) => setPost(response.data));
  }

  // Pasamos los datos de la API a la interfaz 
  useEffect(() => {
    fetchData();
  }, [])
  

  return (
    <div className="App">

      <div className="main" role="main">

      <h1>Artículos de WordPress</h1>

        <p>
          Usando Tecnología JAMStack (Netlify)
        </p>

        <div className="container">

            <div className="row">
              
              {post && post.length > 0 && post.map((postObj, index) => (         

              <div key={postObj.id} className="card col-md-4 m-1" style={{width: "18rem"}}>
                <img src={postObj.fimg_url} className="card-img-top" alt="..."/>
                <div className="card-body">
                  <h5 className="card-title">{postObj.title.rendered}</h5>
                  {/* <p className="card-text" dangerouslySetInnerHTML={{ __html: postObj.excerpt.rendered }}></p> */}               
                  
                  <a href={postObj.slug} className="btn btn-primary">Leer más</a>

                </div>
              </div>

              ))}
            
            </div>

        </div>

        <footer className="footer footer-1 bg-gray-100 py-8 sm:py-12 text-center mt-3">
          <div className="container mx-auto">
            <p>©Mi Proyecto<script>document.write(new Date().getFullYear())</script>. Todos los derechos reservados.</p>        
            <p>
              Creado por <a href="https://nubecolectiva.com" target="_blank">nubecolectiva.com</a> 
            </p>
          </div>
        </footer>

      </div>

    </div>
  );
}

export default App;
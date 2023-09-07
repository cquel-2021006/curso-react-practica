import './App.css';
import Testimonio from './components/Testimonio'

function App() {
  return (
    <div className="App">
      <div className='contenedor-principal'>
        <h1>Esto es lo que dicen nuestros colaboradores sobre Las fruterias</h1>
        <Testimonio 
        nombre='Josuke Higashikata'
        cargo='Dueño de Fruteria Higashikata'
        imagen='gappy'
        testimonio='Desde el momento en que pones un pie dentro de La Frutería de la Esquina, te envuelve una fragancia irresistible de frutas y verduras frescas. Sus estantes repletos de colores y sus montones de frutas y verduras exhiben la variedad de productos de temporada que ofrecen. Lo primero que notarás es la cuidadosa selección de productos, todos luciendo su mejor aspecto y listos para deleitar tus sentidos.' />
        
        <Testimonio 
        nombre='Jhonny Joestar'
        cargo='Co Fundador de la fruteria Joestar'
        imagen='jhonny'
        testimonio='Una de las características distintivas de esta frutería es el trato amable y personalizado que brindan a cada cliente. Los propietarios y empleados conocen a la perfección cada uno de los productos que ofrecen y están siempre dispuestos a responder preguntas, dar recomendaciones o incluso ayudarte a elegir la fruta más madura para tus necesidades. La atención al cliente aquí es excepcional y te hacen sentir como en casa' />
        
        <Testimonio 
        nombre='Mountain Tim'
        cargo='Propietario de la fruteria el rancho'
        imagen='tim'
        testimonio='Cuando se trata de llevar un estilo de vida saludable y disfrutar de alimentos frescos y deliciosos, la frutería Frutas del Paraíso se destaca como un oasis de sabor y calidad en medio de la ajetreada ciudad. Mi reciente visita a esta encantadora frutería me dejó una impresión muy positiva que no puedo dejar de compartir.' />
      </div>
    </div>
  );
}

export default App;

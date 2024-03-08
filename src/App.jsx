import {products} from "./data/products";
import HeaderKFC from "./components/header";
import FooterKfc from "./components/footer";
function App() {
  return (
    <>
    <HeaderKFC/>
    <div className="container">
      <div className="row row-cols-1 row-cols-md-3 g-4" style={{marginTop:"5px"}}>
      {
        products.map((p) => (
        <div className="col" key={p.id}>
        <div className="card" style={{backgroundColor:"#1C1816"}}>
          <img src={p.image} className="card-img-top" alt="..."/>
          <div className="card-body">
            <h5 className="card-title text-white">
              {p.title} &nbsp;
              <span className="badge text-bg-danger">Rs. {p.price}</span>
            </h5>
            <p className="card-text text-white">{p.description}</p>
            <a href="#" className="btn btn-danger">Add to cart</a>
          </div>
        </div>
        </div>
        )) 
      }
      </div>
    </div>
    <FooterKfc/>
    </>
  )
}

export default App
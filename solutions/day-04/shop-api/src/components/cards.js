import '../styles/cart.css'
const Card = ({product}) => {

    return (
            <div key={product.id} className="card">
               <div className="imgContainer">
                   <img src={product.image}></img>
               </div>
               <h2>
                   {product.name}
               </h2>
               {(product.applyDiscount === true) ? <h3> <p className="oldPrice"> {product.price} </p>
               <p className="discountValue">{product.discount} ({- parseInt(100- (product.discount * 100) / product.price) } %) </p>
               <p className="seeMore hide"> más colores </p>  </h3> : <h3> <p> {product.price} </p> 
               <p className="seeMore"> más colores </p>   </h3>}
               <button className="addProduct" onClick={() => {
                localStorage.setItem('products', JSON.stringify(product));
                console.log(localStorage.getItem('products'));
               }}> Añadir </button>
               <div className="cartContainer" ref="cardContainer">
                    <button id="close" onClick={
                        //closes the container cartContainer 
                        () => {
                            this.ref.cardContainer.classList.add('hide');
                    
                        }
                       
                    } >✖</button>
                    <div className="cart" >
                        {
                         
                        }
                    </div>
                </div>
           </div>
    )
}
export default Card
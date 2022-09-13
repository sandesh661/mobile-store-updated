import React from 'react';
import {ProductConsumer} from '../context';
import {Link} from 'react-router-dom';
import {ButtonContainer} from './Button';

class Details extends React.Component{
  render(){
    return(
      <ProductConsumer>
        { (res) => {
          const {id, title, img, price, company, info, inCart } = res.detailProduct;
          return (
            <div className="container py-5">
              {/*Title*/}
              <div className="row">
                <div className="col-10 mx-auto text-center text-slanted text-blue my-5">
                  <h1>{title}</h1>
                </div>
              </div>
              {/*end title*/}
              {/*Product info*/}
              <div className="row">
                <div className="col-10 mx-auto col-md-6 my-3">
                    <img src={img} className="img-fluid" alt="Product" />
                </div>
                {/*Product Details*/}
                <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                  <h2>model: {title}</h2>
                  <h4 className="text-title text-uppercase text-muted mt-3 mb-2">
                    made by: <span className="text-uppercase">{company}</span>
                  </h4>
                  <h4 className="text-blue">
                    <strong>
                      price: <span>$</span> {price}
                    </strong>
                  </h4>
                  <p className="text-capitalize font-weight-bold mt-3 mb-0">
                    info about the Product:
                  </p>
                  <p className="text-muted lead">{info}</p>
                  {/*Buttons*/}
                  <div>
                    <Link to="/">
                      <ButtonContainer>
                        Back to Products
                      </ButtonContainer>
                    </Link>
                    <ButtonContainer cart disabled={inCart?true:false} onClick={() => {
                      res.addToCart(id);
                      res.openModal(id);
                    }}>
                      {inCart? 'inCart': 'Add to Cart'}
                    </ButtonContainer>
                  </div>
                </div>
              </div>
            </div>
          );
        }}
      </ProductConsumer>
    );
  }
}

export default Details;

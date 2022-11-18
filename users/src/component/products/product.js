import React, { useState, useEffect } from 'react'
import './product.css'
import { add } from '../../store/cartSlice'
import { useDispatch } from 'react-redux'

const Product = () => {


    const dispatch = useDispatch()
    const [products, setproducts] = useState([])

    useEffect(() => {
        const fetchApi = async () => {
            const response = await fetch('https://fakestoreapi.com/products')
            const data = await response.json();
            console.log(data)
            setproducts(data)
        }
        fetchApi()

    }, [])

    const handleadd =(product) =>
    {

        dispatch(add(product))
    }
    return (
        <div className='product-wrapper'>
            {
                products.map(product =>
                    (
                        <div className='card' key={product.id}>
                            <img src={product.image} alt="" />
                            <h4>{product.title}</h4>
                            <h4>Price:${product.price}</h4>
                          
                            <button className='btn' onClick={()=>handleadd(product)}>Add to cart</button>

                        </div>
                    ))
            }
        </div>
    )
}

export default Product
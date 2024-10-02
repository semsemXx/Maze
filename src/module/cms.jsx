import React, { useState, useEffect } from 'react';
import axios from 'axios';
import classes from '@/css/cmsPage.module.css';

export default function CMSPage() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        
        axios.get('http://localhost:5000/products')
            .then((response) => {
                setProducts(response.data);
            })
            .catch((error) => {
                console.error('Error fetching products:', error);
            });
    }, []);

    const handleInputChange = (index, field, value) => {
        const updatedProducts = [...products];
        updatedProducts[index][field] = value;
        setProducts(updatedProducts);
    };

    const saveChanges = (index) => {
        const product = products[index];
        axios.put(`http://localhost:5000/products/${product._id}`, product)
            .then((response) => {
                console.log('Changes saved:', response.data);
            })
            .catch((error) => {
                console.error('Error saving changes:', error);
            });
    };

    return (
        <div className={classes.cmsContainer} style={{ backgroundColor: 'black', color: 'white', padding: '20px' }}>
            <div className={classes.cms}>
                <h1>CMS Page: Edit Products</h1>
                <table className={classes.cmsTable}>
                    <thead>
                        <tr>
                            <th>Product Name</th>
                            <th>Price</th>
                            <th>Image Path</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map((product, index) => (
                            <tr key={product._id}>
                                <td>
                                    <input
                                        type="text"
                                        value={product.name}
                                        onChange={(e) => handleInputChange(index, 'name', e.target.value)}
                                    />
                                </td>
                                <td>
                                    <input
                                        type="number"
                                        value={product.price}
                                        onChange={(e) => handleInputChange(index, 'price', e.target.value)}
                                    />
                                </td>
                                <td>
                                    <input
                                        type="text"
                                        value={product.image}
                                        onChange={(e) => handleInputChange(index, 'image', e.target.value)}
                                    />
                                </td>
                                <td>
                                    <button onClick={() => saveChanges(index)}>Save Changes</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

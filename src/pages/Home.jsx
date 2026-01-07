import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then(res => res.json())
      .then(data => {
        setProducts(data.products);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center">
        Loading...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">🛒 Product Catalog</h1>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 max-w-7xl mx-auto">
        {products.map(product => (
          <div
            key={product.id}
            className="bg-gray-800 p-4 rounded-lg shadow hover:shadow-lg transition"
          >
            <img
              src={product.thumbnail}
              alt={product.title}
              className="w-full h-32 object-cover rounded-md mb-2"
            />
            <h3 className="font-medium text-sm line-clamp-2">{product.title}</h3>
            <p className="text-blue-400 mt-1">Rp {product.price.toLocaleString('id-ID')}</p>

            <Link
              to={`/product/${product.id}`}
              className="block w-full mt-2 py-1 px-2 bg-blue-600 hover:bg-blue-700 rounded text-xs font-medium text-center text-white transition"
            >
              detail
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
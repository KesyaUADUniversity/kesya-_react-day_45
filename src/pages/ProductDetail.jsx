import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then(res => res.json())
      .then(data => {
        setProduct(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center">
        Loading detail...
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen bg-gray-900 text-white p-6">
        <p className="text-center">Product not found</p>
        <Link to="/" className="block text-center text-blue-400 mt-4">← Back to Home</Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <Link to="/" className="text-blue-400 hover:underline mb-6 inline-block">
        ← Back to Home
      </Link>

      <div className="max-w-4xl mx-auto bg-gray-800 p-6 rounded-xl shadow">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <img
              src={product.thumbnail}
              alt={product.title}
              className="w-full h-64 object-contain bg-gray-700 rounded"
            />
            {product.images && product.images.length > 1 && (
              <div className="mt-4 flex gap-2 overflow-x-auto pb-2">
                {product.images.slice(0, 4).map((img, idx) => (
                  <img
                    key={idx}
                    src={img}
                    alt={`${product.title} ${idx + 1}`}
                    className="w-16 h-16 object-cover rounded border border-gray-600"
                  />
                ))}
              </div>
            )}
          </div>

          <div>
            <h1 className="text-2xl font-bold mb-2">{product.title}</h1>
            <p className="text-blue-400 text-xl mb-3">
              Rp {product.price.toLocaleString('id-ID')}
            </p>
            <p className="text-gray-300 mb-4">{product.description}</p>

            <div className="space-y-2 text-sm">
              <p><strong>Brand:</strong> {product.brand}</p>
              <p><strong>Category:</strong> {product.category}</p>
              <p><strong>Stock:</strong> {product.stock} {product.stock <= 5 && '⚠️ Low Stock'}</p>
              <p><strong>Rating:</strong> ⭐ {product.rating}/5</p>
              <p><strong>Shipping:</strong> {product.shippingInformation}</p>
              <p><strong>Warranty:</strong> {product.warrantyInformation}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
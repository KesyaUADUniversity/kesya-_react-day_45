import React, { useState, useEffect } from 'react';
import ProductForm from './components/ProductForm';
import ProductItem from './components/ProductItem';

const App = () => {
  const [products, setProducts] = useState([]);
  const [editingProduct, setEditingProduct] = useState(null);

  // Ambil data dari API saat komponen mount
  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then(res => res.json())
      .then(data => setProducts(data.products));
  }, []);

  // CREATE
  const addProduct = (newProduct) => {
    const fakeId = Math.max(...products.map(p => p.id), 0) + 1;
    setProducts([...products, { ...newProduct, id: fakeId }]);
  };

  // UPDATE
  const updateProduct = (updatedProduct) => {
    setProducts(products.map(p => p.id === updatedProduct.id ? updatedProduct : p));
    setEditingProduct(null);
  };

  // DELETE
  const deleteProduct = (id) => {
    setProducts(products.filter(p => p.id !== id));
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <header className="text-center mb-8">
        <h1 className="text-3xl font-bold text-blue-400">🛒 adalah pokoknya store</h1>
        <p className="text-gray-400">data dummy nich </p>
      </header>

      {/* Form */}
      <ProductForm
        onAdd={addProduct}
        editingProduct={editingProduct}
        onUpdate={updateProduct}
        onCancel={() => setEditingProduct(null)}
      />

      {/* Daftar Produk */}
      <div className="max-w-2xl mx-auto">
        {products.map(product => (
          <ProductItem
            key={product.id}
            product={product}
            onEdit={setEditingProduct}
            onDelete={deleteProduct}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
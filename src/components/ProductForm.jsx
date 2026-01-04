import React, { useState } from 'react';

const ProductForm = ({ onAdd, editingProduct, onUpdate, onCancel }) => {
  const [title, setTitle] = useState(editingProduct?.title || '');
  const [price, setPrice] = useState(editingProduct?.price || '');

  const handleSubmit = (e) => {
    e.preventDefault();
    const productData = { title, price: Number(price) };
    if (editingProduct) {
      onUpdate({ ...productData, id: editingProduct.id });
    } else {
      onAdd(productData);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-gray-800 p-4 rounded-lg mb-6">
      <h3 className="text-lg font-semibold mb-3">
        {editingProduct ? 'Edit Produk' : 'Tambah Produk Baru'}
      </h3>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Nama produk"
        className="w-full p-2 mb-3 rounded bg-gray-700 text-white"
        required
      />
      <input
        type="number"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        placeholder="Harga"
        className="w-full p-2 mb-3 rounded bg-gray-700 text-white"
        required
      />
      <div className="flex gap-2">
        <button
          type="submit"
          className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded"
        >
          {editingProduct ? 'Simpan' : 'Tambah'}
        </button>
        {editingProduct && (
          <button
            type="button"
            onClick={onCancel}
            className="px-4 py-2 bg-gray-600 hover:bg-gray-500 rounded"
          >
            Batal
          </button>
        )}
      </div>
    </form>
  );
};

export default ProductForm;
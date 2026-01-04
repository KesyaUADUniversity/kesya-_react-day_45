import React from 'react';

const ProductItem = ({ product, onEdit, onDelete }) => {
  return (
    <div className="bg-gray-800 p-4 rounded-lg flex justify-between items-center mb-3">
      <div>
        <h4 className="font-bold">{product.title}</h4>
        <p className="text-blue-400">Rp {product.price.toLocaleString('id-ID')}</p>
      </div>
      <div className="flex gap-2">
        <button
          onClick={() => onEdit(product)}
          className="px-3 py-1 bg-yellow-600 hover:bg-yellow-700 rounded text-sm"
        >
          Edit
        </button>
        <button
          onClick={() => onDelete(product.id)}
          className="px-3 py-1 bg-red-600 hover:bg-red-700 rounded text-sm"
        >
          Hapus
        </button>
      </div>
    </div>
  );
};

export default ProductItem;
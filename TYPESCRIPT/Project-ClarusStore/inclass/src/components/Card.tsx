import React from 'react'
import { Product } from '../models/models'

interface ICard {
    item: Product;
    text: string;
    handleFunc: (item:Product) => void
}

const Card:React.FC<ICard> = ({item,text,handleFunc}) => {
  return (
    <div className="w-10/12 sm:w-6/12 md:w-4/12 lg:w-3/12 flex flex-col justify-between bg-white rounded-lg">
      <div className="p-4 ">
        <h1 className="text-gray-900 uppercase text-xl line-clamp-1 hover:line-clamp-none">
          {item.title}
        </h1>
        <p className="text-sm mt-1 text-gray-500 line-clamp-1 hover:line-clamp-none">
          {item.description}
        </p>
      </div>
      <img
        className="p-2 min-h-[150px] max-h-[150px] object-contain"
        src={item.images[0]}
        alt={item.title}
      />
      <div className="flex justify-between items-center bg-gray-700 p-3">
        <h2 className="text-gray-100 font-bold ">${item.price}</h2>
        <button
          className="bg-gray-300 p-1 rounded-lg animate-pulse hover:animate-none"
          onClick={() => handleFunc(item)}>
          {text}
        </button>
      </div>
    </div>
  );
}

export default Card
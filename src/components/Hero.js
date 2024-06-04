import React from 'react';
import productImage1 from '../assets/product1.png'; // Substitua pelo caminho correto da imagem
import productImage2 from '../assets/product2.png'; // Substitua pelo caminho correto da imagem
import productImage3 from '../assets/product3.png'; // Substitua pelo caminho correto da imagem

function Hero() {
  return (
    <div className="bg-gray-200 h-1/2 flex flex-col items-center justify-center mt-0">
      <div className="text-center px-4 mb-20">
        <h1 className="text-4xl md:text-5xl font-bold mb-0">Bem Vindo!</h1>
        <p className="text-xl md:text-2xl">
          Somos uma empresa genuinamente roairense. Temos compromisso com a qualidade e bom atendimento.
        </p>
        <p className="text-xl md:text-2xl">Nossos produtos:</p>
      </div>
      <div className="flex flex-wrap justify-center gap-4">
        <ProductCard
          title="Bloco de Concreto 9 cm"
          description="Tamanho: 9cm x 19cm x 39cm"
          price="R$3,40"
          oldPrice="R$4,50"
      image={productImage1}
        />
        <ProductCard
          title="Bloco de Concreto 14 cm"
          description="Tamanho: 14cm x 19cm x 39cm"
          price="R$6,00"
          oldPrice="R$6,59"
          image={productImage2}
        />
        <ProductCard
          title="Bloco de Concreto 19 cm"
          description="Tamanho: 19cm x 19cm x 39cm"
          price="R$8,00"
          oldPrice="R$8,90"
          image={productImage3}
        />
      </div>
    </div>
  );
}

function ProductCard({ title, description, price, oldPrice, image }) {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden w-72">
      <img src={image} alt={title} className="w-full h-48 object-cover"/>
      <div className="p-5">
        <h3 className="text-lg font-bold mb-2">{title}</h3>
        <p className="text-gray-600 mb-2">{description}</p>
        <div className="text-xl font-bold text-green-600">{price}</div>
        <div className="text-sm text-gray-500 line-through">{oldPrice}</div>
      </div>
    </div>
  );
}

export default Hero;

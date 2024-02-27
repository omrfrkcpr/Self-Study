import React from "react";

//! react alanında parametreli fonksiyon çağıracaksak, fonksiyonun adının önüne ()=> işaretini koymalıyız, yoksa fonksiyonu event ı beklemeden çalıştırıyor

const Events = () => {
  // JS field
  let title = "Hello";
  let count = 0;

  const increase = () => {
    count++;
    console.log(count);
    document.querySelector(".count").textContent = count;
  };

  const changeTitle = (a) => {
    console.log(a);
    document.querySelector(".title-span").textContent = a;
  };

  const reset = () => {
    document.querySelector(".count").textContent = 0;
    document.querySelector(".title-span").textContent = "Hello";
  };
  //? Bir componentin return kismi 3 farkli yontem ile yeniden render edilir.
  //? 1- Herhangi bir state degisirse
  //? 2- Props degisirse
  //? 3- Refresh force edilirse (tercih edilen bir durum olmaz)

  return (
    // JSX field
    <div className="container text-center mt-4">
      <h1>
        Title: <span className="title-span">{title}</span>
      </h1>
      <h2>
        COUNT: <span className="text-danger count">{count}</span>
      </h2>
      <button onClick={increase} className="btn btn-primary m-1">
        Increase
      </button>
      <button
        onClick={() => changeTitle("There!")}
        className="btn btn-danger m-1"
      >
        Change Title
      </button>
      <button onClick={reset} className="btn btn-info m-1">
        Reset
      </button>
    </div>
  );
};

//?--------------------------------------------------
//! Konsolda, güncellenen değişen count u görebiliriz ancak web sayfasında (biz görüntüle demeden) görüntülenmiyor..
//* Çünkü, REACT herhangi bir element i default olarak static sayar
//*DOM manipülasyonunu en aza indirmek için bunu yapar
//* Hangi elementin interactive olduğu konusunda React'e bilgi vermeliyiz.
//! REACT'i interactive elements hakkında bilgilendirmek için iki yöntem kullanıyoruz
//* 1. Statefull Classes. State-based inform (Class Components)
//* 2. Hooks (Functional Components)
//?-------------------------------------------------

export default Events;

// ? ====================================================
// ?              FONKSİYONLAR - RECURSIVE
// ? ====================================================

//* Kendi kendi çağıran fonksiyona recursive fonksiyon denilir.

//* Özellikle karmaşık hesaplamaların kodlamasını kolaylaştırmak için kullanılır.
//* Ancak, dikkatli kullanmak gerekir. Yoksa stack overflow hatası alınabilir.

//! sayma sayilarinin ilk 6 teriminin toplamini bulma

const add = (n) => {
  let sum = 0;

  for (let i = 1; i <= n; i++) {
    sum += i;
  }

  return sum;
};

console.log(add(9)); // 45

//& Alternative with recursive function

const add2 = (n2) => {
  if (n2 < 1) {
    return n2;
  } else {
    return add2(n2 - 1) + n2;
  }
};

console.log(add2(9)); // 45

//& Girilen n. terimdeki Fibonacci sayısını  yazdıran fonksiyonu recursive olarak kodlayınız.

console.log("************ RECURSION *************");

//? FIBONACCI terimleri:  0, 1, 1, 2, 3, 5, 8, 13, 21, 34 ...
//! fibonacci dizisindeki  n. terimi  bulma fonksiyonu

const fibo = (n) => {
  if (n == 3 || n == 2) return 1;
  else if (n == 1) return 0;
  else if (n < 0) return alert("Please enter a positive number of terms");
  else return fibo(n - 1) + fibo(n - 2);
};

console.log(fibo(8));

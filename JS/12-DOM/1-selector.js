//* ======================================================//
//*                   GETELEMENTBYID()                    //
//* ======================================================//

//& button style

const myBtn = document.getElementById("btn");

myBtn.style.width = "300px";
myBtn.style.height = "100px";
myBtn.style.fontSize = "3rem"; // instead of kebap-case same as CSS we use camelCase in JS
myBtn.style.backgroundColor = "red";

//& paragraph style

const par1 = document.getElementById("par1").style;

par1.width = "100%";
par1.fontSize = "3rem";
par1.color = "green";
par1.textAlign = "center";

//* ========================================================//
//*                   GETELEMENTSBYTAGNAME()
//* tag ismiyle çağırıyoruz.aynı tag den çok olacağı için
//* index le hangisini seçtiğimizi belirtiyoruz
//* (HTMLCollection- Array özellikleri gösterir)
//*================================================

//? HTML-COLLECTION(dizisi)

const image = document.getElementsByTagName("img");

image[0].style.width = "50%";
image[1].style.border = "5px solid red";
image[1].style.width = "300px";

//* ======================================================//
//*                   GETELEMENTSBYCLASSNAME()
//*                 class ismiyle çağırıyoruz
//*=======================================================//

const title = document.getElementsByClassName("H1");
console.log(title);

title[1].style.color = "purple";
title[0].style.fontSize = "3rem";

//^ HTMLCollection larda ARRAY i değiştirmeyen metodları kullanabilirsiniz (for-loop)

for (let i = 0; i < title.length; i++) {
  const myStyle = title[i].style;
  myStyle.backgroundColor = "lightgray";
  myStyle.width = "50%";
  myStyle.textAlign = "center";
  myStyle.margin = "2rem auto";
}

//^ innerHTML içerik ve etiket ekler
//^ textContent sadece içerik değiştirmeye yarar

title[0].innerHTML =
  "<a href='https://www.w3schools.com/js/js_htmldom.asp' target= '_blank'>DOM (Document Object Model)</a>";
title[0].style.width = "75%";
title[0].style.padding = "1rem";

//^ sadece içerik değişecekse textContent tercih edilir, ama innerHTML de etiketi değiştirebildiği gibi, sadece içeriği de değiştirebilir
title[1].textContent = "Are u allright?";

//* ======================================================
//*           QUERYSELECTOR,QUERYSELECTORALL
//*======================================================

document.querySelector("title").textContent = "DOM MANIPULATION :)";
document.querySelector("#body").style.backgroundImage =
  "linear-gradient(green,pink)";
document.querySelector(".H2").style.color = "pink";

const parag = document.querySelectorAll("p");
console.log(parag); //? NodeList

parag[1].style.fontSize = "3rem";
parag[1].style.textAlign = "right";
parag[1].style.marginRight = "3rem";

// Bir NodeList ve bir HTMLcollection hemen hemen aynı şeydir.

// Her ikisi de bir belgeden çıkarılan düğümlerin (öğelerin-node) dizi benzeri koleksiyonlarıdır (listeleridir). Düğümlere indeks numaraları ile erişilebilir. indeks 0'dan başlar.

// Her ikisinin de listedeki (koleksiyon) öğelerin sayısını döndüren bir uzunluk özelliği (length) vardır.

// HTMLCollection öğelerine adları, kimlikleri veya dizin numaralarıyla erişilebilir.
// baslik.namedItem("id1").style.color = "red";
//  baslik[0].style.color="red";

// NodeList öğelerine yalnızca dizin numaralarıyla erişilebilir.

// Bir HTMLCollection her zaman canlı bir koleksiyondur. Örnek: DOM'daki bir listeye bir <li> öğesi eklerseniz, HTMLCollection'daki liste de değişecektir.

// Bir NodeList genellikle statik bir koleksiyondur. Örnek: DOM'daki bir listeye bir <li> öğesi eklerseniz, NodeList'teki liste değişmez.
// getElementsByClassName()ve yöntemleri , getElementsByTagName() canlı bir HTMLCollection döndürür.

// querySelectorAll(), statik bir NodeList döndürür.
// !burada netten https://softauthor.com/javascript-htmlcollection-vs-nodelist/ adresinden göster
// Dizi Değil!
// Bir NodeList bir dizi gibi görünebilir ama öyle değildir.

// Bir NodeList içinde döngü yapabilir ve düğümlerine dizine göre başvurabilirsiniz.

// Ancak, bir NodeList'te push(), pop() veya join() gibi Array yöntemlerini kullanamazsınız.

//*=================================================================
//*              1- Senkron-Asenkron Programlama
//* ================================================================

//! Javascript ist eine Single-Threaded- und asynchrone Programmiersprache.

//? Asenkron Programlama
//? --------------------------------------------------------------
//? Asynchrone Programmierung ist eine Technik der parallelen Programmierung, die es ermöglicht, eine Unteraufgabe im Hintergrund auszuführen, unabhängig vom Hauptthread der Anwendung. Wenn diese Unteraufgabe abgeschlossen ist (erfolgreich oder erfolglos), wird der Hauptthread darüber benachrichtigt. Asynchrone Programmierung trägt dazu bei, die Leistung von Anwendungen zu steigern und das Benutzererlebnis zu verbessern.

//? Es ist sehr wichtig, asynchrone Programmierung zu verwenden, insbesondere bei zeitaufwändigen Codes wie dem Abrufen von Daten aus einer API oder Datenbank, Eingabe-/Ausgabevorgängen und Lese-/Schreibvorgängen für Dateien.

//*Async Programming
//****************************************** */

const wait = (ms) => {
  const start = new Date().getTime();

  while (new Date().getTime() < start + ms) {}
};

console.time("timer1");
wait(3000);
console.timeEnd("timer1"); // timer1: 2999.922119140625 ms

//*Async (setTimeout)
//****************************************** */

setTimeout(() => {
  console.log("Hello World");
}, 2000);

console.log("I'm first");

setTimeout(() => {
  console.log("Hi");
}, 1000);

/*
timer1: 3.000s
I'm first
Hi
Hello World
*/

//! settimeout occurs at the available time, it runs when the following processes are finished when its turn has passed.

//* Async(setInterval, clearInterval) continues until it is stopped at certain intervals. For example, it can be used to update the exchange rate every 1 minute
//***************************** */

//? setInterval non-blocking (the code does not get stuck here, it works in the codes below)

let sayac = 0;
const interval1 = setInterval(() => {
  console.log(++sayac);

  if (sayac == 6) {
    //! clear interval
    clearInterval(interval1);
  }
}, 1000);

//*Async (callback hell)
//****************************************** */

setTimeout(() => {
  console.log("john: hi, paul");
  setTimeout(() => {
    console.log("paul: hi, how re u?");
    setTimeout(() => {
      console.log("john: fine, u?");
    }, 1000);
  }, 1000);
}, 1000);

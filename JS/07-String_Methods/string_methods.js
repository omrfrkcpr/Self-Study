//* -------------------------------------------------------- */
//*                      STRING METHODS                      */
//* -------------------------------------------------------- */
// String metodları () kullanılır.
//? Chaining yani zincirleme olarak birden fazla metod birlikte kullanılabilir.
//! -------------------------------------------------------------------------- */
// charAt()             Returns the character at the specified index.
// charCodeAt()	        Returns the Unicode of the character at the specified index.
// concat()	            Joins two or more strings, and returns a new string.
// endsWith()	        Checks whether a string ends with a specified substring.
// fromCharCode()	    Converts Unicode values to characters.
// includes()	        Checks whether a string contains the specified substring.
// indexOf()	        Returns the index of the first occurrence of the specified value in a string.
// lastIndexOf()	    Returns the index of the last occurrence of the specified value in a string.
// localeCompare()	    Compares two strings in the current locale.
// match()	            Matches a string against a regular expression, and returns an array of all matches.
// repeat()	            Returns a new string which contains the specified number of copies of the original string.
// replace()	        Replaces the occurrences of a string or pattern inside a string with another string, and return a new string without modifying the original string.
// search()	             Searches a string against a regular expression, and returns the index of the first match.
// slice()	            Extracts a portion of a string and returns it as a new string.
// split()	            Splits a string into an array of substrings.
// startsWith()	        Checks whether a string begins with a specified substring.
// substr()	            Extracts the part of a string between the start index and a number of characters after it.
// substring()	        Extracts the part of a string between the start and end indexes.
// toLocaleLowerCase()	Converts a string to lowercase letters, according to host machine's current locale.
// toLocaleUpperCase()	Converts a string to uppercase letters, according to host machine's current locale.
// toLowerCase()	    Converts a string to lowercase letters.
// toString()	        Returns a string representing the specified object.
// toUpperCase()	    Converts a string to uppercase letters.
// trim()	            Removes whitespace from both ends of a string.
// valueOf()	        Returns the primitive value of a String object.

console.log("****STRING METHODS******");

//& 1-Basic string definination (primitive data type)
const str1 = "clarusway";
const str2 = "hello";
const str3 = "all the world";

console.log(str1 + str2, typeof (str1 + str2)); // claruswayhello string

//& 2-String constructor (non primitive data type)

const str4 = new String("new String");
console.log(str4, typeof str4); // {new String} object

//! Normalde primitive veri tiplerinin property veya metodu olmaz.
//! Ancak Javascript  otomatik olarak primitive String'leri String
//! object lerine dönüştürür. Bu sayede, String object lerine ait olan
//! fonksiyonlar veya özellikleri primitive string ile kullanmak
//! mümkün olur. Ayrıca 2 tür arasında çevrim yapmakta mümkündür.
//? Ek Açıklama için : https://javascript.info/primitives-methods

// -------------------------------------------------------- */
//*               STRING YAPISI VE INDEXLEME                */
// -------------------------------------------------------- */

let course = "clarusway";
console.log(course[0]); // c
console.log(course[1]); // l
console.log(course.length); // 9

//? Stringler,primitive bir tür olduğu için parça olarak değiştiremezsiniz
//? immutable - not mutable

// -------------------------------------------------------- */
//*              concat() immutable=değiştirmez             */
//    Joins two or more strings, and returns a new string.  */
// -------------------------------------------------------- */

//! it doesnt change the original value! We need to assign it to another element
const s1 = "hello";
const s2 = "world";
console.log(s1.concat(s2));
console.log(s1);
const s3 = s1.concat(s2);
console.log(s3);

// -------------------------------------------------------- */
//*   toLowerCase() toUpperCase() immutable=değiştirmez     */
//    Converts a string to lowercase or uppercase letters.  */
// -------------------------------------------------------- */

const myName = "Ashley Miller";

console.log(myName.toLowerCase()); // ashley miller
console.log(myName.toUpperCase()); // ASHLEY MILLER

//! toLocaleUpperCase("tr") = convert it to uppercase in turkish rules!
console.log(myName.toLocaleUpperCase("tr")); // ASHLEY MİLLER

// -------------------------------------------------------- */
//*                         charAt()                        */
//       Returns the character at the specified index.      */
// -------------------------------------------------------- */

const s4 = "primitive \n veri tiplerinin \n property ya \n da methodu olmaz.";

console.log(s4);
console.log(s4.charAt(5)); // t
console.log(s4.charAt(s4.length - 1)); // .

// -------------------------------------------------------- */
//*                includes() - case sensitive              */
// Checks whether a string contains the specified substring */
// -------------------------------------------------------- */

const text = "to be or not to be, that is The questions.";

console.log(text.includes("TO BE")); // false
console.log(text.toUpperCase().includes("TO BE")); // true
console.log(text.includes("to be")); // true
console.log(text.includes("to be", 14)); // false = 14.indexten sonraki to be yok
console.log(text.includes("quest")); // true
console.log(text.includes(" ")); // true

// -------------------------------------------------------- */
//*        indexOf() / lastIndexOf() - case sensitive       */
//      Returns the index of the first occurrence of the    */
//                specified value in a string.              */
// -------------------------------------------------------- */

const text2 = "to be or not to be, that is The questions.";

console.log(text2.indexOf("be")); // 3
console.log(text2.lastIndexOf("be")); // 16

console.log(text2.indexOf("the")); // returns -1 if there isnt

console.log(text2.indexOf("be", 4)); // 16
console.log(text2.indexOf("be", text2.indexOf("be") + 1)); // 16

// -------------------------------------------------------- */
//*                search() - case sensitive                */
//    Searches a string against a regular expression,and    */
//          returns the index of the first match.           */
// -------------------------------------------------------- */

const text3 = "to be or not to be, 5 that is The questions.";

//! REGEX - regular expression

console.log(text3.search(/[A-Z]/)); // 30.index
console.log(text3.search(/[a-z]/)); // 0
console.log(text3.search(/[0-9]/)); // 20.index
console.log(text3.search(/[.]/)); // 43.index
console.log(text3.search(/[.]/)); // 43.index
console.log(text3.indexOf(".")); // 43.index

console.log(text3.search(/[^a-z]/)); // 2.index (space)
console.log(text3.search(/[^0-9a-zA-Z]/)); // 2.index - rakam kucuk ve buyuk harf disindaki ilk karakteri dondur (space)
console.log(text3.search(" ")); // 2.index (space)
console.log(text3.search(/[aeuüıioö]/)); // 1.index (o)

console.log(text3.toUpperCase().search(/[aeuüıioö]/i)); // 1.index // i = incase sensitive / ignore case sensitive

// -------------------------------------------------------- */
//*        startsWith(), endsWith() - case sensitive        */
//   Checks whether a string begins/ends with a specified   */
//                        substring.                        */
// -------------------------------------------------------- */

const text4 = "Salina salina sinsice olurum sana!";

console.log(text4.startsWith("sa")); // false
console.log(text4.startsWith("Sa")); // true
console.log(text4.endsWith("sana!")); // true
console.log(text4.startsWith("salina", 7)); // true - incl. 7.index
console.log(text4.endsWith("salina", 13)); // true - incl. 12.index

// -------------------------------------------------------- */
//*       replace(searchFor, replaceWith) - immutable       */
// Replaces the occurrences of a string or pattern inside a */
//    string with another string, and return a new string   */
//        without modifying the original string.            */
// -------------------------------------------------------- */
//! i = incase sensitive / ignore case sensitive
//! g = apply for all that element == replaceAll()
//! gi = g + i

let read = "Oku Johny gibi saf olma saf olma saf olma";

read.replace("saf olma", "basarili ol");
console.log(read); // Oku Johny gibi saf olma saf olma saf olma

read = read.replace("saf olma", "basarili ol");
console.log(read); // Oku Johny gibi basarili ol saf olma saf olma

console.log(read.replace(/SAF/i, "fakir")); // Oku Johny gibi basarili ol fakir olma saf olma

console.log(read.replace(/SAF/gi, "fakir")); // Oku Johny gibi basarili ol fakir olma fakir olma
console.log(read.replaceAll("saf", "fakir")); // Oku Johny gibi basarili ol fakir olma fakir olma

// ----------------------------------------------------------------*/
//*                 slice(beginIndex, endIndex)                    */
//  Extracts a portion of a string and returns it as a new string. */
//*               substring(beginIndex, endIndex)                  */
// Extracts the part of a string between the start and end indexes */
// --------------------------------------------------------------- */

//! Substringlerde - index yazdirilmaz.

const veysel = "UZUN INCE BIR YOLDAYIM GIDIYORUM GUNDUZ GECE";

console.log(veysel.slice(10)); // BIR YOLDAYIM GIDIYORUM GUNDUZ GECE
console.log(veysel.slice(17, 22)); // DAYIM == (17 dahil, 22 dahil degil)
console.log(veysel.substring(17, 22)); // DAYIM (not preferred in js)
console.log(veysel.slice(-10)); // UNDUZ GECE (0 dahil degil)
console.log(veysel.slice(-10, -6)); // UNDU

console.log(veysel.substring(veysel.length - 4)); // GECE
console.log(veysel.substring(veysel.length - 4, veysel.length - 2)); // GE

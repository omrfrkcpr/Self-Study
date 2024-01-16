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

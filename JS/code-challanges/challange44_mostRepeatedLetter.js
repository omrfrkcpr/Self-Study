//! First, convert the string in the text below to array. Then, filter the words containing at least 1 letters "e". Between them, display the words that have minimum 5 letters as uppercase letters and the others as lowercase letters.

const text =
  "Whether article spirits new her covered hastily sitting her. Money witty books nor son add. Chicken age had evening believe but proceed pretend mrs. At missed advice my it no sister. Miss told ham dull knew see she spot near can. Spirit her entire her called.Any delicate you how kindness horrible outlived servants. You high bed wish help call draw side. Girl quit if case mr sing as no have. At none neat am do over will. Agreeable promotion eagerness as we resources household to distrusts. Polite do object at passed it is. Small for ask shade water manor think men begin. Am finished rejoiced drawings so he elegance. Set lose dear upon had two its what seen. Held she sir how know what such whom. Esteem put uneasy set piqued son depend her others. Two dear held mrs feet view her old fine. Bore can led than how has rank. Discovery any extensive has commanded direction. Short at front which blind as. Ye as procuring unwilling principle by.";

const newText = text
  .split(" ")
  .filter((word) => {
    const eCount = word
      .split("")
      .filter((char) => char.toLowerCase() === "e").length;
    return eCount >= 1;
  })
  .map((word) => {
    if (word.length >= 5) return word.toUpperCase();
    else return word.toLowerCase();
  });

console.log(newText);

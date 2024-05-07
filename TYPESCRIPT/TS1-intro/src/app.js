function selamla3(mesaj, ...isimler) {
    console.log(isimler);
    return `${mesaj + ' ' + isimler.join(",") + '!'}`;
}
console.log(selamla3('Hello'));
console.log(selamla3('Hello', 'Mark'));
console.log(selamla3('Hello', 'Mark', 'Harvey', 'Ashley'));

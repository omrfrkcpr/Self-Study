-- * WHERE - Filtreleme
--SELECT * FROM Album; -- tüm veriler listelenir
--SELECT * FROM Album WHERE AlbumId=1;
--SELECT * FROM Album WHERE Title='For Those About To Rock We Salute You';
--SELECT * FROM Customer WHERE Country='Canada'; -- Ülkesi kanada olanlar
--SELECT * FROM Customer WHERE Country='USA';
--SELECT * FROM Customer WHERE CustomerId=15;
--SELECT * FROM Customer;
-- 1. Mark'dan sonraki müşterileri getir
 --SELECT * FROM Customer WHERE FirstName='Mark'; -- 1. Mark id si 14
 --SELECT * FROM Customer WHERE CustomerId>14;
-- 1. Mark ve sonraki müşterileri getir
--SELECT * FROM Customer WHERE CustomerId>=14;
-- iki Mark arası müşterileri getir
--SELECT * FROM Customer WHERE FirstName='Mark'; -- 2. Mark id si 55
--SELECT * FROM Customer WHERE CustomerId > 14;
--SELECT * FROM Customer WHERE CustomerId < 55;
-- iki komutu birleştirelim
--SELECT * FROM Customer WHERE CustomerId BETWEEN 14 AND 55;
-- USA da yaşamayanları getir
--SELECT * FROM Customer WHERE Country='USA';
--SELECT * FROM Customer WHERE Country<>'USA';
--SELECT * FROM Customer WHERE NOT Country = 'USA';
--SELECT * FROM Customer WHERE Country !='USA';
-- Canada ve Brazil yada yaşayanları getir
--SELECT * FROM Customer WHERE Country = 'Canada';
--SELECT * FROM Customer WHERE Country = 'Brazil';
--SELECT * FROM Customer WHERE Country = 'Canada' OR Country = 'Brazil';
--SELECT * FROM Customer WHERE Country = 'Canada' OR Country = 'Brazil' OR Country = 'USA';
--SELECT * FROM Customer WHERE Country IN ('Canada', 'Brazil', 'USA');
--SELECT * FROM Customer WHERE Country IN ('Cana', 'Brazil', 'USA'); -- Cana ile ilgili veri yok birebir eşleme lazım
-- SELECT * FROM Customer WHERE Country NOT IN ('USA', 'Brazil', 'Denmark');
--SELECT * FROM Customer WHERE CustomerId IN (1,4,8,45) OR Country = "Brazil";
--SELECT * FROM Customer WHERE CustomerId IN (1,4,8,45) AND (Country = "Brazil" OR Country = "USA") OR CustomerId = 45;
--SELECT * FROM Customer WHERE Country IN ("Brazil", "USA", "Denmark") AND CustomerId BETWEEN 25 AND 27;
--SELECT * FROM Customer WHERE Country LIKE "USA"; -- Country = "USA"
--SELECT * FROM Customer WHERE Country LIKE "U%"; -- U ile baslayan country ler
--SELECT * FROM Customer WHERE Country LIKE "%A"; -- Sonu A ile biten country ler
--SELECT * FROM Customer WHERE Country LIKE "_SA"; -- 2. ve 3. harfleri SA olan country ler
--SELECT * FROM Customer WHERE Country LIKE "__A"; -- 3. harfi A olan country ler
--SELECT * FROM Customer WHERE Country LIKE "U_A%"; -- 3. harfi A olan country ler
--SELECT * FROM Customer WHERE Country LIKE "U%A"; -- 3. harfi A olan country ler
--SELECT * FROM Customer ORDER BY CustomerId ASC; -- artan siralama
--SELECT * FROM Customer ORDER BY CustomerId DESC; -- azalan siralama
--SELECT * FROM Customer ORDER BY FirstName, LastName DESC WHERE CustomerId IN (14,55); -- syntax error near "WHERE"
--SELECT * FROM Customer WHERE CustomerId IN (14,55) ORDER BY FirstName, LastName DESC;
--SELECT * FROM Customer WHERE CustomerId IN (14,55) ORDER BY FirstName, LastName DESC LIMIT 0,1; -- limit en sonda
--SELECT count(*) as "Total People" FROM Customer; -- toplam kisi sayisi
--SELECT * FROM Invoice
--SELECT SUM(Total) as "Total Invoices" FROM Invoice;

--- *** Relational Databases *** ---

--SELECT * FROM Album a JOIN Artist c ON a.ArtistId = c.ArtistId;
--SELECT a.AlbumId, a.Title, r.Name FROM Album a JOIN Artist r ON a.ArtistId = r.ArtistId;
--SELECT * FROM Artist a JOIN Album l ON a.ArtistId = l.ArtistId
--SELECT * FROM Artist a LEFT JOIN Album l ON a.ArtistId = l.ArtistId

--- *** Functions *** ---

--SELECT i.Total as "Sum Inovices" FROM Invoice i JOIN InvoiceLine l ON i.InvoiceId = l.InvoiceId
--SELECT count(i.InvoiceId) FROM Invoice i JOIN InvoiceLine l ON i.InvoiceId = l.InvoiceId;
--SELECT count(i.InvoiceId) FROM Invoice i;
--SELECT count(l.InvoiceLineId) FROM InvoiceLine l;
--SELECT sum(i.Total) FROM Invoice i; 
--SELECT i.InvoiceId, i.Total FROM Invoice i WHERE i.InvoiceId IN (1,5,9); 
--SELECT sum(i.Total) FROM Invoice i WHERE i.InvoiceId IN (1,5,9); 
--SELECT round(sum(i.Total)) FROM Invoice i WHERE i.InvoiceId IN (1,5,9); 
--SELECT avg(i.Total) FROM Invoice i WHERE i.InvoiceId IN (1,5,9); 
--SELECT min(i.Total) FROM Invoice i WHERE i.InvoiceId IN (1,5,9); 
--SELECT max(i.Total) FROM Invoice i WHERE i.InvoiceId IN (1,5,9); 
--SELECT a.AlbumId, a.Title, length(a.Title) as "Title Length", a.ArtistId FROM Album a


--- *** GROUP BY *** ---

--SELECT count(*), Country FROM Customer GROUP BY Country;
--SELECT DISTINCT(Country) FROM Customer;

--SELECT sum(total) FROM Invoice WHERE CustomerId = 2;
--SELECT * FROM Customer c JOIN Invoice i ON c.CustomerId = i.CustomerId WHERE c.CustomerId = 2;

--- *** LIMIT - Belli sayıda kayıt getir. *** ---
-- SELECT * FROM Customer LIMIT 0, 10;  -- LIMIT kaçıncı kayıttan itibaren, kaç ADET kayıt.
-- SELECT * FROM Customer LIMIT 5 -- Başlangıç default: 0
-- SELECT * FROM Customer LIMIT 10, 5;  -- 10. kayıttan sonraki (yani 11. kayıttan itibaren) 5 adet kaydı getir.

-- * SUBQUERY (SELECT IN SELECT) (Nested Query)
-- SELECT * FROM Album WHERE ArtistId = (SELECT ArtistId FROM Artist WHERE Name = 'Led Zeppeli'); -- Sanatçı ID'sini SubSelect'den aldık.
-- SELECT AlbumId, Title, (SELECT Name FROM Artist WHERE ArtistId = a.ArtistId) AS Artist FROM Album AS a;
/*
-- SubSELECT sorgusunu tablo gibi kullanmak:
SELECT FirstName, LastName
FROM (
	SELECT * FROM Customer WHERE Country = 'USA' AND CustomerId > 22
) WHERE FirstName LIKE '%a%'
*/


-- -- -- -- -- -- -- -- JOINS -- -- -- -- -- -- -- -- -- -- -- -- -- -- --
-- Birden fazla tablodaki kayıtları tek bir tabloda getirmek için kullanıyor.
-- * INNER JOIN -- Yalnızca kesişen kayıtları getirir.
-- * (Alternatif Yazım: JOIN) Default JOIN yöntemi INNER JOIN'dir. (Piyasa kullanımı: INNER JOIN)
/*
SELECT *
FROM Artist AS art
JOIN Album AS alb ON alb.ArtistId=art.ArtistId -- JOIN == INNER JOIN
ORDER BY ArtistId ASC, AlbumId ASC
*/
/*
SELECT c.FirstName, c.LastName, c.Country, i.InvoiceId, i.InvoiceDate, i.Total AS InvoiceTotal
FROM Customer AS c
INNER JOIN Invoice AS i ON i.CustomerId = c.CustomerId
ORDER BY c.CustomerId
*/
/*
SELECT t.Name Sarki, a.Title Album, m.Name Dosya, g.Name Tur
FROM Track t
INNER JOIN Album a ON a.AlbumId=t.AlbumId
INNER JOIN MediaType m ON t.MediaTypeId=m.MediaTypeId
INNER JOIN Genre g ON g.GenreID=t.GenreId
*/
-- * LEFT JOIN -- Üst (FROM) tablodaki BÜTÜN kayıtlar ve JOIN tablodaki KESİŞEN kayıtları getir.
/*
SELECT *
FROM Artist AS art
LEFT JOIN Album AS alb ON alb.ArtistId=art.ArtistId
ORDER BY ArtistId ASC, AlbumId ASC
*/
-- * RIGHT JOIN -- Üst (FROM) tablodaki KESİŞEN kayıtlar ve JOIN tablodaki BÜTÜN kayıtları getir.
/*
SELECT *
FROM Artist AS art
RIGHT JOIN Album AS alb ON alb.ArtistId=art.ArtistId
ORDER BY ArtistId ASC, AlbumId ASC
*/
-- * FULL OUTER JOIN -- Her iki tablonun BÜTÜN kayıtlarını göster, Eşleşenleri yanyana göster.
/*
SELECT *
FROM Artist AS art
FULL OUTER JOIN Album AS alb ON alb.ArtistId=art.ArtistId
ORDER BY ArtistId ASC, AlbumId ASC
*/
-- * CROSS JOIN -- Her iki tablonun BÜTÜN kayıtlarını göster, İlişki gözetme.
/*
SELECT *
FROM Artist AS art
CROSS JOIN Album AS alb
ORDER BY ArtistId ASC, AlbumId ASC
*/
/*
-- Genel/Kısa Kullanım:
SELECT *
FROM Artist AS art, Album AS alb
ORDER BY ArtistId ASC, AlbumId ASC
*/
-- * JOIN ÖRNEKLER
/*
-- Hangi sanatçı hangi albümleri çıkarmıştır. Bir albüme sahip olmayan sanatçıları gösterme. Sadece albüm sahibi olan sanatçıları göster.
SELECT t1.ArtistId, t1.Name AS sanatci, t2.Title AS album
FROM Artist AS t1
INNER JOIN Album AS t2 ON t1.ArtistId=t2.ArtistId
-- WHERE t1.Name = 'Led Zeppeli'
ORDER BY t1.ArtistId
/*
-- Bütün sanatçıları göster. Hangi sanatçı hangi albüme sahip onu da göster. Ama albüm sahibi olmayan kayıtlara NULL yaz.
SELECT t1.ArtistId, t1.Name AS sanatci, t2.Title AS album
FROM Artist AS t1
LEFT JOIN Album AS t2 ON t2.ArtistId=t1.ArtistId
ORDER BY t1.ArtistId
*/

/* INSERT & UPDATE & DELETE */
/*
-- * INSERT -- Kayıt Ekleme
INSERT INTO Artist (ArtistId, Name)
VALUES (276, 'Qadir Adamson');
*/
/*
-- * INSERT -- Çoklu Kayıt Ekleme
INSERT INTO Artist (ArtistId, Name)
VALUES
	(277, 'Gümüş G'),
	(278, 'Mehmet T'),
	(279, 'Sinan Hoca'); -- En sonda noktalı-virgül.
*/
/*
-- * UPDATE -- Kayıt Güncelleme
UPDATE Artist SET Name='Abdullah A.' WHERE ArtistId=276;
*/
/*
-- * DELETE -- Kayıt Silme
DELETE FROM Artist WHERE ArtistId=276;
*/

--------------------  EXAMPLES -----------------------

SELECT a.Title, b.Name FROM Album a JOIN Artist b ON a.ArtistId = b.ArtistId WHERE  b.Name LIKE "B%" ORDER BY a.Title DESC LIMIT 0,10;

--SELECT round(sum(UnitPrice)) FROM Track t JOIN MediaType m ON t.MediaTypeId = m.MediaTypeId WHERE t.Bytes > 5555555 and t.TrackId BETWEEN 1 AND 20;

-- SELECT DISTINCT = only Unique/Different Values 

-- Q: What are some common clauses used with SELECT query in SQL?
-- A: WHERE clause, ORDER BY clause, GROUP BY clause and HAVING clause




















































































































































































































































































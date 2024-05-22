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

SELECT sum(total) FROM Invoice WHERE CustomerId = 2;

SELECT * FROM Customer c JOIN Invoice i ON c.CustomerId = i.CustomerId WHERE c.CustomerId = 2;
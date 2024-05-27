-- SELECT * FROM album
-- SELECT Country, count(Country) as countryCount FROM Customer GROUP BY Country HAVING countryCount > 1;

--SELECT GenreId, Name FROM Genre;

--INSERT INTO Genre (GenreId, Name) VALUES (26, "Turkish Traditional Music");

--UPDATE Genre SET Name = "Traditional Music" WHERE GenreId=26 --- WHERE ile belirtmek onemli, yoksa hepsi degisir

DELETE Genre WHERE GenreId=26
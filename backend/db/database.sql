CREATE DATABASE welbex;

CREATE TABLE items(
  id SERIAL PRIMARY KEY,
  date DATE,
  name TEXT,
  amount INTEGER,
  distance INTEGER
);

INSERT INTO items (date, name, amount, distance) VALUES
  ('2017-03-14', 'Санкт-Петербург', 112, 710),
  ('2019-03-14', 'Тверь', 1, 190),
  ('2019-03-14', 'Ростов-на-Дону', 5, 1040),
  ('2012-03-14', 'Сочи', 43, 1620),
  ('2017-03-15', 'Краснодар', 8, 1350),
  ('2014-03-16', 'Нижний Новгород', 1, 420),
  ('2013-03-16', 'Чебоксары', 14, 660),
  ('2017-03-16', 'Ярославль', 13, 270),
  ('2017-04-08', 'Архангельск', 27, 1250),
  ('2021-04-08', 'Волгоград', 254, 980),
  ('2020-06-23', 'Санкт-Петербург', 14, 710),
  ('2020-06-14', 'Самара', 26, 1060),
  ('2021-06-14', 'Казань', 2, 820),
  ('2017-06-14', 'Уфа', 37, 1360),
  ('2022-08-08', 'Пермь', 3, 1500),
  ('2017-12-15', 'Екатеринбург', 84, 1890),
  ('2018-01-09', 'Набережные Челны', 42, 1120),
  ('2018-01-09', 'Челябинск', 14, 1760),
  ('2022-01-09', 'Владивосток', 18, 9200),
  ('2015-06-09', 'Ноябрьск', 7, 3300);
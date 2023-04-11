import { getFilmByYear } from "../api.js";

test("Valida se as chaves do objeto existem na requição: Filme por ano", async () => {
  const result = await getFilmByYear(2018);
  expect(result.data).hasOwnProperty("id");
  expect(result.data).hasOwnProperty("year");
  expect(result.data).hasOwnProperty("title");
  expect(result.data).hasOwnProperty("studios");
  expect(result.data).hasOwnProperty("producers");
  expect(result.data).hasOwnProperty("winner");
});

test("Valida se o objeto esta no mesmo formato da requisição: Filme por ano", async () => {
  const objectReference = [
    {
      id: expect.any(Number),
      year: expect.any(Number),
      title: expect.any(String),
      studios: [expect.any(String)],
      producers: [expect.any(String)],
      winner: expect.any(Boolean),
    },
  ];

  const result = await getFilmByYear(1980);
  expect(result.data).toMatchObject(objectReference);
});

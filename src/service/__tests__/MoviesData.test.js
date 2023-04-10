import { getMovieData } from '../api';

test('Valida se as chaves do objeto existem na requição: Dados do Filme', async () => {
  const result = await getMovieData(2013, true);
  expect(result.data.content[0]).toHaveProperty('id')
  expect(result.data.content[0]).toHaveProperty('year')
  expect(result.data.content[0]).toHaveProperty('title')
  expect(result.data.content[0]).toHaveProperty('studios')
  expect(result.data.content[0]).toHaveProperty('producers')
  expect(result.data.content[0]).toHaveProperty('winner')
  
})

test('Valida se o objeto esta no mesmo formato da requisição:  Dados do Filme', async () => {

  const objectReference = [{
      id: 171,
      year: 2013,
      title: "Movie 43",
      studios: [
        "Relativity Media"
      ],
      producers: [
        "Charles B. Wessler",
        "John Penotti",
        "Peter Farrelly",
        "Ryan Kavanaugh"
      ],
      winner: true
  }]

  const result = await getMovieData(2013, true);
  expect(result.data.content).toMatchObject(objectReference);
})

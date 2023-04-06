import { getyearsWithMoreThanOneWinner } from '../api';

test('Valida se as chaves do objeto existem na requisão: Anos com mais de um vencedor', async () => {
  const result = await getyearsWithMoreThanOneWinner()
  expect(result.data).toHaveProperty('years')
  expect(result.data.years[0]).toHaveProperty('year')
  expect(result.data.years[0]).toHaveProperty('winnerCount')
});


test('Valida se o objeto esta no mesmo formato na requis~ição: Anos com mais de um vencedor', async () => {
  const objetoReferencia = {
    years: [
      expect.objectContaining({ 
        year: expect.any(Number), 
        winnerCount: expect.any(Number) 
      }),
      expect.objectContaining({ 
        year: expect.any(Number), 
        winnerCount: expect.any(Number) 
      }),
      expect.objectContaining({ 
        year: expect.any(Number), 
        winnerCount: expect.any(Number) 
      })
    ]
  };

  const result = await getyearsWithMoreThanOneWinner();
  expect(result.data).toMatchObject(objetoReferencia);
});
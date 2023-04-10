import { getPrizeRange } from '../api';

test('Valida se as chaves do objeto existem na requição: Intervalo de prêmios', async () => {
  const result = await getPrizeRange();
  expect(result.data).toHaveProperty('min')
  expect(result.data.min[0]).toHaveProperty('producer')
  expect(result.data.min[0]).toHaveProperty('interval')
  expect(result.data.min[0]).toHaveProperty('previousWin')
  expect(result.data.min[0]).toHaveProperty('followingWin')

  expect(result.data).toHaveProperty('max')
  expect(result.data.max[0]).toHaveProperty('producer')
  expect(result.data.max[0]).toHaveProperty('interval')
  expect(result.data.max[0]).toHaveProperty('previousWin')
  expect(result.data.max[0]).toHaveProperty('followingWin')
  
})

test('Valida se o objeto esta no mesmo formato da requisição: Intervalo de prêmios', async () => {

  const objectReference = {
    min: [
      {
        "producer": expect.any(String),
        "interval": expect.any(Number),
        "previousWin": expect.any(Number),
        "followingWin": expect.any(Number)
      }
    ],

    max: [
      {
        "producer": expect.any(String),
        "interval": expect.any(Number),
        "previousWin": expect.any(Number),
        "followingWin": expect.any(Number)
      }
    ]
  }


  const result = await getPrizeRange();
  expect(result.data).toMatchObject(objectReference);
})

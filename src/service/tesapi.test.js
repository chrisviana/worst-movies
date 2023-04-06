import { getStudios } from './api';

test('Valida se as chaves do objeto existem na requição: Estudios', async () => {
  const result = await getStudios();
  expect(result.data).toHaveProperty('studios')
  expect(result.data.studios[0]).toHaveProperty('name')
  expect(result.data.studios[0]).toHaveProperty('winCount')
})

test('Valida se o objeto esta no mesmo formato da requisição: Estudios', async () => {
  const studios = []
  
  for (let i = 0; i < 28; i++) {
    studios.push({
      name: expect.any(String), 
      winCount: expect.any(Number) 
    })
  }
  const objectReference = {
      studios
  }


  const result = await getStudios();
  expect(result.data).toMatchObject(objectReference);
})
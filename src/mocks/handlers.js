import { rest } from 'msw';

export const employeeList = []

export const handlers = [

  // POST Request
  rest.post('/employees', (req, res, ctx) => {
    const employee = { ...req.body }

    const key = Date.now().toString();

    employeeList.push({ ...employee, key });

    return res(
      ctx.status(200),
      ctx.json(employeeList),
    )
  }),

  // GET Request
  rest.get('/employees', (_, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json(employeeList),
    )
  })
]
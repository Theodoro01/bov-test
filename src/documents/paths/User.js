export default
{
  '/v1/register': {
    post: {
      summary: 'Action registration',
      description: 'Register a Action',
      tags: ['User'],
      parameters: [
        {
          in: 'body',
          name: 'body',
          description: 'Action registration',
          required: true,
          schema: {
            type: 'object',
            properties: {
              farmer: {
                type: 'string'
              },
              email: {
                type: 'string'
              },
              password: {
                type: 'string'
              }
            }
          }
        }
      ],
      responses: {
        201: {
          description: 'Action successfully registered'
        },
        400: {
          description: 'Error: bad request'
        },
        500: {
          description: 'Internal server Error'
        }
      }
    }
  },
  '/v1/login': {
    post: {
      summary: 'Sing-in',
      description: 'Login a Action',
      tags: ['User'],
      parameters: [
        {
          in: 'body',
          name: 'body',
          description: 'Action registration',
          required: true,
          schema: {
            type: 'object',
            properties: {
              email: {
                type: 'string'
              },
              password: {
                type: 'string'
              }
            }
          }
        }
      ],
      responses: {
        201: {
          description: 'Action successfully registered'
        },
        400: {
          description: 'Error: bad request'
        },
        500: {
          description: 'Internal server Error'
        }
      }
    }
  }
}

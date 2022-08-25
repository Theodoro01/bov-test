export default {
  '/v1/insertProduction': {
    post: {
      summary: 'Action registration',
      description: 'Register a Action',
      tags: ['Production'],
      parameters: [
        {
          in: 'header',
          name: 'Authorization',
          description: 'Bearer token',
          required: true
        },
        {
          in: 'body',
          name: 'body',
          description: 'Action registration',
          required: true,
          schema: {
            type: 'object',
            properties: {
              diaryMilkProduction: {
                type: 'number'
              },
              deliveredMilkQuantity: {
                type: 'number'
              },
              farmCod: {
                type: 'number'
              },
              date: {
                type: 'string',
                example: '0000-00-00'
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
  '/v1/searchAllProduction': {
    post: {
      tags: ['Production'],
      description: 'Produção do Més',
      parameters: [
        {
          in: 'header',
          name: 'Authorization',
          description: 'Bearer token',
          required: true
        },
        {
          in: 'body',
          name: 'body',
          description: 'Action registration',
          required: true,
          schema: {
            type: 'object',
            properties: {
              year: {
                type: 'number'
              },
              month: {
                type: 'number'
              },
              farmCod: {
                type: 'number'
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
  '/v1/milkProduction': {
    post: {
      tags: ['Production'],
      description: 'Volume de leite entregue em tal més e valores',
      parameters: [
        {
          in: 'header',
          name: 'Authorization',
          description: 'Bearer token',
          required: true
        },
        {
          in: 'body',
          name: 'body',
          description: 'Action registration',
          required: true,
          schema: {
            type: 'object',
            properties: {
              year: {
                type: 'number'
              },
              month: {
                type: 'number'
              },
              farmCod: {
                type: 'number'
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
  '/v1/avgProduction': {
    post: {
      tags: ['Production'],
      description: 'Media mensal',
      parameters: [
        {
          in: 'header',
          name: 'Authorization',
          description: 'Bearer token',
          required: true
        },
        {
          in: 'body',
          name: 'body',
          description: 'Action registration',
          required: true,
          schema: {
            type: 'object',
            properties: {
              year: {
                type: 'number'
              },
              month: {
                type: 'number'
              },
              farmCod: {
                type: 'number'
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
  '/v1/avgYearProduction': {
    post: {
      tags: ['Production'],
      description: 'Media Anual',
      parameters: [
        {
          in: 'header',
          name: 'Authorization',
          description: 'Bearer token',
          required: true
        },
        {
          in: 'body',
          name: 'body',
          description: 'Action registration',
          required: true,
          schema: {
            type: 'object',
            properties: {
              year: {
                type: 'number'
              },
              farmCod: {
                type: 'number'
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

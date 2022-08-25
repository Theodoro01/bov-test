import paths from './paths.js'

export default
{
  swagger: '2.0',
  info: {
    title: 'test API',
    description: 'Project documentation test API',
    version: '1.0.0'
  },
  host: process.env.API_URL,
  paths
}

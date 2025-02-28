// https://opentdb.com/api.php?amount=10&category=21&difficulty=medium
import axios from 'axios'

const baseUrl = 'https://opentdb.com/'

const api = axios.create({
  baseURL: baseUrl,
})

export async function getQuestions() {
  try {
    const response = await api.get('api.php?amount=10&category=21&difficulty=medium')
    return response
  } catch (error) {
    console.log('Erro', error)
    return null
  }
}

import ContentService from '../services/ContentService'
import { useQuery } from 'react-query'

export default function useContent(params) {
  return useQuery(['content', params], ContentService.getAll, { refetchOnMount: false })
}
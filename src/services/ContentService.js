import axios from 'axios';
import qs from 'qs'

const endpoint = 'http://164.90.161.80:3000/api/content'

const getAll = async ({ queryKey: [_, filterParams] }) => {
  const { data } = await axios.get(`${ endpoint }?${ qs.stringify(filterParams) }`)

  return data
}

export default {
  getAll
}
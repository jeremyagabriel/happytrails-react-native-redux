import { useDispatch } from 'react-redux'
import { setTrailResults } from '../store/search/actions'
import { setTrailCurrent } from '../store/trail/actions'
import { apiGetTrailResults } from '../services/hikingproject'

export default () => {
  const dispatch = useDispatch()

  const getTrailResultsCall = async (lat, lon) => {
    try {
      const trails = await apiGetTrailResults(lat, lon)

      dispatch(setTrailResults(trails))
    } catch (err) {
      console.log('Error: unable to complete get trail results call:', err)
    }
  }

  return [getTrailResultsCall]
}
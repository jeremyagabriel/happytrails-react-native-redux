import { useDispatch } from 'react-redux'
import { setTrailCurrent } from '../store/trail/actions'
import { apiGetTrail } from '../services/hikingproject'

export default () => {
  const dispatch = useDispatch()

  const getTrailCall = async (id) => {
    try {
      const trail = await apiGetTrail(id)

      dispatch(setTrailCurrent(trail))
    } catch (err) {
      console.log('Error: unable to complete get trail call:', err)
    }
  }

  return [getTrailCall]
}
import { useDispatch } from 'react-redux'
import { setTrailResults } from '../store/search/actions'

export default () => {
  const dispatch = useDispatch()

  const getTrails = async (lat, lon) => {
    try {
      let response = await fetch(`https://www.hikingproject.com/data/get-trails?lat=${lat}&lon=${lon}&maxDistance=20&key=200805451-d58078a69001bb6f37cb92b68bbebae3`)
      let data = await response.json()

      if (response.ok) {
        console.log("Trail Results:",data.trails)
        dispatch(setTrailResults(data.trails))
      }
    } catch (err) {
      console.log(err)
    }
  }

  return [getTrails]
}
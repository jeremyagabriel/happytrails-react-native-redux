import { useState } from 'react'

export default () => {
  const [trailData, setTrailData] = useState([])

  const getTrail = async (id) => {
    try {
      let response = await fetch(`https://www.hikingproject.com/data/get-trails-by-id?ids=${id}&key=200805451-d58078a69001bb6f37cb92b68bbebae3`)
      let data = await response.json()

      if (response.ok) {
        console.log("Trail Data:",data.trails[0])
        setTrailData(data.trails[0])
      }
    } catch (err) {
      console.log(err)
    }
  }

  return [getTrail, trailData]
}
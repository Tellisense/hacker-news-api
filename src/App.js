import { useEffect, useState } from 'react'
import axios from 'axios'
import NewsTable from './components/NewsTable'

function App() {
  const [topStories, setTopStories] = useState()


  console.log(`topStories: `, topStories)
  useEffect(() => {
    const apiCall = async () => {
      try {
        const { data } = await axios.get('https://hacker-news.firebaseio.com/v0/topstories.json')
        // loop through the array and make redundant api calls
        const topTwenty = data.slice(0, 20)
        const apiCallsArray = topTwenty.map((item) => {
          return axios.get(`https://hacker-news.firebaseio.com/v0/item/${item}.json`)
        })
        const result = await axios.all(apiCallsArray)
        setTopStories(result)
      } catch (ex) {
        console.log(ex)
      }
    }
    apiCall()
  }, [])





  return (
    <NewsTable tableData={topStories} />
  );
}

export default App;

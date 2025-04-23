import React, { useEffect } from 'react'
import Main from '../components/section/Main'
import MainSection01 from '../components/contents/MainSection01'
import MainSection01One from '../components/contents/MainSection01One.jsx'
import MainSection02 from '../components/contents/MainSection02'
import MainSection03 from '../components/contents/MainSection03'
import MainSection04 from '../components/contents/MainSection04'
import MainSection05 from '../components/contents/MainSection05'
import { smooth } from '../assets/js/smooth'
import Loading from '../components/header/Loading.jsx'
import Skip from '../components/Skip.jsx'

const Home = () => {
  useEffect(() => {
    smooth()
  }, [])
  return (
    <>
      <Skip />
      <Loading />

      <div id="wrap">
        <Main />
        <MainSection01 />
        <MainSection01One />
        <MainSection02 />
        <MainSection03 />
        <MainSection04 />
        <MainSection05 />
      </div>
    </>
  )
}

export default Home
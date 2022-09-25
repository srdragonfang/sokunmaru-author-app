import React from 'react'
import Feed from '../components/Feed/Feed'
// import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import { useDispatch } from 'react-redux'
import * as actions from '../redux/actions';
const Home = () => {

    const dispatch = useDispatch();
    dispatch(actions.getProjects.getProjectsRequest());
    return (
        <div className='home'>
            <Header />
            <Feed />
            {/* <Footer /> */}
        </div>
    )
}

export default Home
import React, { useEffect } from 'react';
import './CurrentLessons.css';
import kodVideo from '../../../videos/kodVideo.mp4';
import { allVideoLessons } from '../../Helper/ProfileSidebarHelp/ProfileSidebarHelp';
import vector222 from '../../../images/Vector222.svg';
import vector222Down from '../../../images/Vector222Down.svg';
import Line from '../../../images/Line.svg';
import Button from '../../Button/Button';
import Homeworkes from './Homeworkes/Homeworkes';
import { useDispatch, useSelector } from 'react-redux';
import { getCurrentLanguageLesson, getCurrentLesson } from '../../../store/slices/CurrentLessons/CurrentLessonsApi';
import {
  getAllCourses,
  getAllData,
} from '../../../store/slices/CurrentLessons/CurrentLessonsSlice';
import { useLoaderData } from 'react-router-dom';
import VideoPlayer from 'react-video-js-player';
import ReactPlayer from 'react-player';
import Plyr from 'plyr-react';
// import 'plyr-react/dist/plyr.css';

function CurrentLessons() {
  const allCourses = useSelector(getAllCourses);
  const allData = useSelector(getAllData);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCurrentLesson());
  }, []);
  console.log('allData', allData);

  return (
    <div className="allSide">
      <div className="leftSide" style={{ padding: '0 0 0 40px' }}>
        <p className="Introduction">{allData?.course_language_name || allData?.lesson_name}</p>
        <div style={{ width: '58vw' }} className="leftSideTop">
          {/* <p className="title_name">HTML/HTML 5</p> */}
          {/* <video width="100%" height="auto" controls>
            <source src={kodVideo} type="video/mp4" />
          </video> */}
          {/* <VideoPlayer
            src={kodVideo}
            width="100%" 
          /> */}
          {/* <ReactPlayer
            // url="https://www.youtube.com/watch?v=your-video-id"
            url={kodVideo}
            // src={kodVideo}
            controls={true}
            width="100%"
            height="100%"
          /> */}
          <Plyr
            source={{
              type: 'video',
              sources: [
                {
                  // src: 'https://www.example.com/your-video.mp4',
                  src: kodVideo,
                  type: 'video/mp4',
                },
              ],
            }}
            options={{
              controls: [
                'play-large',
                'play',
                'progress',
                'current-time',
                'mute',
                'volume',
                'settings',
                'fullscreen',
              ],
              speed: {
                selected: 1, // Default playback speed (1x)
                options: [0.5, 1, 1.5, 2], // Speed options: 0.5x, 1x, 1.5x, 2x
              },
              captions: { active: true, update: true, language: 'auto', update: true },
            }}
          />
          <div className="description">
            <p className="description_title">Նկարագրություն</p>
            <p className="description_text">
              {allData?.current_lesson?.description || allData[0]?.description}
              <span className="description_more">
                {allData?.current_lesson?.description?.length || allData[0]?.description.length> 30 ? '․․․more' : '...'}
              </span>
            </p>
          </div>
          {/* <div className="homework_line">
            <p className="homework_line_p">Կատարել տնային առաջադրանքները</p>
            <span>
              <img src={Line} alt="Line" />
            </span>
            <Button index="5" />
          </div> */}
          <div className="homework_linne">
            <p className="homework_title">Կատարել տնային առաջադրանքները</p>
            {allData?.current_lesson?.tasks ? allData?.current_lesson?.tasks.map((el, index) => (
              <div className="homework_linne_div" key={index}>
                <p className="homework_text">
                  Lesson {el?.lesson_id}: {el?.description}
                </p>
                <p>{el.duration} minutes</p>
              </div>
            )):allData[0]?.tasks.map((el, index) => (
              <div className="homework_linne_div" key={index}>
                <p className="homework_text">
                  Lesson {el?.lesson_id}: {el?.description}
                </p>
                <p>{el.duration} minutes</p>
              </div>
            ))}
          </div>
          <div className="homework_side">
            <p className="HomeworkList">Բովանդակություն</p>
            <Homeworkes lessons={allData?.lessons}/>
          </div>
        </div>
        {/* <div style={{ width: '58vw' }}>
          <p className="HomeworkList">Տնային աշխատանքների ցանկ</p>
          <Homeworkes lessons={allData?.lessons}/>
        </div> */}
      </div>
      <div className="rightSide">
        {/* <div style={{ width: '18vw' }}> */}
        <p className="titleAllVideo">Բոլոր վիդեոդասերը</p>
        <div className="allvideoLessons_div" >
          {allCourses?.map((el, index) => (
            <div key={index} className="allvideoLessons" onClick={()=>dispatch(getCurrentLanguageLesson(el.id))}>
              {allData?.current_lesson?.number === el.id ? (
                <img
                  src={vector222Down}
                  alt="vector222Down"
                  className={
                    allData?.current_lesson?.number === el.id
                      ? 'vector222Down vector222Down-Active'
                      : 'vector222Down'
                  }
                />
              ) : (
                <img src={vector222} alt="vector222" className="vector222" />
              )}
              <span
                className={
                  allData?.current_lesson?.number === el.id
                    ? 'nameAllVideo nameAllVideo-Active'
                    : 'nameAllVideo'
                }>
                {el.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
    // </div>
  );
}

export default CurrentLessons;

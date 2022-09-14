import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import { useNavigate } from 'react-router-dom';
import { useEffect, useCallback, useState } from 'react';
import axios from "axios";
import { useInView } from "react-intersection-observer"
import  Modal  from '../global/modal/index';
import Detail from '../../pages/detail';
import Slider from '../global/slider';
import {getCookie} from '../../shared/Cookie';

import styled from 'styled-components';


const MainPhotoCard =()=> {
  

const navigate = useNavigate();

const [datas, setDatas] = useState([]);
const [page, setPage] = useState(0)
const [loading, setLoading] = useState(false)
const [ref, inView] = useInView(
  {
  threshold: 1, // ref부분이 다 보여야 작동
  // triggerOnce: true, // 한번만 작동하는거 뺄지말지 고민중
}
);
 
  // 서버에서 아이템을 가지고 오는 함수
  // const getItems = useCallback(async () => {
  //   setLoading(true)
  //   await axios
  //   // .get(`https://jsonplaceholder.typicode.com/photos/${page}`)
  //   // .get(`http://13.209.88.83/api/posts?post=${page}`
  //  .get('http://13.209.88.83/api/posts?page=2&size=4'
  //   ,{
  //     headers:{
  //       Authorization : `Bearer ${getCookie("accessToken")}`
     
  
  //     }
  //   })
  //   .then((res) => {
  //     console.log(res.data.data.content)
  //       // setDatas(prevState => [...prevState, res.data.data.content])
  //       setDatas(res.data.data.content)
  //   })

  //   .catch(err=> console.log(err))
  //   setLoading(false)
  // }, [page])



  const getItems = async () => {
        console.log('서버통신 시작');
        setLoading(true);
        await axios
          .get(`${process.env.REACT_APP_API_URL}/api/posts?page=${page}&size=4`, {
            headers: {
              Authorization: `Bearer ${getCookie('accessToken')}`,
              
            },
          })
          .then((res) => {
            // console.log(“불러온 데이터“, res.data.data.last);
            const dataList = res.data.data.content;
            setDatas((prev) => [...prev, ...dataList]);
          })
          .catch((err) => console.log(err));
        setLoading(false);
      };




 // `page` 가 바뀔 때 마다 함수 실행
  useEffect(() => {
    getItems();
  }, [page]);


  useEffect(() => {
    // 사용자가 마지막 요소를 보고 있고, 로딩 중이 아니라면
    if (inView) {
      setPage((prev) => prev + 1);
    }
  }, [inView]);
  // console.log(page);
  // console.log(inView);



  // useEffect(() => {
    
  //   if (inView && !loading) {
  //     setPage(prevState => prevState + 1)
   
  //   }
  // }, [inView, loading])


  // 사용자가 마지막 요소를 보고 있고, 로딩 중이 아니라면



  // console.log(datas.thumbnailUrl)


return (
  <ImageList  sx={{ width: 1/1, height: 1/1 }}cols={3} rowMaxHeight={164} >
    {datas.map((item, idx) => (
      <React.Fragment key={idx}>     
      
          {datas.length -1 ==idx ? (
            <div>
              <ImageListItem key={item.url}>
              <img onClick={()=>{
                  navigate("/detail");
              }}
                      src={item.thumbnailUrl}
                  // src={`${item.url}?w=161&fit=crop&auto=format`}
                  // srcSet={`${item.url}?w=161&fit=crop&auto=format&dpr=2 2x`}
                  alt={item.title}
                  loading="lazy"
                  // ref={ref}
                  /> 
                  <p>마지막</p>
                  {datas.length === 0 ? null : <CheckBar ref={ref}></CheckBar>}
                  <div>
                    <ImageListItemBar
                                      title={item.title}
                                      subtitle={<span>{item.postId}: {item.author}</span>}
                                      position="below"
                                    />
                    <Modal btn_title="상세페이지"  >
                      <Detail id={item.id}/>
                    </Modal>
                  </div>
                  </ImageListItem>
                  
                  </div>
          ):(
            <div className='Card'>
            <ImageListItem key={item.url}>
                <img 
                       src={item.thumbnailUrl}
                  //  src={`${item.url}?w=161&fit=crop&auto=format`}
                  //   srcSet={`${item.url}?w=161&fit=crop&auto=format&dpr=2 2x`}
                    alt={item.title}
                    loading="lazy"
                  /> 
                  {/* <Slider imageList={d_data}/> */}
                  <div>
                    <ImageListItemBar
                                      title={item.title}
                                      subtitle={<span>{item.postId}: {item.author}</span>}
                                      position="below"
                                    />
                    <Modal btn_title="상세페이지" >
                        <Detail id={item.id}/>
                    </Modal> 
                  </div>
                <p>{item.id}</p>
                
          </ImageListItem>
          
          </div>
              
          )}
     
      </React.Fragment>
    ))}
    
  </ImageList>
);




  // return (
  //   <ImageList  sx={{ width: 1/1, height: 1/1 }}cols={3} rowMaxHeight={164} >
  //     {datas.map((item, idx) => (
  //       <React.Fragment key={idx}>     
        
  //       <div className='Card'>
  //             <ImageListItem key={item.url}>
  //                 <img 
  //                        src={item.thumbnailUrl}
  //                   //  src={`${item.url}?w=161&fit=crop&auto=format`}
  //                   //   srcSet={`${item.url}?w=161&fit=crop&auto=format&dpr=2 2x`}
  //                     alt={item.title}
  //                     loading="lazy"
  //                   /> 
  //                   {/* <Slider imageList={d_data}/> */}
  //                   <div>
  //                     <ImageListItemBar
  //                                       title={item.title}
  //                                       subtitle={<span>{item.postId}: {item.author}</span>}
  //                                       position="below"
  //                                     />
  //                     <Modal btn_title="상세페이지" >
  //                         <Detail id={item.id}/>
  //                     </Modal>
  //                   </div>
  //                 <p>{item.id}</p>
                  
  //           </ImageListItem>
            
  //           </div>
  //       </React.Fragment>
  //     ))}
  //     {datas.length === 0 ? null : <CheckBar ref={ref}></CheckBar>}
  //   </ImageList>
  // );

}


export default MainPhotoCard;

const CheckBar = styled.div`
  width: 100%;
  height: 20px;
  background-color: red;
`;


const itemData = [
  {
    img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
    title: 'Breakfast',
    author: '@bkristastucchio',
  },
  {
    img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
    title: 'Burger',
    author: '@rollelflex_graphy726',
  },
  {
    img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
    title: 'Camera',
    author: '@helloimnik',
  },
  {
    img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
    title: 'Coffee',
    author: '@nolanissac',
  },
  {
    img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
    title: 'Hats',
    author: '@hjrc33',
  },
  {
    img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
    title: 'Honey',
    author: '@arwinneil',
  },
  {
    img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
    title: 'Basketball',
    author: '@tjdragotta',
  },
  {
    img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
    title: 'Fern',
    author: '@katie_wasserman',
  },
  {
    img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
    title: 'Mushrooms',
    author: '@silverdalex',
  },
  {
    img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
    title: 'Tomato basil',
    author: '@shelleypauls',
  },
  {
    img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
    title: 'Sea star',
    author: '@peterlaster',
  },
  {
    img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
    title: 'Bike',
    author: '@southside_customs',
  },
];


const d_data = [
  'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
  'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
  'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
]




 
// return (
//   <ImageList  sx={{ width: 1/1, height: 1/1 }}cols={3} rowMaxHeight={164} >
//     {datas.map((item, idx) => (
//       <React.Fragment key={idx}>     
      
//           {datas.length -1 ==idx ? (
//             <div>
//               <ImageListItem key={item.url}>
//               <img onClick={()=>{
//                   navigate("/detail");
//               }}
//                       src={item.thumbnailUrl}
//                   // src={`${item.url}?w=161&fit=crop&auto=format`}
//                   // srcSet={`${item.url}?w=161&fit=crop&auto=format&dpr=2 2x`}
//                   alt={item.title}
//                   loading="lazy"
//                   // ref={ref}
//                   /> 
//                   {/* {datas.length === 0 ? null : <CheckBar ref={ref}></CheckBar>} */}
//                   <div>
//                     <ImageListItemBar
//                                       title={item.title}
//                                       subtitle={<span>{item.postId}: {item.author}</span>}
//                                       position="below"
//                                     />
//                     <Modal btn_title="상세페이지"  >
//                       <Detail id={item.id}/>
//                     </Modal>
//                   </div>
//                   </ImageListItem>
                  
//                   </div>
//           ):(
//             <div className='Card'>
//             <ImageListItem key={item.url}>
//                 <img 
//                        src={item.thumbnailUrl}
//                   //  src={`${item.url}?w=161&fit=crop&auto=format`}
//                   //   srcSet={`${item.url}?w=161&fit=crop&auto=format&dpr=2 2x`}
//                     alt={item.title}
//                     loading="lazy"
//                   /> 
//                   {/* <Slider imageList={d_data}/> */}
//                   <div>
//                     <ImageListItemBar
//                                       title={item.title}
//                                       subtitle={<span>{item.postId}: {item.author}</span>}
//                                       position="below"
//                                     />
//                     <Modal btn_title="상세페이지" >
//                         <Detail id={item.id}/>
//                     </Modal>
//                   </div>
//                 <p>{item.id}</p>
                
//           </ImageListItem>
          
//           </div>
              
//           )}
     
//       </React.Fragment>
//     ))}
    
//   </ImageList>
// );
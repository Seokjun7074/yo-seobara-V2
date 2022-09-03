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


export default function TitlebarBelowImageList() {
const navigate = useNavigate();

const [datas, setDatas] = useState([]);
const [page, setPage] = useState(1)
  const [loading, setLoading] = useState(false)

  const [ref, inView] = useInView()
//   const [id, setId] = useState(1)
 
  // 서버에서 아이템을 가지고 오는 함수
  const getItems = useCallback(async () => {
    setLoading(true)
    await axios.get(`https://jsonplaceholder.typicode.com/photos/${page}`)
    .then((res) => {
        setDatas(prevState => [...prevState, res.data])
    })
    .catch(err=> console.log(err))
    setLoading(false)
  }, [page])


// useEffect(() => {
//     axios.get('https://jsonplaceholder.typicode.com/photos')
//       .then((res) => {
//         setDatas(res.data);
//       })
//    .catch(err=> console.log(err))

//   }, []);


  // `getItems` 가 바뀔 때 마다 함수 실행
  useEffect(() => {
    getItems()
  }, [getItems])


  useEffect(() => {
    // 사용자가 마지막 요소를 보고 있고, 로딩 중이 아니라면
    if (inView && !loading) {
      setPage(prevState => prevState + 1)
    //   setId(prevState => prevState + 1)
    }
  }, [inView, loading])
//   console.log(datas,page)


//   const lists = datas.filter(data => data.length < albumId)
//   console.log(lists)

  return (
    <ImageList  sx={{ width: 1/1, height: 1/2 }}cols={3} rowMaxHeight={164} >
      {datas.map((item, idx) => (
        <React.Fragment key={idx}>     
        
            {datas.length -1 ==idx ? (
              <div>
                <ImageListItem key={item.url}>
                <img onClick={()=>{
                    navigate("/detail");
                }}
                        src={item.url}
                    // src={`${item.url}?w=161&fit=crop&auto=format`}
                    // srcSet={`${item.url}?w=161&fit=crop&auto=format&dpr=2 2x`}
                    alt={item.title}
                    loading="lazy"
                    ref={ref}
                    /> 
                    <div>
                      <ImageListItemBar
                                        title={item.title}
                                        subtitle={<span>by: {item.author}</span>}
                                        position="below"
                                      />
                      <Modal btn_title="상세페이지" key={item.title}>
                        <Detail/>
                      </Modal>
                    </div>
                    </ImageListItem>
                    </div>
            ):(
              <div className='Card'>
              <ImageListItem key={item.url}>
                  <img 
                         src={item.url}
                    //  src={`${item.url}?w=161&fit=crop&auto=format`}
                    //   srcSet={`${item.url}?w=161&fit=crop&auto=format&dpr=2 2x`}
                      alt={item.title}
                      loading="lazy"
                    /> 
                    <div>
                      <ImageListItemBar
                                        title={item.title}
                                        subtitle={<span>by: {item.author}</span>}
                                        position="below"
                                      />
                      <Modal btn_title="상세페이지" key={item.title}>
                          <Detail/>
                      </Modal>
                    </div>
                  
            </ImageListItem>
            </div>
                
            )}
       

      



        
        </React.Fragment>
      ))}
    </ImageList>
  );
}



// variant="woven" cols={3} gap={3}


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

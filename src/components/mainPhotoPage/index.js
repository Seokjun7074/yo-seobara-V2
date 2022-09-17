import * as React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { useInView } from "react-intersection-observer";
import Modal from "../global/modal/index";
import Detail from "../../pages/detail";
import { getCookie } from "../../shared/Cookie";

//css 부분 (외부)
import ImageListItemBar from "@mui/material/ImageListItemBar";
import IconButton from "@mui/material/IconButton";
import InfoIcon from "@mui/icons-material/Info";
import ImageListItem from "@mui/material/ImageListItem";
import Masonry from "react-masonry-css";

//css 부분 (내부)
import { ImageWrapper, Box, CheckBar } from "./style";
import "./style.css";


const MainPhotoCard =()=> {

  
const [loading, setLoading] = useState(false);
const [datas, setDatas] = useState([]);
const [page, setPage] = useState(0)
const [ref, inView] = useInView(
  {
  // threshold: 1, // ref부분이 다 보여야 작동
  // triggerOnce: true, // 한번만 작동하는거 뺄지말지 고민중
}
);
 
  // 서버에서 리스트를 가지고 오기
  const getItems = async () => {
        setLoading(true);
        await axios
          .get(`${process.env.REACT_APP_API_URL}/api/posts?page=${page}&size=6`, {
            headers: {
              Authorization: `Bearer ${getCookie('accessToken')}`,
              
            },
          })
          .then((res) => {
            // console.log('불러온 데이터', res.data.data.last);
            const dataList = res.data.data.content;
            // console.log(dataList)
            setDatas((prev) => [...prev, ...dataList]);
          })
          .catch((err) => console.log(err));
        setLoading(false);
      };

  // `page` 가 바뀔 때 마다 함수 실행
  useEffect(() => {
    getItems();
  }, [page]);

  // 사용자가 마지막 요소를 보고 있으면
  useEffect(() => {
    if (inView) {
      setPage((prev) => prev + 1);
    }
  }, [inView]);

  const Columns = {
    default: 4,
    1200: 3,
    1000: 2,
    700: 1,
  };



return (
  
    <Masonry
        breakpointCols={Columns}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
    {datas.map((item, idx) => (
      <div>     
          {datas.length -1 ==idx ? (
        
   <Box>
      <ImageListItem key={item.img}>
        
      <ImageWrapper key={item.postId} src={item.thumbnailUrl} alt="" />
    
      <ImageListItemBar
          sx={{borderBottomRightRadius:10,borderBottomLeftRadius:10,}} 
          title={item.title}
          subtitle={item.author}
          actionIcon={
        <IconButton
         sx={{ 
            color: 'rgba(255, 255, 255, 0.54)' }}
          aria-label={`info about ${item.title}`}
          >
            <InfoIcon />
            </IconButton>
            }
            />
      </ImageListItem>
      {datas.length === 0 ? null : <CheckBar ref={ref}></CheckBar>} 
      <Modal btn_title={'상세보기'} >
        <Detail item={item}/>
        </Modal>
    </Box>   
    
    
          ):(
            <>
            <Box>
            <ImageListItem key={item.img}>
            <ImageWrapper key={item.postId} src={item.thumbnailUrl} alt="" />
          
            <ImageListItemBar
                
                sx={{borderBottomRightRadius:10,borderBottomLeftRadius:10,}} 
                title={item.title}
                subtitle={item.author}
                actionIcon={
              <IconButton
               sx={{ 
                  color: 'rgba(255, 255, 255, 0.54)' }}
                aria-label={`info about ${item.title}`}
                >
                  <InfoIcon />
                  </IconButton>
                  }
                  />
            </ImageListItem>
            {item.postId}
             <Modal btn_title={'상세보기'} >
              <Detail item={item} />
              </Modal>
          </Box>
         
          
              </>   
          )}
     
      </div>
    ))}
    
  </Masonry>
);


  
}


export default MainPhotoCard;

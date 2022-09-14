import Comments from "../../components/detailPage/comments";
import { StyledComponent } from "styled-components";
import styled, { css } from 'styled-components';
//페이지컴포넌트
import DetailPohto from "../../components/detailPage/detailPohto";
import CommentList from "../../components/detailPage/comments";
import {Box, DetailBox,DetailHeader,DetailMain,
  Detailside,DetailFooter} from './style';
import DetailForm from "../../components/detailPage/detailForm";
// import {useParams} from 'react-router-dom'
import {useEffect, useState} from 'react';
import axios from 'axios';
import Slider from '../../components/global/slider';
import DetailBody from "../../components/detailPage/detailBody";
import Modal from "../../components/global/modal";


const Detail = ({id}) => {
// const {id} = useParams();

// useEffect(async() => {

//   axios.get('https://jsonplaceholder.typicode.com/photos/9')
//     .then((res) => {
//       console.log(res.data.url)
//       setDetail(res.data);
//     })
//  .catch(err=> console.log(err))

// }, [])

const idNum = id


const [detail,setDetail] = useState(
  {
    id:'',
    title:'',
    url:[
      'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
      'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
      'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
    ]
  }
)

// console.log(detail)

return(
  <DetailBox>

<DetailMain>
  {/* <Box> */}
    

<Slider imageList={detail.url}/>
  {/* </Box> */}
</DetailMain>

<Detailside>
  <DetailBody/>
</Detailside>


<DetailHeader>
<DetailForm/>
</DetailHeader>

<DetailFooter>
<CommentList id={idNum}/>
  
</DetailFooter>
  </DetailBox>
  
);
  




// return (<DetailBox>
  //            <CardBox>
  //                 <DetailPohto id={idNum}/>
                  
                  
  //            </CardBox>
             
  //            <CommentBox>
                
  //                <CommentList id={idNum}/>
  //            </CommentBox>
            

  




};

export default Detail;

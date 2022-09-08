import Comments from "../../components/detailPage/comments";
import { StyledComponent } from "styled-components";
import styled, { css } from 'styled-components';
//페이지컴포넌트
import DetailPohto from "../../components/detailPage/detailPohto";
import CommentList from "../../components/detailPage/comments";
import {CardBox, CommentBox, DetailBox} from './style';
import DetailForm from "../../components/detailPage/detailForm";
// import {useParams} from 'react-router-dom'
import {useEffect, useState} from 'react';
import axios from 'axios';

const Detail = ({id}) => {
// const {id} = useParams();

// useEffect(async() => {
//   axios.get('https://jsonplaceholder.typicode.com/photos/9')
//     .then((res) => {
//       console.log(res.data.url)
//       // setDetail(res.data);
//     })
//  .catch(err=> console.log(err))

// }, [])

const idNum = id

  return (<DetailBox>
             <CardBox>
                  <DetailPohto id={idNum}/>
                  
                  
             </CardBox>
             
             <CommentBox>
                
                 <CommentList id={idNum}/>
             </CommentBox>
            

           </DetailBox>);
};

export default Detail;
{/* <Comments/> */}

// const CardBox = styled.div`

// `;
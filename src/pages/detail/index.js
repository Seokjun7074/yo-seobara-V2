import Comments from "../../components/detailPage/comments";
import { StyledComponent } from "styled-components";
import styled, { css } from 'styled-components';
//페이지컴포넌트
import DetailPohto from "../../components/detailPage/detailPohto";
import CommentList from "../../components/detailPage/comments";
import {CardBox} from './style';
// import {useParams} from 'react-router-dom'


const Detail = ({id}) => {
// const {id} = useParams();

const idNum = id

  return (<div>
             <CardBox>
                  <DetailPohto id={idNum}/>
                  {/* <p>sds</p> */}  
             </CardBox>
             <div className="Comment">
                 <CommentList/>
             </div>
            

           </div>);
};

export default Detail;
{/* <Comments/> */}

// const CardBox = styled.div`

// `;
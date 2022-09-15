import React from "react";
import {BodyBox, BodyTop, BodySide, BodyHeader, 
BodyTitle, BodyMain} from './style';
import { AccessAlarm, ThreeDRotation } from '@mui/icons-material';
import DeleteIcon from '@mui/icons-material/Delete';
import Grid from '@mui/material/Grid';

const DetailBody =()=> {
    return(
        <BodyBox>
           

           <BodyTop>
                {/* 좋아요  */}
            </BodyTop>
            
          
            <BodySide>
  <Grid container sx={{ color: 'text.primary' }}>
            <DeleteIcon />
            </Grid>
            수정랑 삭제
            </BodySide>
            
            
            <BodyHeader>
                서울시 동작구 만양로26 건영아파트
                a태그어떰?
            </BodyHeader>
            <BodyTitle>
                우리집이라니까 우리집
            </BodyTitle>
            <BodyMain>
                내용ㅣㅣㅏㅣㅏㅣㅏㅣㅏㅣㅏㅣㅏㅣㅏㅣㅏㅣㅏㅣㅏㅣㅏㅣㅏㅣㅏㅣㅏㅣㅏㅣ
                ㄴㅇㄴㅇ
                ㄴㅇㄴㅇㄴㅇㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹ
                ㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹ
                ㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹ
                ㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹ
                ㄹㄹㄹㄹㄹ
                ㄴㅇㄴㅇㄴㅇ
                ㄴㅇㄴㅇㄴㅇ
                ㄴㅇ
            </BodyMain>
        </BodyBox>
    );
}

export default DetailBody;
import React from "react";


const DetailPohto = () => {
    return(
        <div>

            <img
            // src={'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62'}
            src={`${'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62'}?w=161&fit=crop&auto=format`}
            art={'title'}
            />

             <div className="title">
                  <h2>제목</h2><p>내용</p>
             </div>

             <div className="contnet">
                <h2>상세주소알려주기</h2>
             </div>
        </div>
      
    

  );

    
}

export default DetailPohto;;
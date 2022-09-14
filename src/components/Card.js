import * as React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { useNavigate } from "react-router-dom";
import { useEffect, useCallback, useState } from "react";
import axios from "axios";
import { useInView } from "react-intersection-observer";

export default function WovenImageList() {
  const navigate = useNavigate();

  const [datas, setDatas] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const [ref, inView] = useInView();
  //   const [id, setId] = useState(1)

  // 서버에서 아이템을 가지고 오는 함수
  const getItems = useCallback(async () => {
    setLoading(true);
    await axios
      .get(`https://jsonplaceholder.typicode.com/photos/${page}`)
      .then((res) => {
        setDatas((prevState) => [...prevState, res.data]);
      })
      .catch((err) => console.log(err));
    setLoading(false);
  }, [page]);

  // useEffect(() => {
  //     axios.get('https://jsonplaceholder.typicode.com/photos')
  //       .then((res) => {
  //         setDatas(res.data);
  //       })
  //    .catch(err=> console.log(err))

  //   }, []);

  // `getItems` 가 바뀔 때 마다 함수 실행
  useEffect(() => {
    getItems();
  }, [getItems]);

  useEffect(() => {
    // 사용자가 마지막 요소를 보고 있고, 로딩 중이 아니라면
    if (inView && !loading) {
      setPage((prevState) => prevState + 1);
      //   setId(prevState => prevState + 1)
    }
  }, [inView, loading]);
  //   console.log(datas,page)

  //   const lists = datas.filter(data => data.length < albumId)
  //   console.log(lists)

  return (
    <ImageList
      sx={{ width: 1 / 1, height: 1 / 2 }}
      variant="woven"
      cols={3}
      gap={3}
    >
      {datas.map((item, idx) => (
        <React.Fragment key={idx}>
          <ImageListItem key={item.url}>
            {datas.length - 1 == idx ? (
              <img
                onClick={() => {
                  navigate("/detail");
                }}
                // src={item.url}
                src={`${item.url}?w=161&fit=crop&auto=format`}
                srcSet={`${item.url}?w=161&fit=crop&auto=format&dpr=2 2x`}
                alt={item.title}
                loading="lazy"
                ref={ref}
              />
            ) : (
              <img
                onClick={() => {
                  navigate("/detail");
                }}
                //  src={item.url}
                src={`${item.url}?w=161&fit=crop&auto=format`}
                srcSet={`${item.url}?w=161&fit=crop&auto=format&dpr=2 2x`}
                alt={item.title}
                loading="lazy"
              />
            )}
          </ImageListItem>
        </React.Fragment>
      ))}
    </ImageList>
  );
}

const itemData = [
  {
    url: "https://images.unsplash.com/photo-1549388604-817d15aa0110",
    title: "Bed",
  },
  {
    url: "https://images.unsplash.com/photo-1563298723-dcfebaa392e3",
    title: "Kitchen",
  },
  {
    url: "https://images.unsplash.com/photo-1523413651479-597eb2da0ad6",
    title: "Sink",
  },
  {
    url: "https://images.unsplash.com/photo-1525097487452-6278ff080c31",
    title: "Books",
  },
  {
    url: "https://images.unsplash.com/photo-1574180045827-681f8a1a9622",
    title: "Chairs",
  },
  {
    url: "https://images.unsplash.com/photo-1597262975002-c5c3b14bbd62",
    title: "Candle",
  },
  {
    url: "https://images.unsplash.com/photo-1530731141654-5993c3016c77",
    title: "Laptop",
  },
  {
    url: "https://images.unsplash.com/photo-1481277542470-605612bd2d61",
    title: "Doors",
  },
  {
    url: "https://images.unsplash.com/photo-1517487881594-2787fef5ebf7",
    title: "Coffee",
  },
  {
    url: "https://images.unsplash.com/photo-1516455207990-7a41ce80f7ee",
    title: "Storage",
  },
  {
    url: "https://images.unsplash.com/photo-1519710164239-da123dc03ef4",
    title: "Coffee table",
  },
  {
    url: "https://images.unsplash.com/photo-1588436706487-9d55d73a39e3",
    title: "Blinds",
  },
  {
    url: "https://via.placeholder.com/600/5e12c6",
    title: "Blinds",
  },
];

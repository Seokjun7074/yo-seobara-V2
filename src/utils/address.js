/*global kakao*/
export const getAddr = (lat, lng) => {
  // 주소-좌표 변환 객체를 생성합니다
  let geocoder = new kakao.maps.services.Geocoder();
  let coord = new kakao.maps.LatLng(lat, lng);
  let callback = function (result, status) {
    if (status === kakao.maps.services.Status.OK) {
      const arr = { ...result };
      // const _arr = arr[0].address.region_2depth_name;
      let address = arr[0].address.address_name;
    }
  };
  geocoder.coord2Address(coord.getLng(), coord.getLat(), callback);
};
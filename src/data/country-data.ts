// 국가 데이터
interface CountryDataType {
    category : string ,                             // 종류 (대륙 , 주 , 지역 등)
    data : [{
        continentId : number ,  
        countryId : number,                         // 대륙 id
        touristId : number,                         // 관광지 id
        name : string ,                             // 이름
        markCode : {lat : number , lng : number} ,  // 마크가 찍힐 좌표
        moveCode : {lat : number , lng : number} ,  // 이동할 좌표
        zoom : number ,                             // 이동 시 , 설정되는 Zoom 값
        count : number                              // 해당 지역의 관광지 수
    }]
}
export const CountryData = {
    category : 'country',
    data : [
        {
            continentId : 1 ,
            countryId : 1 ,
            touristId : 0 ,
            name : 'South Korea',
            markCode : { lat : 36.925574 , lng : 127.964237 },
            moveCode : {lat : 0 , lng : 0} ,  
            zoom : 0 ,                             
            count : 5                              
        }
    ]
}
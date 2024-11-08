// 대륙 데이터
interface ContinentDataType {
    category : string ,                             // 종류 (대륙 , 주 , 지역 등)
    data : [{
        continentId : number ,  
        countryId : number,                             // 고유 id
        touristId : number,                         // 관광지 id
        name : string ,                             // 이름
        markCode : {lat : number , lng : number} ,  // 마크가 찍힐 좌표
        moveCode : {lat : number , lng : number} ,  // 이동할 좌표
        zoom : number ,                             // 이동 시 , 설정되는 Zoom 값
        count : number                              // 해당 지역의 관광지 수
    }]
}
export const ContinentData : ContinentDataType = {
    category : 'continent',
    data : 
    [
        // 아시아
        {
            continentId : 1 ,
            countryId : 0 ,
            touristId : 0 ,
            name : 'Asia' ,
            markCode : { lat : 39.875183 , lng : 116.973208 } ,
            moveCode : { lat : 39.875183 , lng : 116.973208 } ,
            zoom : 4 ,
            count : 0
        }
    ]
}
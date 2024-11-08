'use client'
import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import { ContinentData } from '@/data/continent-data'
import { CountryData } from '@/data/country-data';
interface CodeType { lat : number , lng : number }
export default function Maps () {
    const [code , setCode] = useState<any>(ContinentData)
    const [center, setCenter] = useState<{lat : number , lng : number}>({ lat: 0, lng: 0 });
    const [zoom , setZoom] = useState<number>(2)
    const mapRef = useRef<google.maps.Map | null>(null);
    function handleMoveCode (moveCode: CodeType , zoom : number , condinentId : number , countryId : number) {
        setCenter({ lat : moveCode?.lat , lng : moveCode?.lng });
        setZoom(zoom)
    }
    function handleZoomChanged () {
        if (mapRef.current) {
            console.log(mapRef.current.getZoom())
            switch (mapRef.current.getZoom()) {
                case 1 : case 2 : setCode(ContinentData); break;
                case 3 : case 4 : case 5 : case 6 : setCode(CountryData); break;
                default : setCode(ContinentData); break;
            } 
        }
    };
    return(
        <>
        <GoogleMap
        options={{disableDefaultUI : true, styles : myStyles ,restriction: {
            latLngBounds: {
                north: 86,
                south: -85,
                west: -180,
                east: 180,
            },
            strictBounds: true,
        },}}
        mapContainerStyle={{ width: '100%', height: '100%' }}
        center={center} 
        zoom={zoom}
        onLoad={(map) => {
            mapRef.current = map; // map 객체를 참조에 저장
            setZoom(map.getZoom() || 2); // 초기 zoom 값 설정
        }}
        onZoomChanged={handleZoomChanged}
        >
            {code?.data?.map((map : any, index:number) => {
                return(
                    <Marker
                        key={index}
                        position={{ lat: map?.markCode?.lat, lng: map?.markCode?.lng }}
                        label={{text : '1', color : 'white'}}
                        onClick={() => handleMoveCode(map?.moveCode , map?.zoom , map?.continentId , map?.countryId) }
                    />
                )
            })}
        </GoogleMap>
        </>
    )
}

  
  const myStyles = [
    {
      featureType: "all",
      elementType: "geometry",
      stylers: [{ color: "black" }]
    },
    {
      featureType: "road",
      elementType: "labels",
      stylers: [{ visibility: "off" }]
    },
    {
      featureType: "poi",
      elementType: "labels",
      stylers: [{ visibility: "off" }]
    },
    {
      featureType: "water",
      elementType: "geometry",
      stylers: [{ color: "#7089a1" }]
    },
    {
      featureType: "landscape",
      elementType: "geometry",
      stylers: [{ color: "#ffffff" }]
    },
  ];
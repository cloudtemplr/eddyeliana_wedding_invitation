import Script from 'next/script';
import { useEffect, useRef } from 'react';

export default function HallMap() {
    const mapRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (mapRef.current) {
            const mapOptions = {
                center: new naver.maps.LatLng(
                    37.5178297, // 강남 셀럽앤어셈 위도
                    127.0235206 // 강남 셀럽앤어셈 경도
                ),
                zoom: 16,
            };

            const map = new naver.maps.Map(mapRef.current, mapOptions);

            const markerOptions = {
                position: new naver.maps.LatLng(
                    37.5178297,
                    127.0235206
                ),
                map,
            };

            new naver.maps.Marker(markerOptions);
        }
    }, []);

    return (
        <>
            <Script
                strategy='beforeInteractive'
                src={`https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=${process.env.NEXT_PUBLIC_MAP_KEY}`}
            ></Script>
            <div ref={mapRef} style={{ width: '100%', height: '400px' }} />
        </>
    );
}

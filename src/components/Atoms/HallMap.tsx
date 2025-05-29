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
                strategy="afterInteractive"
                src={`https://openapi.map.naver.com/openapi/v3/maps.js?ncpKeyId=${process.env.NEXT_PUBLIC_MAP_KEY}`}
                onLoad={() => {
                    const mapOptions = {
                    center: new naver.maps.LatLng(37.5178297, 127.0235206),
                    zoom: 16,
                    };
                    const map = new naver.maps.Map(document.getElementById("map")!, mapOptions);
                    new naver.maps.Marker({
                    position: new naver.maps.LatLng(37.5178297, 127.0235206),
                    map,
                    });
                }}
                />
            <div id="map" style={{ width: "100%", height: "400px" }} />

        </>
    );
}

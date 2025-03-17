import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from 'react-leaflet';

// Mapa
function Map() {

    const { t } = useTranslation();

    // Coordenadas iniciales (Colombia)
    const initialPosition = [4, -73];

    const [position, setPosition] = useState(null);
    const [location, setLocation] = useState(null);

    // Función para actualizar las coordenadas
    const changePosition = (position) => {
        setPosition(position);
        getLocation(position.lat, position.lng, setLocation)
    };

    return (
        <div>
            <MapContainer center={initialPosition} zoom={6} style={{ height: '400px', width: '100%' }}>
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                />

                {/* Pasa la función de actualización al componente LocationMarker */}
                <LocationMarker onPositionChange={changePosition} />

                {/* Muestra un marcador si hay coordenadas */}
                {position && (
                    <Marker position={position}>
                        <Popup>{location}</Popup>
                    </Marker>
                )}
            </MapContainer>

            {/* Mostrar coordenadas */}
            {location ? (
                <>
                    <p className="mx-auto mt-3 max-w-xl text-l/8 text-pretty text-cyan-50">{location}</p>
                    {/* <p className="mx-auto mt-6 max-w-xl text-lg/8 text-pretty text-cyan-50">
                        Latitud: {position.lat.toFixed(4)}, Longitud: {position.lng.toFixed(4)}
                    </p> */}
                </>
            ) : (
                <p className="mx-auto mt-3 max-w-xl text-l/8 text-pretty text-cyan-50">{t("investment.click_on_the_map")}</p>
            )}
        </div>
    );
}

export { Map }

//  Componente capturar coordenadas del clic
function LocationMarker({ onPositionChange }) {
    useMapEvents({
        click(e) { onPositionChange(e.latlng) }
    });
}

// FUNCIONES

// Obtener la ubicación
async function getLocation(lat, lng, setLocation) {
    const url = `https://nominatim.openstreetmap.org/reverse?format=geocodejson&lat=${lat}&lon=${lng}&zoom=10&addressdetails=1`;
    fetch(url, { headers: { 'User-Agent': 'testApp/0.1 (kevin@banderaonline.org)' } })
        .then(response => response.json())
        .then(data => {
            console.log(data);
            setLocation(data.features[0].properties.geocoding.label);
        })
        .catch(error => {
            console.error(error);
        })
}

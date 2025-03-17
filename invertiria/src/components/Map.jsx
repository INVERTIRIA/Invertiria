import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from 'react-leaflet';

// Mapa
function Map() {

    // Coordenadas iniciales (Colombia)
    const initialPosition = [4, -73];

    const [position, setPosition] = useState(null);

    // Función para actualizar las coordenadas
    const changePosition = (position) => {
        setPosition(position);
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
                        <Popup>{position.lat.toFixed(4)}, {position.lng.toFixed(4)}</Popup>
                    </Marker>
                )}
            </MapContainer>

            {/* Mostrar coordenadas */}
            {position ? (
                <p className="mx-auto mt-6 max-w-xl text-lg/8 text-pretty text-cyan-50">
                    Latitud: {position.lat.toFixed(4)}, Longitud: {position.lng.toFixed(4)}
                </p>
            ) : (
                <p className="mx-auto mt-6 max-w-xl text-lg/8 text-pretty text-cyan-50">Haz clic en el mapa para seleccionar la ubicación</p>
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

import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from 'react-leaflet';
 
// Componente para manejar el clic y mostrar el pin
function LocationMarker() {
    const [position, setPosition] = useState(null); // Estado para almacenar la posición del pin

    // Función para manejar el clic en el mapa
    const map = useMapEvents({
        click(e) {
            // Captura las coordenadas del clic y actualiza el estado
            setPosition(e.latlng);
            console.log(e.latlng);
        },
    });

    return position === null ? null : (
        <Marker position={position}>
            <Popup>¡Pin colocado aquí!</Popup>
        </Marker>
    );
}

// Componente principal del mapa
function Map() {

    // Coordenadas iniciales (Colombia)
    const initialPosition = [4.94, -73.97];

    const [position, setPosition] = useState([4.94, -73.97]);
    
    return (
        <>
            <MapContainer center={initialPosition} zoom={6} style={{ height: '50vh', width: '100%' }}>
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                />
                <LocationMarker />
            </MapContainer>
            <br></br>
            <p>Tu coordenadas son: </p>
        </>
    );
}

export { Map }

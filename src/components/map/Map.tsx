import { MapContainer, TileLayer, Marker } from 'react-leaflet'
import ID from '../../test/id'

import { CityData } from '../../utils/utils'

interface MapProps {
    cityList: Array<CityData>
    openEditModal: (city: CityData) => void
}

export default function Map(props: MapProps) {
    return <MapContainer center={[51.505, -0.09]} zoom={3} scrollWheelZoom={true} data-testid={ID.MAP}>
        <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {props.cityList.map((item, index) => {
            return <Marker key={index} position={[Number(item.lat), Number(item.long)]} interactive eventHandlers={{ click: () => props.openEditModal(item) }} >
                <div data-testid={ID.MAP_MARKER} />
            </Marker>
        })}
    </MapContainer>
}

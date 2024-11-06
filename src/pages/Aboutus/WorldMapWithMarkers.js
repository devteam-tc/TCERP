import React from "react";
import { VectorMap } from "@react-jvectormap/core";
import { worldMill } from "@react-jvectormap/world";
import styled from "styled-components";

const MapContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  height: 700px;
  margin: 0 auto;
  border-radius: 15px;
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.2);
  overflow: hidden;
  background-color: #f5f8fc;
`;

const markers = [
  { coords: [39.8283, -98.5795], name: "USA" },
  { coords: [28.7041, 77.1025], name: "New Delhi" },
  { coords: [13.0827, 80.2707], name: "Chennai" },
  { coords: [17.3850, 78.4867], name: "Hyderabad" },
  { coords: [11.0168, 76.9558], name: "Coimbatore" },
  { coords: [21.1702, 72.8311], name: "Surat" },
  { coords: [23.0225, 72.5714], name: "Ahmedabad" },
  { coords: [22.7196, 75.8577], name: "Indore" }
];

function WorldMapWithMarkers() {
  return (
    <MapContainer className="mt-5 mb-5">
      <VectorMap
        map={worldMill}
        backgroundColor="transparent"
        containerStyle={{
          width: "100%",
          height: "100%",
        }}
        zoomOnScroll={false}
        zoomMin={1.2} // Adjusted zoom level for a broader view
        center={[20, 0]} // Centering more towards the middle of the world
        regionStyle={{
          initial: {
            fill: "#37B9D6",
            "stroke-width": 1,
            "fill-opacity": 0.9,
          },
          hover: {
            fill: "#F8AF9B",
            "fill-opacity": 1,
            cursor: "pointer",
          },
          selected: {
            fill: "#1E88E5",
          },
        }}
        series={{
          regions: [
            {
              values: {
                US: "#8CD7E8",
                IN: "#8CD7E8", // Makes India stand out
              },
              attribute: "fill",
            },
          ],
        }}
        markers={markers.map(marker => ({
          latLng: marker.coords,
          name: marker.name,
        }))}
        markerStyle={{
          initial: {
            fill: "#ef5226",
            stroke: "#fff",
            "stroke-width": 2,
            r: 4, // Decreased the radius to make the markers smaller
          },
        }}
        onRegionTipShow={(e, el, code) => {
          if (code === "US" || code === "IN") {
            el.html(`<div style="font-weight:bold; color:#333;">${el.html()}</div>`);
          }
        }}
      />
    </MapContainer>
  );
}

export default WorldMapWithMarkers;

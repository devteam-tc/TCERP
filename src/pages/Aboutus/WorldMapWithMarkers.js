import { VectorMap } from "@react-jvectormap/core";
import { worldMill } from "@react-jvectormap/world";
import React from "react";
import { colorScale, countries, missingCountries } from "./Countries";

function WorldMap() {
  return (
    <div style={{ margin: "auto", width: "700px", height: "600px" }}>
      <VectorMap
        map={worldMill}
        containerStyle={{
          width: "100%",
          height: "100%",
        }}
        backgroundColor="#282c34"
        markers={missingCountries}
        markerStyle={{
          initial: {
            fill: "red",
          },
        }}
        series={{
          regions: [
            {
              scale: colorScale,
              values: countries,
              min: 0,
              max: 100,
            },
          ],
        }}
        onRegionTipShow={(event, label, code) => {
          label.html(`
            <div style="background-color: black; border-radius: 6px; min-height: 50px; width: 125px; color: white; padding-left: 10px;">
              <p><b>${label.html()}</b></p>
              <p>${countries[code] ?? "No data available"}</p>
            </div>`);
        }}
        onMarkerTipShow={(event, label, code) => {
          label.html(`
            <div style="background-color: white; border-radius: 6px; min-height: 50px; width: 125px; color: black; padding-left: 10px;">
              <p style="color: black;"><b>${label.html()}</b></p>
            </div>`);
        }}
      />
    </div>
  );
}

export default WorldMap;

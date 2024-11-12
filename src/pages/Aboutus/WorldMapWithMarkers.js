import React, { useEffect } from 'react';
import styled from 'styled-components';
import { Container, Row, Col } from 'react-bootstrap';
import * as am5 from "@amcharts/amcharts5";
import * as am5map from "@amcharts/amcharts5/map";
import worldLow from "@amcharts/amcharts5-geodata/worldLow";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";

const ChartContainer = styled.div`
  width: 100%;
  height: 500px;
  max-width: 100%;
`;

const WorldMapWithMarkers = () => {
  useEffect(() => {
    // Create root element
    let root = am5.Root.new("chartdiv");
    root._logo.dispose();

    // Set themes
    root.setThemes([am5themes_Animated.new(root)]);

    // Create the map chart
    let chart = root.container.children.push(am5map.MapChart.new(root, {
      panX: "rotateX",
      panY: "rotateY",
      projection: am5map.geoOrthographic(),
      paddingBottom: 20,
      paddingTop: 20,
      paddingLeft: 20,
      paddingRight: 20,
      rotationX: 78.5, // Center rotation on India
      rotationY: -20,
      zoomLevel: 1.2 // Adjust zoom for closer view to India
    }));
    
    // Rotation animation for smooth looping centered on India
    chart.animate({
      key: "rotationX",
      from: 78.5, // Starting from India's position
      to: 438.5,  // Complete 360-degree rotation from the centered position on India
      duration: 30000,
      loops: Infinity,
      easing: am5.ease.linear // Smooth linear easing
    });
    
    // Create main polygon series for countries with a base fill color and blue outline
    let polygonSeries = chart.series.push(am5map.MapPolygonSeries.new(root, {
      geoJSON: worldLow
    }));

    // Set default color for all countries and add blue outline
    polygonSeries.mapPolygons.template.setAll({
      tooltipText: "{name}",
      toggleKey: "active",
      interactive: true,
      fill: am5.color(0x05a7cc), // Base color for countries
      strokeWidth: 1
    });

    // Set hover state color
    polygonSeries.mapPolygons.template.states.create("hover", {
      fill: am5.color(0xffa64d) // Darker color on hover
    });

    // Highlight specific countries like India
    polygonSeries.data.setAll([
      {
        id: "IN", // ISO code for India
        fill: am5.color(0xef5226), // Custom color for highlighting India
        stroke: am5.color(0x0000ff), // Blue outline color for India
        strokeWidth: 2
      }
    ]);

    // Create graticule series for graticule lines
    let graticuleSeries = chart.series.push(am5map.GraticuleSeries.new(root, {}));
    graticuleSeries.mapLines.template.setAll({
      strokeOpacity: 0.1,
      stroke: root.interfaceColors.get("alternativeBackground")
    });

    // Add point series for markers
    let pointSeries = chart.series.push(am5map.MapPointSeries.new(root, {}));
    pointSeries.bullets.push(() => {
      let circle = am5.Circle.new(root, {
        radius: 5,
        tooltipText: "{title}",
        fill: am5.color(0xef5226) // Color for the pin markers
      });
      return am5.Bullet.new(root, {
        sprite: circle
      });
    });

    // Add marker data for locations in India and the USA
    pointSeries.data.setAll([
      { title: "Delhi", geometry: { type: "Point", coordinates: [77.1025, 28.7041] } },
      { title: "Coimbatore", geometry: { type: "Point", coordinates: [76.9558, 11.0168] } },
      { title: "Ahmedabad", geometry: { type: "Point", coordinates: [72.5714, 23.0225] } },
      { title: "Chennai", geometry: { type: "Point", coordinates: [80.2707, 13.0827] } },
      { title: "Hyderabad", geometry: { type: "Point", coordinates: [78.4867, 17.3850] } },
      { title: "Surat", geometry: { type: "Point", coordinates: [72.8311, 21.1702] } },
      { title: "Indore", geometry: { type: "Point", coordinates: [75.8577, 22.7196] } },
      { title: "USA", geometry: { type: "Point", coordinates: [-98.5795, 39.8283] } }
    ]);

    // Initial animation appearance
    chart.appear(1000, 100);

    // Clean up on unmount
    return () => {
      root.dispose();
    };
  }, []);

  return (
    <Container fluid>
      <Row className="justify-content-center">
        <Col md={10}>
          <ChartContainer id="chartdiv" />
        </Col>
      </Row>
    </Container>
  );
};

export default WorldMapWithMarkers;

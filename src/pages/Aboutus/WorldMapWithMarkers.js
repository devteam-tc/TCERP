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
  box-shadow:rgba(173, 216, 230, 0.5) 0px 10px 20px,rgba(173, 216, 230, 0.7) 0px 6px 6px;
  max-width: 100%;
  border-radius: 10px;
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
      rotationX: 78.5, // Set initial rotation to center on India
      rotationY: -20,
      zoomLevel: 2.7 // Adjusted zoom level
    }));

    // Delay the animation slightly to ensure it starts from the initial position
    setTimeout(() => {
      chart.animate({
        key: "rotationX",
        from: chart.get("rotationX"), // Ensure starting from current rotationX
        to: chart.get("rotationX") + 360,  // Full rotation
        duration: 15000,
        loops: Infinity,
        easing: am5.ease.linear
      });
    }, 500); // Adjust delay if necessary

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
      strokeWidth: 1,
      cursorOverStyle: "pointer" // Pointer cursor to indicate interactivity
    });

   
    polygonSeries.mapPolygons.template.states.create("hover", {
      fill: am5.color(0xef5226), // Darker color on hover
      strokeWidth: 2, // Increased border width for hover effect
      stroke: am5.color(0xb33e1d), // Red outline color
      shadowColor: am5.color(0xEF52264D), // Shadow color with transparency
      shadowBlur: 10, // Apply shadow blur (equivalent to the CSS blur value)
      shadowOffsetX: 3, // Horizontal offset (from box-shadow: 0px)
      shadowOffsetY: 3, // Vertical offset (from box-shadow: 10px)
    });
    // Highlight specific countries like India
    polygonSeries.data.setAll([
      {
        id: "IN", // ISO code for India
        fill: am5.color(0xfde5de), // Custom color for highlighting India
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
        tooltipText: "{title}\n{address}", // Tooltip showing city name and address
        fill: am5.color(0xfde5de) // Color for the pin markers
      });
      return am5.Bullet.new(root, {
        sprite: circle
      });
    });

    // Add marker data with address
    pointSeries.data.setAll([
      { title: "Delhi", address: "New Delhi, India", geometry: { type: "Point", coordinates: [77.1025, 28.7041] } },
      { title: "Coimbatore", address: "MayFlower Signature, Office No. 7C, 531-537 , Avinashi Road, Peelamedu, Coimbatore, Tamilnadu - 641004", geometry: { type: "Point", coordinates: [76.9558, 11.0168] } },
      { title: "Ahmedabad", address: "Ahmedabad, Gujarat, India", geometry: { type: "Point", coordinates: [72.5714, 23.0225] } },
      { title: "Chennai", address: "North Gate, NP 11, Developed PLot,Thiru Vi-Ka Industrial Estate,Ekkathuthangal, Chennai, TamilNadu - 600035", geometry: { type: "Point", coordinates: [80.2707, 13.0827] } },
      { title: "Hyderabad", address: "Office Unit No. 705, Jain Sadguru Capital Park, Image Gardens Road, VIP Hills, Madhapur, Hyderabad, Telangana, India-500081", geometry: { type: "Point", coordinates: [78.4867, 17.3850] } },
      { title: "Surat", address: "Surat, Gujarat, India", geometry: { type: "Point", coordinates: [72.8311, 21.1702] } },
      { title: "Indore", address: "Unit No 903-B, NRK Business Park, Vijay Nagar, Indore, Madhya Pradesh - 452010", geometry: { type: "Point", coordinates: [75.8577, 22.7196] } },
      { title: "USA", address: "1101, E Bell Street, Suite-E, Bloomington, Indiana, USA - 61701.", geometry: { type: "Point", coordinates: [-98.5795, 39.8283] } }
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

mapboxgl.accessToken =
  "pk.eyJ1IjoiaXZhbmVzdGViYW4iLCJhIjoiY2xvOXFiYXdnMGo0NDJqcXByMWp5eGt2NCJ9.M4IK9Cm2MPbyj26ZXeukug";

let map = new mapboxgl.Map({
  container: "map",
  style: "mapbox://styles/mapbox/streets-v11",
  center: [-118.243683, 34.052235],
  zoom: 9,
});

//var marker = new mapboxgl.Marker({ color: "#ff7b25" })
  //.setLngLat([-118.243683, 34.052235])
  //.addTo(map);

function data(){ 
  fetch("https://api.metro.net/LACMTA/vehicle_positions/all")
  .then((response) => response.json())
  .then((data) => {
    data.forEach((el) => {
      let  marker = new mapboxgl.Marker({ color: "#ff7b25" })
        .setLngLat([el.position.longitude, el.position.latitude])
        .setPopup(new mapboxgl.Popup().setHTML(el.vehicle.vehicle_id))
        .addTo(map);
    });
  });
}
data();

  setInterval(() => {
    return data();
  }, 10000);



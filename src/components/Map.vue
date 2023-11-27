<template>
  <div id="mapContainer" class="h-[91dvh] w-full"></div>
</template>

<script>
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import "/public/Leaflet/Tween.js";
import "/public/Leaflet/leaflet.curve.js";
export default {
  name: "HomeXMap",

  data() {
    return { map: null };
  },

  mounted() {
    setTimeout(() => {
      this.map = L.map("mapContainer").setView(
        [35.796198683501956, 51.417160039142345],
        17
      );
      L.tileLayer("http://{s}.tile.osm.org/{z}/{x}/{y}.png", {
        attribution:
          '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
      }).addTo(this.map);
      //use a mix of renderers
      var customPane = this.map.createPane("customPane");
      var canvasRenderer = L.canvas({ pane: "customPane" });
      customPane.style.zIndex = 399; // put just behind the standard overlay pane which is at 400

      var marker = L.marker([35.79767659207426, 51.416657591801254], {
        draggable: true,
      }).addTo(this.map);

      marker.on("dragend", function (event) {
        var marker = event.target;
        var position = marker.getLatLng();

        console.log("Marker dragged to:", position);
        // You can perform actions with the new marker position here
      });
    }, 100);
  },

  methods: {},
};
</script>

<style lang="scss" scoped></style>

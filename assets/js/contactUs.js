mapboxgl.accessToken =
  "pk.eyJ1IjoibWFobW91ZC0wOCIsImEiOiJjbTBzaGd4N3IwZ2hiMmxzNTZ2Y2lwcDJuIn0.X-5hF9U8kToxUqGi2XW6OA";

var map = new mapboxgl.Map({
  container: "map",
  style: "mapbox://styles/mapbox/streets-v11",
  center: [90.387314, 23.738999],
  zoom: 15,
});

new mapboxgl.Marker()
  .setLngLat([90.387314, 23.738999])
  .setPopup(new mapboxgl.Popup().setHTML("<h3>Our Office Location</h3>"))
  .addTo(map);

map.on("load", function () {
  map.resize();
});

// Form Validation

const form = document.getElementById("contactForm");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const subject = document.getElementById("subject");
const message = document.getElementById("message");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  var emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

  var phonePattern = /^[0-9]{11}$/;

  if (!email.value.match(emailPattern)) {
    alert("Please enter a valid email address.");
    event.preventDefault();
    return;
  }

  if (!phone.value.match(phonePattern)) {
    alert("Please enter a valid 10-digit phone number.");
    event.preventDefault();
    return;
  }

  if (subject.value.trim() === "") {
    alert("Please enter a subject.");
    event.preventDefault();
    return;
  }

  if (message.value.trim() === "") {
    alert("Please enter a message.");
    event.preventDefault();
    return;
  }
});

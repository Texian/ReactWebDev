function showText() {
  let name = document.getElementById('name').value;
  let hometown = document.getElementById('hometown').value;
  let solarCaste = document.getElementById('solarCaste').value;

  document.getElementById('show').innerHTML = name + "<br/>" + hometown + "<br/>" + solarCaste;
}
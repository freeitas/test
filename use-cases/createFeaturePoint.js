const createFeaturePoint = () => {
  let name = document.querySelector('#name').value
  let lat = document.querySelector('#lat').value
  let lon = document.querySelector('#lon').value

  const point = { 'name': name, 'lat': lat, 'lon': lon }
  
  localStorage.setItem(name, JSON.stringify(point));
}
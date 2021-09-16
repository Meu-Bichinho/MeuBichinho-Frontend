const REACT_ACCESS_TOKEN_MAP_BOX = `access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`

export const fetchLocalMapBox = (local: string) =>
fetch(
  `https://api.mapbox.com/geocoding/v5/mapbox.places/${local}.json?${REACT_ACCESS_TOKEN_MAP_BOX}`
)
  .then(response => response.json())
  .then(data => data);

export function routesList() {
  return "https://svc.metrotransit.org/nextripv2/routes";
}

export async function routeDirection(routeNumber) {
  const directionsEndpoint = `https://svc.metrotransit.org/nextripv2/directions/${routeNumber}`;
  const getDirections = await fetch(directionsEndpoint);
  const directions = await getDirections.json();

  return directions;
}

export async function routeStopsList(routeNumber, directionId) {
  const stopsListEndpoint = `https://svc.metrotransit.org/nextripv2/stops/${routeNumber}/${directionId}`;
  const getStopsList = await fetch(stopsListEndpoint);
  const stopsList = await getStopsList.json();

  return stopsList;
}


export default {
  routesList,
  routeDirection,
  routeStopsList,
};
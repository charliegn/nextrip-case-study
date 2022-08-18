import Head from "next/head";
import { useRouter } from "next/router";
import nextrip from "../api/nextrip";
import styles from "/styles/mystop.module.css";
import { styled } from "@mui/material/styles";
import { useState } from "react";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import {
  Table,
  TableBody,
  TableContainer,
  TableHead,
  TableRow,
  Paper
} from "@mui/material";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: '#cc0000',
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

export default function Home({ data }) {
  // Deconstruct data props with default fallbacks
  const { routeList = [], stopList = [] } = data;

  // Get url parameters with default fallbacks
  const router = useRouter();
  const [ pRoute = '' ] = router.query?.slug || [];

  // Setup states
  const [currentRoute, setCurrentRoute] = useState(pRoute);
  const [DirectionOpts, setDirectionOpts] = useState([]);
  const [currentDirection, setCurrentDirection] = useState('');
  const [stopsList, setStopsList] = useState(stopList);


  // handle onChange events from Route Select dropdown
  const handleRouteChange = async (event) => {
    // Clear url parameters
    router.push("/mystop/[[...slug]]", "/mystop/", { shallow: true });

    // Reset direction select value
    setCurrentDirection("");

    // Reset stops list
    setStopsList([]);

    // Update current route state
    const selectedRoute = event.target.value;
    setCurrentRoute(selectedRoute);

    // Fetch and set direction options
    const directions = await nextrip.routeDirection(selectedRoute);
    setDirectionOpts(directions);
  };

  // handle onChange events from Directions Select dropdown
  const handleDirectionChange = async (event) => {
    const selectedDirection = event.target.value;
    setCurrentDirection(selectedDirection);

    // Set url parameters for direct routing to current stops list
    router.push(
      "/mystop/[[...slug]]",
      `/mystop/${currentRoute}/${selectedDirection}`,
      { shallow: true }
    );

    // Fetch and set route stop list
    const stopsList = await nextrip.routeStopsList(
      currentRoute,
      selectedDirection
    );
    setStopsList(stopsList);
  };


  return (
    <>
      <Head>
        <title>Target Your Ride</title>
        <meta name="description" content="Front-end case study from Target" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Target Your Ride</h1>

        <FormControl fullWidth>
          <InputLabel id="select-route">Select Route</InputLabel>
          <Select
            id="route"
            className={styles.selectDD}
            label="Route"
            labelId="select-route"
            onChange={handleRouteChange}
            value={currentRoute}
          >
            {routeList.map(({ route_id, route_label }) => (
              <MenuItem key={route_id} value={route_id}>
                {route_label}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        {DirectionOpts?.length > 0 && (
          <FormControl fullWidth>
            <InputLabel id="select-direction">Select Direction</InputLabel>
            <Select
              id="direction"
              className={styles.selectDD}
              label="Direction"
              labelId="select-direction"
              onChange={handleDirectionChange}
              value={currentDirection}
            >
              {DirectionOpts.map(({ direction_id, direction_name }) => (
                <MenuItem key={direction_id} value={direction_id}>
                  {direction_name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        )}

        {stopsList.length > 0 && (
          <TableContainer component={Paper}>
            <Table id="stopsListTable">
              <TableHead>
                <TableRow>
                  <StyledTableCell>Description</StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {stopsList.map(({ place_code, description }) => (
                  <StyledTableRow
                    key={place_code}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <StyledTableCell component="th" scope="row">
                      {description}
                    </StyledTableCell>
                  </StyledTableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        )}
      </main>
    </>
  );
}

export async function getServerSideProps(context) {
  // Get URL parameters
  const { slug = [] } = context.params;

  const getRouteList = await fetch(nextrip.routesList());
  const routeList = await getRouteList.json();
  let stopList = {};

  if (slug.length > 0) {
    const [pRoute, pDirection] = slug;
    const getStopList = await fetch(
      `https://svc.metrotransit.org/nextripv2/stops/${pRoute}/${pDirection}`
    );
    stopList = await getStopList.json();
  }

  return {
    props: {
      data: {
        routeList,
        stopList,
      },
    },
  };
}

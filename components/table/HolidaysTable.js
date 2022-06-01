import {
  Box,
  chakra,
  Container,
  Divider,
  Flex,
  Select,
  Stack,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  Checkbox,
  Spacer,
  useCheckbox,
} from "@chakra-ui/react";
import * as React from "react";
import BangloreHolidays from "../../data/holidays/banglore";
import HyderabadHolidays from "../../data/holidays/hyderabad";
import NoidaHolidays from "../../data/holidays/noida";
import USHolidays from "../../data/holidays/us";
import { useState } from "react";

function isFutureDate(value) {
  const d_now = new Date();
  const d_inp = new Date(value);
  return d_now.getTime() <= d_inp.getTime();
}

function getDayOfWeek(date) {
  const dayOfWeek = new Date(date).getDay();
  return isNaN(dayOfWeek)
    ? null
    : [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ][dayOfWeek + 1];
}

const HolidaysTable = (props) => {
  const [loc, setLoc] = useState("Banglore");
  const [isChecked, setCheckbox] = useState(true);
  // const { state, ...otherProps } = useCheckbox(props);

  let holidaysObj = BangloreHolidays;

  switch (loc) {
    case "Banglore":
      holidaysObj = BangloreHolidays;
      break;
    case "Hyderabad":
      holidaysObj = HyderabadHolidays;
      break;
    case "Noida":
      holidaysObj = NoidaHolidays;
      break;
    case "USA":
      holidaysObj = USHolidays;
      break;
    default:
      holidaysObj = BangloreHolidays;
      break;
  }

  return (
    <Container maxW="3xl" py={5} px={4}>
      <Flex maxWidth="3xl" alignContent={"center"}>
        <Flex mt={2} ml={2}>
          <h4> {"Choose Location :  "}</h4>
        </Flex>
        {/* <Spacer /> */}
        {/* <LocationSelect /> */}
        <Stack ml="4">
          <Select variant="outline" onChange={(e) => setLoc(e.target.value)}>
            <option value="Banglore">Banglore</option>
            <option value="Hyderabad">Hyderabad</option>
            <option value="Noida">Noida</option>
            <option value="USA">U.S.A</option>
          </Select>
        </Stack>
        <Spacer />
        <Checkbox
          defaultChecked
          marginRight={4}
          onChange={(e) => setCheckbox(!isChecked)}
        >
          Only Show Upcoming Holidays
        </Checkbox>
      </Flex>

      <Box
        border="1px solid"
        borderColor="gray.400"
        rounded="md"
        boxShadow="lg"
        overflow="hidden"
        mt={5}
      >
        <Flex justify="left" p={5}>
          <chakra.h3 fontSize="xl" fontWeight="bold" textAlign="center">
            {loc + " Holidays List"}
          </chakra.h3>
        </Flex>
        <Divider />
        <TableContainer>
          <Table size="md">
            <Thead>
              <Tr fontWeight="900">
                <Th>Date</Th>
                <Th>Day Of Week</Th>
                <Th>Name</Th>
              </Tr>
            </Thead>
            <Tbody>
              {holidaysObj.flatMap((holiday) =>
                isChecked ? (
                  isFutureDate(holiday.Date) ? (
                    <Tr key={holiday._id}>
                      <Td fontSize="sm">{holiday.Date}</Td>
                      <Td fontSize="sm">{getDayOfWeek(holiday.Date)}</Td>
                      <Td fontSize="sm">{holiday.Name}</Td>
                    </Tr>
                  ) : null
                ) : (
                  <Tr key={holiday._id}>
                    <Td fontSize="sm">{holiday.Date}</Td>
                    <Td fontSize="sm">{getDayOfWeek(holiday.Date)}</Td>
                    <Td fontSize="sm">{holiday.Name}</Td>
                  </Tr>
                )
              )}
            </Tbody>
          </Table>
        </TableContainer>
      </Box>
    </Container>
  );
};

export default HolidaysTable;

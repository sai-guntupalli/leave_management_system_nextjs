import { Select, Stack } from "@chakra-ui/react";
import { useState } from "react";

const LocationSelect = () => {
  const [loc, setLoc] = useState("banglore");
  return (
    <>
      <Stack spacing={3}>
        <Select variant="outline" onChange={(e) => setLoc(e.target.value)}>
          <option value="banglore">Banglore</option>
          <option value="hyderabad">Hyderabad</option>
          <option value="noida">Noida</option>
          <option value="usa">U.S.A</option>
        </Select>
      </Stack>
      <h1>{"Choose loc : " + loc}</h1>
    </>
  );
};

export default LocationSelect;
// export {}

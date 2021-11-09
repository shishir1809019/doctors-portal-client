import { Grid } from "@mui/material";
import * as React from "react";
import Calendar from "../../Pages/Shared/Calendar/Calendar";
import Appointments from "../Appointments/Appointments";

const DashboardHome = () => {
  const [date, setDate] = React.useState(new Date());

  return (
    <Grid container spacing={2}>
      <Grid item xs={8} sm={5}>
        <Calendar date={date} setDate={setDate} />
      </Grid>
      <Grid item xs={4} sm={7}>
        <Appointments date={date} />
      </Grid>
    </Grid>
  );
};

export default DashboardHome;

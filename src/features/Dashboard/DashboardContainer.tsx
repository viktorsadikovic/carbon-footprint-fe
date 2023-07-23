import { Box, Grid, styled, Typography } from "@mui/material";
import planet from "../../assets/planet.png";

const StyledDashboardContainer = styled(Box)({
  display: "grid",
  // placeItems: "center",
  // placeContent: "center",
  height: "100%",
});

const Title = styled(Typography)(({ theme }) => ({
  ...theme.typography.h2,
  color: theme.themedPalette.text,
  textAlign: "center",
  fontWeight: "bold",
}));

const DashboardInfoBox = styled(Box)(({ theme }) => ({
  backgroundColor: theme.themedPalette.primary,
  borderRadius: 5,
  boxShadow: theme.shadows[3],
  textAlign: "center",
  justifyContent: "center",
  display: "flex",
  color: theme.themedPalette.background,
  alignItems: "center",
  minHeight: 100,
}));

function DashboardContainer(): JSX.Element {
  return (
    <StyledDashboardContainer>
      <Grid container>
        <Grid
          item
          md={6}
          xs={12}
          sx={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <Title>Calculate your carbon footprint</Title>
        </Grid>
        <Grid
          item
          md={6}
          xs={12}
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Box
            component="img"
            sx={{
              height: 500,
              width: 500,
              maxHeight: { xs: 500, md: 500 },
              maxWidth: { xs: 500, md: 500 },
            }}
            alt="The house from the offer."
            src={planet}
          />
        </Grid>
      </Grid>
      <Grid container spacing={2} sx={{ placeContent: "center" }}>
        <Grid item xs={12} md={3}>
          <DashboardInfoBox>
            <Typography>Easy to use</Typography>
          </DashboardInfoBox>
        </Grid>
        <Grid item xs={12} md={3}>
          <DashboardInfoBox>Gain Quick Insights</DashboardInfoBox>
        </Grid>
        <Grid item xs={12} md={3}>
          <DashboardInfoBox>
            Get suggestions on how to lower your Carbon Footprint
          </DashboardInfoBox>
        </Grid>
      </Grid>
    </StyledDashboardContainer>
  );
}

export default DashboardContainer;

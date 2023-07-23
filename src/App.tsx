import "./App.css";
import ApplicationRouter from "./router";
import { Footer } from "./ui/Footer";
import { Header } from "./ui/Header";
import { MainContainer } from "./ui/MainContainer";
import { ThemeProvider } from "./ui/theming/theme";
import { Box, styled } from "@mui/material";

const AppContainer = styled(Box)(({ theme }) => ({
  height: "100%",
  display: "grid",
  gridTemplateRows: "auto 1fr auto",
  background: theme.themedPalette.background,
}));

function App() {
  return (
    <ThemeProvider>
      <AppContainer>
        <Header />
        <MainContainer>
          <ApplicationRouter />
        </MainContainer>
        <Footer />
      </AppContainer>
    </ThemeProvider>
  );
}

export default App;

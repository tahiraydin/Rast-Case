import {
  Box,
  Container,
  TextField,
  InputAdornment,
  IconButton,
  Icon,
  Button,
} from "@mui/material";
import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import AddIcon from "@mui/icons-material/Add";
import SocialModal from "../../modals/SocialModal";
import DataTable from "../DataTable/dataTable";

function Hero() {
  const [modalOpen, setModalOpen] = React.useState(false);
  return (
    <Box
      sx={{
        mt: 3,
        backgroundImage:
          "linear-gradient(180deg, #EFF2FF -30.56%, rgba(232, 236, 255, 0) 135.85%)",
        ml: 3,
        mr: 3,
        height: "100vh",
        borderRadius: "6px",
      }}
    >
      <Container>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Box sx={{ display: "flex" }}>
            <TextField
              variant="outlined"
              placeholder="Araştır..."
              InputProps={{
                sx: {
                  width: "380px",
                  height: "42px",
                  borderRadius: "39px",
                  mt: 2,
                },
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton>
                      <SearchIcon />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
            <Box
              sx={{
                width: "49px",
                height: "42px",
                backgroundColor: "#FFFFFF",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: "39px",
                mt: 2,
                ml: 2,
                position: "relative",
              }}
            >
              <FilterAltIcon
                sx={{
                  color: "#744BFC",
                  width: "26px",
                  height: "21px",
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                }}
              />
            </Box>
          </Box>

          <Box sx={{ mt: 3 }}>
            <Button
              onClick={() => setModalOpen(true)}
              variant="contained"
              startIcon={<AddIcon />}
              sx={{
                width: "175px",
                height: "42px",
                backgroundColor: "#744BFC",
                borderRadius: "39px",
                color: "white",
                fontSize: "14px",
                lineHeight: "21px",
                //textTransform: "lowercase",
              }}
            >
              Hesap Ekle
            </Button>
            <SocialModal open={modalOpen} onClose={() => setModalOpen(false)} />
          </Box>
        </Box>
        <Box sx={{ mt: 2 }}>
          <DataTable />
        </Box>
      </Container>
    </Box>
  );
}

export default Hero;

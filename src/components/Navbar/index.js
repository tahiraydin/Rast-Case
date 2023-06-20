import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Container from "@mui/material/Container";

import Button from "@mui/material/Button";

import { Facebook, YouTube, Instagram, LinkedIn } from "@mui/icons-material";
import logo from "../../assets/logo.svg";
import { Typography } from "@mui/material";

function Navbar() {
  return (
    <AppBar position="static" style={{ background: "#FFFFFF" }}>
      <Container maxWidth="xl">
        <Toolbar>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <img src={logo} alt="logoRast" />
          </Box>

          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              flexGrow: 1,
              flexWrap: "wrap",
              gap: "8px",
              mt: { xs: 2, sm: 0 },
            }}
          >
            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <Button>
                <Typography
                  variant="h4"
                  sx={{
                    fontFamily: "Poppins",
                    fontSize: 20,
                    fontWeight: "bold",
                    textTransform: "capitalize",
                    color: "black",
                  }}
                >
                  Hakkımızda
                </Typography>
              </Button>
              <Button>
                <Typography
                  variant="h4"
                  sx={{
                    fontFamily: "Poppins",
                    fontSize: 20,
                    fontWeight: "bold",
                    textTransform: "capitalize",
                    color: "black",
                  }}
                >
                  Jüri-Yarışma Yazılımı
                </Typography>
              </Button>
              <Button>
                <Typography
                  variant="h4"
                  sx={{
                    fontFamily: "Poppins",
                    fontSize: 20,
                    fontWeight: "bold",
                    textTransform: "capitalize",
                    color: "black",
                  }}
                >
                  Word Ninja
                </Typography>
              </Button>
              <Button>
                <Typography
                  variant="h4"
                  sx={{
                    fontFamily: "Poppins",
                    fontSize: 20,
                    fontWeight: "bold",
                    textTransform: "capitalize",
                    color: "black",
                  }}
                >
                  Word Pyramids
                </Typography>
              </Button>
            </Box>
          </Box>

          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-end",
              flexWrap: "wrap",
              gap: "2px",
              mt: { xs: 2, sm: 0 },
            }}
          >
            <IconButton
              sx={{
                borderRadius: 1,
                backgroundColor: "#744BFC",
                width: "18px",
                height: "18px",
              }}
            >
              <Facebook style={{ color: "white", fontSize: 14 }} />
            </IconButton>
            <IconButton
              sx={{
                borderRadius: 1,
                backgroundColor: "#744BFC",
                width: "18px",
                height: "18px",
              }}
            >
              <YouTube style={{ color: "white", fontSize: 14 }} />
            </IconButton>
            <IconButton
              sx={{
                borderRadius: 1,
                backgroundColor: "#744BFC",
                width: "18px",
                height: "18px",
              }}
            >
              <Instagram style={{ color: "white", fontSize: 14 }} />
            </IconButton>
            <IconButton
              sx={{
                borderRadius: 1,
                backgroundColor: "#744BFC",
                width: "18px",
                height: "18px",
              }}
            >
              <LinkedIn style={{ color: "white", fontSize: 14 }} />
            </IconButton>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Navbar;

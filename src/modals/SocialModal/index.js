import {
  FormControl,
  Modal,
  TextField,
  InputLabel,
  Select,
  MenuItem,
  Button,
  Box,
  Typography,
} from "@mui/material";
import { style } from "./style";

import React, { useState } from "react";

const initialState = {
  SocialMediaLink: "",
  SocialMediaName: "",
  Explaination: "",
};

const SocialModal = ({ open, onClose }) => {
  const [error, setError] = useState("");
  const [newSocial, setNewSocial] = React.useState(initialState);
  const [success, setSuccess] = useState(false);

  const handleChange = (event) => {
    //const { name, value } = event.target;
    // console.log("name", event.target.name);
    // console.log("value", event.target.value);

    setNewSocial({
      ...newSocial,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    alert("Submit", event.target.name);
    console.log("post", newSocial);

    // setNewService({
    //     ...newService,
    //     Token: JSON.parse(localStorage.getItem('loginUserCompany')).AccessToken,
    // });
    console.log("newSocial :>> ", newSocial);

    try {
      const result = await createSocial(
        newSocial,
        JSON.parse(localStorage.getItem("loginUserCompany"))?.AccessToken
      );
      console.log("Social created successfully: " + result);

      setNewSocial(initialState);
      //const newService = { ...initialState };
      setSuccess(true);
    } catch (error) {
      console.error("Error creating social:", error);

      setError("Error creating social");
    }
  };

  return (
    <Modal open={open} onClose={onClose} sx={style.modal}>
      <Box component="form" sx={style.form}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            mt: 6,
            ml: 2,
            mr: 2,
          }}
        >
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Typography
              sx={{
                fontWeight: 500,
                fontSize: 18,
                fontFamily: "Poppins",
                fontStyle: "bold",
                lineHeight: 3,
                ml: 2,
              }}
            >
              Sosyal Medya Linki
            </Typography>
            <TextField
              variant="outlined"
              name="SocialMediaLink"
              value={newSocial.SocialMediaLink}
              sx={{
                width: "424px",
                height: "40px",
                ".MuiOutlinedInput-root": {
                  borderRadius: 7,
                },
              }}
              onChange={handleChange}
            />
          </Box>
          <Box sx={{ display: "flex", flexDirection: "column", mt: 1 }}>
            <Typography
              sx={{
                fontWeight: 500,
                fontSize: 18,
                fontFamily: "Poppins",
                fontStyle: "bold",
                lineHeight: 3,
                ml: 2,
              }}
            >
              Sosyal Medya Adı
            </Typography>
            <TextField
              variant="outlined"
              name="SocialMediaName"
              value={newSocial.SocialMediaName}
              sx={{
                width: "424px",
                height: "40px",
                ".MuiOutlinedInput-root": {
                  borderRadius: 7,
                },
              }}
              onChange={handleChange}
            />
          </Box>
          <Box sx={{ display: "flex", flexDirection: "column", mt: 1 }}>
            <Typography
              sx={{
                fontWeight: 500,
                fontSize: 18,
                fontFamily: "Poppins",
                fontStyle: "bold",
                lineHeight: 3,
                ml: 2,
              }}
            >
              Açıklama
            </Typography>
            <TextField
              variant="outlined"
              name="Explaination"
              value={newSocial.Explaination}
              sx={{
                width: "424px",
                height: "40px",
                ".MuiOutlinedInput-root": {
                  borderRadius: 7,
                },
              }}
              onChange={handleChange}
            />
          </Box>
        </Box>

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            mt: 8,
            ml: 2,
            mr: 2,
          }}
        >
          <Button type="submit" variant="contained" sx={style.buttonCancel}>
            Vazgeç
          </Button>
          <Button type="submit" variant="contained" sx={style.buttonSave}>
            Kaydet
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};

export default SocialModal;

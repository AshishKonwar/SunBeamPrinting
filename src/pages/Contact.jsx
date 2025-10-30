import React, { useState } from "react";
import {
  Box,
  Grid,
  Typography,
  TextField,
  Button,
  Paper,
  Breadcrumbs,
  Link,
} from "@mui/material";
import { useForm, Controller } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function ContactUs() {
  const navigate = useNavigate();
  const [status, setStatus] = useState("");

  const {
    handleSubmit,
    control,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    setStatus("Sending...");

    try {
      // Call your backend mail API
      const response = await axios.post("http://localhost:3000/api/mail", data);

      if (response.data.success) {
        setStatus("✅ Message sent successfully!");
        reset();
      } else {
        setStatus("❌ Failed to send message.");
      }
    } catch (error) {
      console.error("Error sending email:", error);
      setStatus("❌ Error sending message. Check console.");
    }
  };

  return (
      <Box sx={{ p: 4, backgroundColor: "#061727", minHeight: "70vh" }}>
      <Box sx={{ mb: 3 }}>
        <Breadcrumbs
          aria-label="breadcrumb"
          sx={{
            color:"#fbfbf9e8",
            fontSize: "0.85rem",
            "& a, & p": { fontSize: "0.85rem" },
          }}
        >
         <Link
            underline="hover"
            color="#fbfbf9e8"
            sx={{
              cursor: "pointer",
              transition: "color 0.3s ease",
              "&:hover": {
                color: "#01A9D8",
              },
            }}
            onClick={() => navigate("/")}
          >
            Home
          </Link>
          <Typography color="#fbfbf9e8" sx={{ fontSize: "0.85rem" }}>
            Contact Us
          </Typography>
        </Breadcrumbs>
      </Box>

      <Grid container spacing={10} justifyContent="center" mt={2}>
        {/* Left Side - Contact Info */}
        <Grid item xs={12} md={5}>
          <Box textAlign="center" sx={{ lineHeight: 1.8 }}>
            <Typography color="#fbfbf9e8" variant="h6" gutterBottom>
              Address:
            </Typography>
            <Typography color="#fbfbf9e8" variant="body1">
              Rupnagar, Guwahati <br />
              Assam, India
            </Typography>

            <Typography color="#fbfbf9e8" variant="h6" sx={{ mt: 3 }}>
              Phone No.
            </Typography>
            <Typography color="#fbfbf9e8" variant="body1">
              1234567879 <br />
              1234567891
            </Typography>

            <Typography color="#fbfbf9e8" variant="h6" sx={{ mt: 3 }}>
              Email:
            </Typography>
            <Typography 
              variant="body1"
              sx={{ fontWeight: 600, color: "#01A9D8" }}
            >
              sunbeamprintingpress@gmail.com
            </Typography>
          </Box>
        </Grid>

        {/* Right Side - Contact Form */}
        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 4, boxShadow: 3, borderRadius: 2 }}>
            <Box
              component="form"
              noValidate
              autoComplete="off"
              onSubmit={handleSubmit(onSubmit)}
            >
              {/* Name */}
              <Controller
                name="name"
                control={control}
                defaultValue=""
                rules={{ required: "Name is required" }}
                render={({ field }) => (
                  <TextField
                    {...field}
                    label="Name"
                    fullWidth
                    margin="normal"
                    error={!!errors.name}
                    helperText={errors.name?.message}
                  />
                )}
              />

              {/* Mobile No */}
              <Controller
                name="mobile"
                control={control}
                defaultValue=""
                rules={{
                  required: "Mobile number is required",
                  pattern: {
                    value: /^[0-9]{10}$/,
                    message: "Enter a valid 10-digit mobile number",
                  },
                }}
                render={({ field }) => (
                  <TextField
                    {...field}
                    label="Mobile No"
                    fullWidth
                    margin="normal"
                    error={!!errors.mobile}
                    helperText={errors.mobile?.message}
                  />
                )}
              />

              {/* Email */}
              <Controller
                name="email"
                control={control}
                defaultValue=""
                rules={{
                  required: "Email is required",
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Enter a valid email address",
                  },
                }}
                render={({ field }) => (
                  <TextField
                    {...field}
                    label="Email"
                    fullWidth
                    margin="normal"
                    error={!!errors.email}
                    helperText={errors.email?.message}
                  />
                )}
              />

              {/* Message */}
              <Controller
                name="message"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <TextField
                    {...field}
                    label="Message"
                    fullWidth
                    margin="normal"
                    multiline
                    rows={4}
                  />
                )}
              />

              {/* Submit */}
              <Button
                fullWidth
                type="submit"
                variant="contained"
                size="large"
                sx={{
                  textTransform: "none",
                  fontWeight: 600,
                  py: 1.2,
                  backgroundColor: "#01A9D8",
                  "&:hover": { backgroundColor: "#01A9D8" },
                }}
              >
                Send
              </Button>

              {status && (
                <Typography
                  sx={{ mt: 2, fontSize: "0.9rem", textAlign: "center" }}
                  color={
                    status.startsWith("✅")
                      ? "success.main"
                      : status.startsWith("❌")
                      ? "error.main"
                      : "text.secondary"
                  }
                >
                  {status}
                </Typography>
              )}
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}

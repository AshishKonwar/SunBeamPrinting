import React from "react";
import { 
  Box, 
  Grid, 
  Typography, 
  TextField, 
  Button, 
  Paper, 
  Breadcrumbs, 
  Link 
} from "@mui/material";
import { useForm, Controller } from "react-hook-form";
import { useNavigate } from "react-router-dom";

export default function ContactUs() {
  const navigate = useNavigate();

  const { 
    handleSubmit, 
    control, 
    formState: { errors }, 
    reset 
  } = useForm();

  const onSubmit = (data) => {
    console.log("Form Data:", data);
    alert("Form submitted successfully!");
    reset();
  };

  return (
    <Box sx={{ p: 4, backgroundColor: "#fafafa", minHeight: "70vh" }}>
      <Box sx={{ mb: 3 }}>
        <Breadcrumbs 
          aria-label="breadcrumb" 
          sx={{ 
            fontSize: "0.85rem",  // smaller text size
            "& a, & p": { fontSize: "0.85rem" } // ensure both link and text shrink
          }}
        >
          <Link
            underline="hover"
            color="inherit"
            sx={{ cursor: "pointer" }}
            onClick={() => navigate("/")}
          >
            Home
          </Link>
          <Typography color="grey.800" sx={{ fontSize: "0.85rem" }}>
            Contact Us
          </Typography>
        </Breadcrumbs>
      </Box>

      {/* ===== Page Title ===== */}
      {/* <Typography 
        variant="h4" 
        fontWeight={700} 
        textAlign="center" 
        gutterBottom
      >
        Contact Us
      </Typography> */}

      {/* ===== Main Content ===== */}
      <Grid container spacing={10} justifyContent="center" mt={2}>
        {/* Left Side - Contact Info */}
        <Grid item xs={12} md={5}>
          <Box textAlign="center" sx={{ lineHeight: 1.8 }}>
            <Typography variant="h6" gutterBottom>
              Address:
            </Typography>
            <Typography variant="body1">
              Rupnagar, Guwahati <br />
              Assam, India
            </Typography>

            <Typography variant="h6" sx={{ mt: 3 }}>
              Phone No.
            </Typography>
            <Typography variant="body1">
              1234567879 <br />
              1234567891
            </Typography>

            <Typography variant="h6" sx={{ mt: 3 }}>
              Email:
            </Typography>
            <Typography 
              variant="body1" 
              sx={{ fontWeight: 600, color: "primary.main" }}
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
                    message: "Enter a valid 10-digit mobile number"
                  }
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
                    message: "Enter a valid email address"
                  }
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
                  backgroundColor: "#03A9F4",
                  "&:hover": {
                    backgroundColor: "#0288D1"
                  }
                }}
              >
                Send
              </Button>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}

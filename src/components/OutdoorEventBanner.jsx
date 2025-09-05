import { 
  Box, 
  Container, 
  Typography, 
  Stack,
  Breadcrumbs,
  Link,
  IconButton,
  Tabs,
  Tab,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  MenuItem,
  FormControl,
  InputLabel,
  Select,
  Grid
} from "@mui/material";
import { 
  CameraAlt,    
  Folder, 
  Settings,
  Home
} from "@mui/icons-material";
import { useMemo, useState } from "react";
import CategoryExploreCarousel from "./CategoryExploreCarousel";
import FeaturedCollectionsCarousel from "./FeaturedCollectionsCarousel";
import heroImage from "../assets/pictures/hero.png";

export default function OutdoorEventBanner() {
  const [activeTab, setActiveTab] = useState(0); 
  const [dialogOpen, setDialogOpen] = useState(false);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [selectedQuery, setSelectedQuery] = useState("");
  const [customQuery, setCustomQuery] = useState("");

  const presetQueries = useMemo(() => [
    "Books & Magazines",
    "Posters & Banners",
    "Binding & Laminating",
    "Digital Printing",
    "Packaging & Labels",
    "Custom Request"
  ], []);

  const handleTabChange = (event, newValue) => {                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     
    setActiveTab(newValue);
  };

  const handleOpenDialog = () => setDialogOpen(true);
  const handleCloseDialog = () => setDialogOpen(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const payload = { fullName, email, phone, selectedQuery, customQuery };
    // eslint-disable-next-line no-console
    console.log("Submitted inquiry:", payload);
    handleCloseDialog();
    setFullName("");
    setEmail("");
    setPhone("");
    setSelectedQuery("");
    setCustomQuery("");
  };

  const tabs = [
    "Signage",
    "Clothing", 
    "Marketing essentials",
    "Giveaways & swag",
    "Packaging"
  ];

  return (
    <Box>
      <Box sx={{ 
        // bgcolor: "background.paper", 
        // borderBottom: "1px solid", 
        // borderColor: "divider",
      }}>
        <Container maxWidth="lg">
          <Stack 
            direction="row" 
            justifyContent="space-between" 
            alignItems="center"
          >
          </Stack>
        </Container>
      </Box>

      {/* Main Banner Section */}
      <Box sx={{ py: 6, bgcolor: "grey.50" }}>
        <Container maxWidth="xl">
          <Box sx={{ 
            display: "grid", 
            gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
            gap: 4,
            alignItems: "center"
          }}>
            {/* Left Text Section */}
            <Box textAlign="left">
          <Typography
            variant="h3"
            component="h1"
            sx={{
              fontWeight: 700,
              mb: 2,
              color: "grey.800",
            }}
          >
            Stand Out Everywhere with
          </Typography>

          <Typography
            variant="h3"
            component="span"
            sx={{
              fontWeight: 900,
              display: "block",
              color: "primary.main", 
              letterSpacing: 1,
            }}
          >
            Sun Beam Printing Press
          </Typography>

          <Typography
            variant="h6"
            sx={{
              color: "grey.800",
              lineHeight: 1.8,
              maxWidth: 600,
              mt: 3,
              fontSize: { xs: "1rem", md: "1.125rem" },
            }}
          >
            From <strong>books and magazines</strong> to <strong>posters, binding, laminating,</strong> 
            and <strong>digital printing</strong> — we provide everything you need 
            to shine at <em>markets, events, and beyond</em>.
          </Typography>
          <Box sx={{ mt: 3 }}>
            <Button 
              variant="contained" 
              color="primary"
              size="large"
              onClick={handleOpenDialog}
              sx={{
                px: 3,
                py: 1.2,
                borderRadius: 2,
                boxShadow: 3,
                textTransform: "none",
                fontWeight: 700,
                letterSpacing: 0.3,
                transition: "transform 200ms ease, box-shadow 200ms ease",
                "&:hover": {
                  transform: "translateY(-2px)",
                  boxShadow: 6
                }
              }}
            >
              Make a query
            </Button>
          </Box>
        </Box>

            {/* Right Image Section */}
            <Box sx={{ 
              position: "relative",
              borderRadius: 3,
              overflow: "hidden",
              boxShadow: "0 20px 40px rgba(0,0,0,0.1)"
            }}>
              <Box
                component="img"
                src={heroImage}
                alt="Outdoor market stall with vendor"
                sx={{
                  width: "100%",
                  height: 400,
                  objectFit: "cover",
                  borderRadius: 3
                }}
              />
            </Box>
          </Box>
        </Container>
      </Box>

      {/* Inquiry Dialog */}
      <Dialog open={dialogOpen} onClose={handleCloseDialog} fullWidth maxWidth="md">
        <DialogTitle>Request a query</DialogTitle>
        <Box component="form" onSubmit={handleSubmit} noValidate>
          <DialogContent>
            <Grid container spacing={2}>
              <Grid item xs={12} md={6}>
                <Stack spacing={2}>
                  <TextField
                    label="Full name"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    required
                    fullWidth
                  />
                  <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
                    <TextField
                      label="Email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      fullWidth
                    />
                    <TextField
                      label="Phone"
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      fullWidth
                    />
                  </Stack>
                  <FormControl fullWidth>
                    <InputLabel id="preset-query-label">Select a query</InputLabel>
                    <Select
                      labelId="preset-query-label"
                      label="Select a query"
                      value={selectedQuery}
                      onChange={(e) => setSelectedQuery(e.target.value)}
                    >
                      {presetQueries.map((q) => (
                        <MenuItem key={q} value={q}>{q}</MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                  <TextField
                    label="Custom query (optional)"
                    value={customQuery}
                    onChange={(e) => setCustomQuery(e.target.value)}
                    multiline
                    minRows={4}
                    fullWidth
                  />
                </Stack>
              </Grid>
              <Grid item xs={12} md={6}>
              <Box
                sx={{
                  width: "100%",
                  height: 400,
                  borderRadius: 3,
                  backgroundImage: `url(${heroImage})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  boxShadow: "0 20px 40px rgba(0,0,0,0.1)"
                }}
              />
              </Grid>
            </Grid>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleCloseDialog}>Cancel</Button>
            <Button type="submit" variant="contained">Submit</Button>
          </DialogActions>
        </Box>
      </Dialog>

      {/* Bottom Navigation Tabs */}
      {/* <Box sx={{ 
        bgcolor: "background.paper"
      }}>
        <Container maxWidth="lg">
        <Tabs 
            value={activeTab} 
            onChange={handleTabChange}
            variant="scrollable"
            scrollButtons="auto"
            sx={{
              "& .MuiTab-root": {
                minWidth: "auto",
                px: 3,
                py: 2,
                textTransform: "none",
                fontWeight: 500,
                fontSize: "1rem",
                color: "black", 
              },
              "& .MuiTab-root.Mui-selected": {
                color: "#2F3A53", 
              }, 
              "& .MuiTabs-indicator": {
                height: 3,
                bgcolor: "black"
              }
            }}
          >
            {tabs.map((tab, index) => (  
              <Tab 
                key={tab}
                label={tab} 
                sx={{
                  color: activeTab === index ? "black" : "text.secondary"
                }}
              />
            ))}
          </Tabs>
        </Container>
      </Box> */}

      {/* Category Explore Carousel */}
      <CategoryExploreCarousel />

      {/* Featured Collections Carousel */}
      <FeaturedCollectionsCarousel />
    </Box>
  );
}

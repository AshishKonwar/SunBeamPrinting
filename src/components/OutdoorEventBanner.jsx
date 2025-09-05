import { 
  Box, 
  Container, 
  Typography, 
  Stack,
  Breadcrumbs,
  Link,
  IconButton,
  Tabs,
  Tab                           
} from "@mui/material";
import { 
  CameraAlt,    
  Folder, 
  Settings,
  Home
} from "@mui/icons-material";
import { useState } from "react";
import CategoryExploreCarousel from "./CategoryExploreCarousel";
import FeaturedCollectionsCarousel from "./FeaturedCollectionsCarousel";
import heroImage from "../assets/pictures/hero.png";

export default function OutdoorEventBanner() {
  const [activeTab, setActiveTab] = useState(0); 

  const handleTabChange = (event, newValue) => {                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     
    setActiveTab(newValue);
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

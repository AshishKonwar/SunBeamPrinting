import { Box, Container, Stack, Typography } from "@mui/material";
import Hero from "../components/Hero";
import CategoryGrid from "../components/CategoryGrid";
import PromoBanner from "../components/PromoBanner";
import CategoriesRail from "../components/CategoryGrid";
import BenefitsStrip from "../components/BenefitsStrip";
import FeaturedCollectionsCarousel from "../components/FeaturedCollectionsCarousel";
import UGCGallery from "../components/UGCGallery";
import Footer from "../components/Footer";
import FeedbackSection from "../components/FeedbackSection";

 export default function Home() {
   return (
     <>
       {/* <Hero /> */}
       <CategoriesRail />
       {/* <BenefitsStrip /> */}

       {/* <CategoryGrid /> */}

      {/* <PromoBanner /> */}
      {/* <FeaturedCollectionsCarousel /> */}
      <UGCGallery />
      <FeedbackSection />

       <Box sx={{ py: { xs: 1, md: 5 } }}> 
         <Container maxWidth="lg">
           <Stack spacing={1} alignItems="center">
             <Typography variant="h6" fontWeight={700}>
               Customers rate us "Excellent"
             </Typography>
             <Typography color="text.secondary" align="center">
               Fast turnaround, professional quality, and friendly support for small businesses.
             </Typography>
           </Stack>
         </Container>
       </Box>

      <Footer />
     </>
   );
 }
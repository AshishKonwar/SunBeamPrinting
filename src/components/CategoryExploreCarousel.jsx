import { useState, useRef } from "react";
import { 
  Box, 
  Container, 
  Typography, 
  IconButton,
  Avatar
} from "@mui/material";
import { ChevronLeft, ChevronRight } from "@mui/icons-material";

const categories = [
  {
    id: 1,
    name: "Business Cards",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=150&h=150&fit=crop&crop=center",
    color: "#F5F5DC"
  },
  {
    id: 2,
    name: "Postcards & Print Advertising",
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=150&h=150&fit=crop&crop=center",
    color: "#E8F5E8"
  },
  {
    id: 3,
    name: "Signs, Banners & Posters",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=150&h=150&fit=crop&crop=center",
    color: "#FFF3E0"
  },
  {
    id: 4,
    name: "Stickers & Labels",
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=150&h=150&fit=crop&crop=center",
    color: "#FFF9C4"
  },
  {
    id: 5,
    name: "Clothing & Bags",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=150&h=150&fit=crop&crop=center",
    color: "#F3E5F5"
  },
  {
    id: 6,
    name: "Promotional Products",
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=150&h=150&fit=crop&crop=center",
    color: "#E3F2FD"
  },
  {
    id: 7,
    name: "Packaging",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=150&h=150&fit=crop&crop=center",
    color: "#EFEBE9"
  },
  {
    id: 8,
    name: "Invitations, Gifts & Stationery",
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=150&h=150&fit=crop&crop=center",
    color: "#FCE4EC"
  },
  {
    id: 9,
    name: "Wedding",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=150&h=150&fit=crop&crop=center",
    color: "#E8F5E8"
  },
  {
    id: 10,
    name: "Design & Logo",
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=150&h=150&fit=crop&crop=center",
    color: "#FFF8E1"
  }
];

export default function CategoryExploreCarousel() {
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const scrollContainerRef = useRef(null);

  const checkScrollButtons = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 1);
    }
  };

  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const scrollAmount = 300;
      const newScrollLeft = scrollContainerRef.current.scrollLeft + (direction === 'left' ? -scrollAmount : scrollAmount);
      scrollContainerRef.current.scrollTo({
        left: newScrollLeft,
        behavior: 'smooth'
      });
    }
  };

  return (
    <Box sx={{ py: 6, bgcolor: "background.paper" }}>
      <Container maxWidth="xl">
        {/* Section Title */}
        <Typography 
          variant="h4" 
          component="h2" 
          sx={{ 
            mb: 4, 
            fontWeight: 700,
            color: "text.primary",
            textAlign: "left"
          }}
        >
          Explore all categories
        </Typography>

        <Box sx={{ position: "relative" }}>
          {/* Navigation Buttons */}
          {canScrollLeft && (
            <IconButton
              onClick={() => scroll('left')}
              sx={{
                position: "absolute",
                left: -30,
                top: "50%",
                transform: "translateY(-50%)",
                bgcolor: "grey.200",
                color: "grey.700",
                zIndex: 2,
                "&:hover": {
                  bgcolor: "grey.300"
                }
              }}
            >
              <ChevronLeft />
            </IconButton>
          )}

          {canScrollRight && (
            <IconButton
              onClick={() => scroll('right')}
              sx={{
                position: "absolute",
                right: -30,
                top: "50%",
                transform: "translateY(-50%)",
                bgcolor: "white",
                color: "grey.700",
                zIndex: 2,
                boxShadow: 2,
                "&:hover": {
                  bgcolor: "grey.50"
                }
              }}
            >
              <ChevronRight />
            </IconButton>
          )}

          {/* Carousel Container */}
          <Box
            ref={scrollContainerRef}
            onScroll={checkScrollButtons}
            sx={{
              display: "flex",
              gap: 4,
              overflowX: "auto",
              scrollbarWidth: "none",
              msOverflowStyle: "none",
              "&::-webkit-scrollbar": { display: "none" },
              px: 2,
              pb: 2
            }}
          >
            {categories.map((category) => (
              <Box
                key={category.id}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  minWidth: 140,
                  cursor: "pointer",
                  transition: "transform 0.2s",
                  "&:hover": {
                    transform: "translateY(-4px)"
                  }
                }}
              >
                <Avatar
                  src={category.image}
                  sx={{
                    width: 100,
                    height: 100,
                    mb: 2,
                    bgcolor: category.color,
                    border: "3px solid white",
                    boxShadow: "0 4px 12px rgba(0,0,0,0.1)"
                  }}
                />
                <Typography
                  variant="body2"
                  sx={{
                    textAlign: "center",
                    fontWeight: 500,
                    fontSize: "0.875rem",
                    lineHeight: 1.2,
                    maxWidth: 120,
                    color: "text.primary"
                  }}
                >
                  {category.name}
                </Typography>
              </Box>
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

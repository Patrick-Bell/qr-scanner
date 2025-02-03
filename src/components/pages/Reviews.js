import { Box, Typography, Card, CardContent, Avatar } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import StarIcon from "@mui/icons-material/Star";

// Dummy review data
const reviews = [
  {
    name: "Jane Doe",
    role: "Business Owner",
    review: "Super easy to generate QR codes! Love the clean design and simplicity.",
    rating: 5,
    avatar: "https://i.pravatar.cc/150?img=1",
  },
  {
    name: "John Smith",
    role: "Marketing Manager",
    review: "Perfect for linking to social media and sharing contacts efficiently.",
    rating: 4,
    avatar: "https://i.pravatar.cc/150?img=2",
  },
  {
    name: "Sarah Lee",
    role: "Freelancer",
    review: "A must-have tool for networking events! Scanning QR Vcards is so convenient.",
    rating: 5,
    avatar: "https://i.pravatar.cc/150?img=3",
  },
  {
    name: "Jane Doe",
    role: "Business Owner",
    review: "Super easy to generate QR codes! Love the clean design and simplicity.",
    rating: 5,
    avatar: "https://i.pravatar.cc/150?img=1",
  },
  {
    name: "John Smith",
    role: "Marketing Manager",
    review: "Perfect for linking to social media and sharing contacts efficiently.",
    rating: 4,
    avatar: "https://i.pravatar.cc/150?img=2",
  },
  {
    name: "Sarah Lee",
    role: "Freelancer",
    review: "A must-have tool for networking events! Scanning QR Vcards is so convenient.",
    rating: 5,
    avatar: "https://i.pravatar.cc/150?img=3",
  },
  {
    name: "Jane Doe",
    role: "Business Owner",
    review: "Super easy to generate QR codes! Love the clean design and simplicity.",
    rating: 5,
    avatar: "https://i.pravatar.cc/150?img=1",
  },
  {
    name: "John Smith",
    role: "Marketing Manager",
    review: "Perfect for linking to social media and sharing contacts efficiently.",
    rating: 4,
    avatar: "https://i.pravatar.cc/150?img=2",
  },
  {
    name: "Sarah Lee",
    role: "Freelancer",
    review: "A must-have tool for networking events! Scanning QR Vcards is so convenient.",
    rating: 5,
    avatar: "https://i.pravatar.cc/150?img=3",
  },
];

const ReviewsSection = () => {
  return (
        <Box
          sx={{
            background: "#f9f9f9",
            borderRadius: "20px",
            margin: "30px",
            padding: "40px 20px",
            position: "relative",
            zIndex: 100,

          }}
        >      
        {/* Section Title */}
      <Typography textAlign={'center'} fontWeight={800} fontSize={{ xs: 30, md: 40 }} fontFamily="Archivo Black">
        CUSTOMER REVIEWS
      </Typography>
      <Typography textAlign={'center'} color="grey" fontSize={{ xs: 16, md: 18 }} sx={{ mt: 2, mb: 4 }}>
        Hear from our happy users!
      </Typography>

      {/* Purple background circle */}
      <Box
        sx={{
          position: "absolute",
          top: "-50px",
          right: "-100px",
          height: "250px",
          width: "250px",
          borderRadius: "50%",
          background: "#5271FF",
          opacity: 0.3,
          zIndex: 0,
        }}
      />

      {/* Swiper Carousel */}
      <Swiper
      className="swiper"
        modules={[Navigation, Pagination]}
        spaceBetween={20}
        slidesPerView={1}
        pagination={{ clickable: true }}
        navigation
        breakpoints={{
          768: { slidesPerView: 2 }, // Show 2 reviews on tablets
          1024: { slidesPerView: 3 }, // Show 3 reviews on larger screens
        }}
      >
        {reviews.map((review, index) => (
          <SwiperSlide key={index}>
            <Card sx={{ padding: "20px", textAlign: "center", boxShadow: 3, borderRadius: "15px" }}>
              <Avatar src={review.avatar} sx={{ width: 70, height: 70, margin: "auto" }} />
              <CardContent>
                <Typography fontWeight={700} fontSize={18}>{review.name}</Typography>
                <Typography color="grey" fontSize={14}>{review.role}</Typography>
                {/* Star Ratings */}
                <Box sx={{ display: "flex", justifyContent: "center", mt: 1, mb: 2 }}>
                  {Array.from({ length: review.rating }).map((_, i) => (
                    <StarIcon key={i} sx={{ color: "#FFD700" }} />
                  ))}
                </Box>
                <Typography color="black" fontSize={14}>"{review.review}"</Typography>
              </CardContent>
            </Card>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};

export default ReviewsSection;

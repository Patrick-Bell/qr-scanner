import { motion } from "framer-motion";
import { Box } from "@mui/material";

const ScannerAnimation = () => {
  return (
    <Box sx={{ position: "relative", width: "100vw", overflow: "hidden", height:'100vh'}}>
      {/* Scanning Line */}
      <motion.div
        initial={{ y: "-100%" }} // Start above the screen
        animate={{ y: "100vh" }}   // Move to the bottom
        transition={{
          duration: 2, // Adjust speed of scanning
          repeat: Infinity, // Keep repeating
          repeatType: "loop", // Continuous loop
          ease: "linear", // Smooth linear motion
        }}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "4px", // Thickness of the scan line
          background: "lightgrey", // Color of the scan line
          boxShadow: "0px 0px 10px lightgrey", // Glow effect
        }}
      />

    </Box>
  );
};

export default ScannerAnimation;

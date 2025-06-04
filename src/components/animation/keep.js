/*
 <Box sx={{position: 'absolute', top: 0, right: 0, height: '150px', width: '20px', background: '#5271FF'}} />
    <Box sx={{position: 'absolute', top: 0, right: 0, height: '20px', width: '150px', background: '#5271FF'}} />

    <Box sx={{position: 'absolute', top: 0, left: 0, height: '150px', width: '20px', background: '#5271FF'}} />
    <Box sx={{position: 'absolute', top: 0, left: 0, height: '20px', width: '150px', background: '#5271FF'}} />

    <Box sx={{position: 'absolute', bottom: 0, left: 0, height: '150px', width: '20px', background: '#5271FF'}} />
    <Box sx={{position: 'absolute', bottom: 0, left: 0, height: '20px', width: '150px', background: '#5271FF'}} />

    <Box sx={{position: 'absolute', bottom: 0, right: 0, height: '150px', width: '20px', background: '#5271FF'}} />
    <Box sx={{position: 'absolute', bottom: 0, right: 0, height: '20px', width: '150px', background: '#5271FF'}} />

            <Box sx={{position:'absolute', top:'50%', left:'50%', transform:'translate(-50%, -50%)'}}>







           <Box sx={{ display: 'flex', gap: 1, mt: 2 }}>
                {["black", "red", "blue", "green", "grey"].map((color) => (
                    <Button
                    key={color}
                    onClick={() => setQRColor(color)}
                    sx={{
                        minWidth: "30px",
                        height: "30px",
                        backgroundColor: color,
                        borderRadius: "20%",
                        "&:hover": { opacity: 0.7 }
                    }}
                    />
                ))}
                </Box>

    */
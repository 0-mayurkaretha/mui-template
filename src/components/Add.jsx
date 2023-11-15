import React, { useState } from "react"
import { Box, Stack, Tooltip, Fab, Modal, Typography, styled, Avatar, TextField, Button, ButtonGroup } from '@mui/material'
import { Add as AddIcon, EmojiEmotions, Image, VideoCameraBack, PersonAdd, DateRange } from '@mui/icons-material'

const StyledModal = styled(Modal)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center"
})

const UserBox = styled(Box)({
  display: "flex",
  alignItems: "center",
  gap: "10px",
  marginBottom: "20px"
})

const Add = () => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <Tooltip onClick={ e => setOpen(true) } title="Delete" sx={{ position: "fixed", bottom: 20, left: { xs: "calc(50%)", md: 30 }}}>
        <Fab color="primary" aria-label="add">
          <AddIcon />
        </Fab>
      </Tooltip>
      <StyledModal
        open={open}
        onClose={ e => setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        >
        <Box width={400} height={280} bgcolor={"background.default"} color={"text.primary"} p={3} borderRadius={5}>
          <Typography variant="h6" color="grey" textAlign="center">
            Create post
          </Typography>
          <UserBox>
            <Avatar src="" sx={{ width: 30, heght: 30}}></Avatar>
            <Typography fontWeight={500} variant="span">John doe</Typography>
          </UserBox>
          <TextField
            id="standard-multiline-static"
            sx={{ width: "100%"}}
            multiline
            rows={4}
            placeholder="What's on your mind?"
            variant="standard"
          />
          <Stack direction="row" gap={1} mt={2} mb={3}>
            <EmojiEmotions color="primary" />
            <Image color="secondary" />
            <VideoCameraBack color="success" />
            <PersonAdd color="error" />
          </Stack>
          <ButtonGroup fullWidth variant="contained">
            <Button>Post</Button>
            <Button sx={{ width: "100px" }}> <DateRange /> </Button>
          </ButtonGroup>
        </Box>
      </StyledModal>
    </div>
  )
};

export default Add;
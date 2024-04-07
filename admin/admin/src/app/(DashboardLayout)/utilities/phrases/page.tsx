"use client";
import PageContainer from "@/app/(DashboardLayout)/components/container/PageContainer";
import DashboardCard from "../../components/shared/DashboardCard";
import { Box, Button, FormLabel, Stack, TextField } from "@mui/material";

const AddPhrase = () => {
  return (
    <PageContainer title="add-themes" description="this is add-themes">
      <DashboardCard>
        <Stack gap={4}>
          <Stack direction={"column"} gap={1.5}>
            <Box>
              <FormLabel>phrases</FormLabel>
              <TextField
                variant="outlined"
                color="primary"
                label="phrases"
                required
                sx={{ minWidth: "100%" }}
              />
            </Box>
            <Box>
              <FormLabel>author</FormLabel>
              <TextField
                variant="outlined"
                color="primary"
                label="author"
                required
                sx={{ minWidth: "100%" }}
              />
            </Box>
          </Stack>

          <Box>
            <Button
              color="primary"
              variant="contained"
              size="large"
              fullWidth
              href="/"
              type="submit"
            >
              Add
            </Button>
          </Box>
        </Stack>
      </DashboardCard>
    </PageContainer>
  );
};

export default AddPhrase;

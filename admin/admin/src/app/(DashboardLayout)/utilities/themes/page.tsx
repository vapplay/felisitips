"use client";
import PageContainer from "@/app/(DashboardLayout)/components/container/PageContainer";
import DashboardCard from "@/app/(DashboardLayout)/components/shared/DashboardCard";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Stack,
  TextField,
} from "@mui/material";
import { Fragment } from "react";

const AddTheme = () => {
  return (
    <PageContainer title="add-themes" description="this is add-themes">
      <DashboardCard>
        <Stack gap={4}>
          <Stack direction={"column"} gap={1.5}>
            <Box>
              <FormLabel>Theme image url</FormLabel>
              <TextField
                variant="outlined"
                color="secondary"
                label="img url"
                required
                sx={{ minWidth: "100%" }}
              />
            </Box>
            <Box>
              <FormLabel>Theme name</FormLabel>
              <TextField
                variant="outlined"
                color="secondary"
                label="name"
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

export default AddTheme;

"use client";
import PageContainer from "@/app/(DashboardLayout)/components/container/PageContainer";
import DashboardCard from "../../components/shared/DashboardCard";
import { Box, Button, FormLabel, Stack, TextField } from "@mui/material";
import { useState } from "react";
import axios from "axios";
import { severConfig } from "@/server/config";
import { toast } from "sonner";

const AddPhrase = () => {
  const [info, setInfo] = useState({
    by: "",
    phrase: "",
  });

  const handleData = async (event: any) => {
    try {
      await axios.post(`${severConfig.uri}/add-phrase`, info);

      toast.success("phrase add");
      setInfo({
        by: "",
        phrase: "",
      });
      event.preventDefault();
    } catch (error) {
      toast.error("erro al agregar la frase");
    }
  };

  const handleChange = (event: any) => {
    const { name, value } = event.target;
    console.log(name, value);

    setInfo((prevInfo) => ({
      ...prevInfo,
      [name]: value,
    }));
  };

  return (
    <PageContainer title="add-themes" description="this is add-themes">
      <DashboardCard>
        <Stack gap={4}>
          <Stack direction={"column"} gap={1.5}>
            <Box>
              <FormLabel>phrases</FormLabel>
              <TextField
                onChange={handleChange}
                name="phrase"
                value={info.phrase}
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
                onChange={handleChange}
                name="by"
                value={info.by}
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
              onClick={handleData}
              color="primary"
              variant="contained"
              size="large"
              fullWidth
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

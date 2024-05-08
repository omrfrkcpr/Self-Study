import { Box, Button, TextField } from "@mui/material";
import SaveIcon from "@mui/icons-material/Save";
import { useState } from "react";

//! First method
// const AddTodoComp = ({
//   addTodo,
// }: {
//   addTodo: (text: string) => Promise<void>;
// }) => { ...

//! Second Method
interface AddTodoComp {
  // addTodo: (text: string) => Promise<void>;
  addTodo: AddFunc;
}

const AddTodoComp = ({ addTodo }: AddTodoComp) => {
  // const [text, setText] = useState<string>("");
  const [text, setText] = useState(""); // type inference

  const handleClick = () => {
    addTodo(text);
    setText("");
  };

  return (
    <Box
      sx={{
        display: { xs: "block", sm: "flex" },
        justifyContent: { xs: "flex-start", sm: "center" },
        m: { xs: 1, sm: 3 },
        height: { xs: "120px", sm: "80px" },
      }}
    >
      <TextField
        id="outlined-basic"
        label="New Todo"
        color="success"
        value={text}
        onChange={(e) => setText(e.target.value)}
        sx={{ minWidth: { xs: "100%", sm: "50%" }, height: "50px", m: 1 }}
        variant="outlined"
        inputProps={{ maxLength: 50 }}
      />
      <Button
        variant="contained"
        color="success"
        sx={{ minWidth: { xs: "100%", sm: "15%" }, height: "55px", m: 1 }}
        endIcon={<SaveIcon />}
        onClick={handleClick}
        disabled={!text.trim()}
      >
        Save Todo
      </Button>
    </Box>
  );
};

export default AddTodoComp;

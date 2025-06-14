import { useState, MouseEvent } from "react";
import { classNames } from "@/shared/lib";
import * as styles from "./LoginForm.module.scss";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import InputLabel from "@mui/material/InputLabel";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import FormControl from "@mui/material/FormControl";

interface LoginFormProps {
  className?: string
}

export const LoginForm = ({ className }: LoginFormProps) => {
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  const handleMouseUpPassword = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  return(
    <div className={classNames(styles.LoginForm, {}, [className])}>
      <form className={styles.form}>
        <TextField 
          label="Username" 
          variant="outlined" 
        />

       <FormControl variant="outlined">
         <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
         <OutlinedInput
           id="outlined-adornment-password"
           type={showPassword ? 'text' : 'password'}
           endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label={
                    showPassword ? 'hide the password' : 'display the password'
                  }
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  onMouseUp={handleMouseUpPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          />
        </FormControl>

        <Button 
          variant="outlined" 
          className={styles.button}>
          Log in
        </Button>
      </form>
    </div>
  )
}

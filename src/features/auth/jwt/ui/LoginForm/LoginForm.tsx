import { useState, MouseEvent, useEffect } from "react";
import { classNames } from "@/shared/lib";
import * as styles from "./LoginForm.module.scss";
import TextField from "@mui/material/TextField";
import { Button } from "@/shared/ui";
import InputLabel from "@mui/material/InputLabel";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import FormControl from "@mui/material/FormControl";
import { RandomUser, User } from "@/entities/User";
import { useGetRandomUserQuery } from "@/entities/User";
import { useLoginMutation } from "../../model/services/jwtAuthApi";
import { JWTLoginData } from "../../model/types/JWTAuthSchema";
import { setAuthData } from "../../model/slice/jwtAuthSlice";
import { useAppDispatch } from "@/shared/hooks";

interface LoginFormProps {
  className?: string;
}

export const LoginForm = ({ className }: LoginFormProps) => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [randomUser, setRandomUser] = useState<RandomUser>();
  const { data, error, isFetching } = useGetRandomUserQuery(undefined,{
    refetchOnMountOrArgChange: true
  })
  const [login, {data: authData, isSuccess: isLoginSuccess, isError, error: loginError}] = useLoginMutation();

  const dispatch = useAppDispatch();

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
  };

  const handleMouseUpPassword = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
  };
  
  const loginHandler = () => {
    login(randomUser as JWTLoginData);
  }

  useEffect(() => {
    if (authData?.jwtToken) {
      dispatch(setAuthData(authData));
    }
  }, [isLoginSuccess]);

  useEffect(() => {
    setRandomUser(data);
  }, [data]);

  useEffect(() => {
    setRandomUser({ username: "", password: ""} as RandomUser);
  }, []);

  if (error) return <div>Error</div>

  return(
    <div className={classNames(styles.LoginForm, {}, [className])}>
      <form className={styles.form}>
        <TextField 
          label="Username" 
          variant="outlined" 
          key={randomUser?.username}
          disabled={isFetching}
          defaultValue={randomUser?.username}
          className={String(isFetching && styles.disabledInput)}
        />

        <FormControl variant="outlined">
          <InputLabel 
            className={String(isFetching && styles.disabledLabel)}
            htmlFor="outlined-adornment-password">
            Password
          </InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            className={String(isFetching && styles.disabledInput)}
            key={randomUser?.password}
            defaultValue={randomUser?.password}
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
            disabled={isFetching}
         />
        </FormControl>

        <Button 
          isLoading={isFetching}
          loadingText={"Loading data..."}
          className={styles.button}
          onClick={loginHandler}>
          Log in
        </Button>
      </form>
    </div>
  )
}

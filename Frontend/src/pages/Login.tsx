import {
  Button,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  Image,
  FormErrorMessage,
} from "@chakra-ui/react";
import Logo from "../assets/Marketeers-Logo-Blue.png";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import actLogin from "@/store/auth/act/actLogin";
import { useForm } from "react-hook-form";

interface UserCredentials {
  username: string;
  password: string;
}

export default function Login() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { loading, accessToken } = useAppSelector((state) => state.auth);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserCredentials>();

  useEffect(() => {
    if (accessToken) {
      navigate("/home");
    }
  }, [accessToken]);

  const onSubmit = (data: UserCredentials) => {
    dispatch(actLogin(data));
  };

  return (
    <Stack
      spacing={4}
      w="full"
      maxW="md"
      align="center"
      as="form"
      onSubmit={handleSubmit(onSubmit)}
    >
      <Image
        boxSize="80px"
        src={Logo}
        alt="Logo"
        objectFit="contain"
        width={80}
        height={40}
      />
      <Heading fontSize="2xl">Sign in to your account</Heading>

      <FormControl isInvalid={!!errors.username}>
        <FormLabel>UserName</FormLabel>
        <Input
          type="text"
          placeholder="Enter your username"
          {...register("username", {
            required: "username is required",
            minLength: { value: 5, message: "Minimum 5 characters" },
          })}
        />
        <FormErrorMessage>{errors.username?.message}</FormErrorMessage>
      </FormControl>

      <FormControl isInvalid={!!errors.password}>
        <FormLabel>Password</FormLabel>
        <Input
          type="password"
          placeholder="Enter your password"
          {...register("password", {
            required: "Password is required",
            minLength: { value: 6, message: "Minimum 6 characters" },
          })}
        />
        <FormErrorMessage>{errors.password?.message}</FormErrorMessage>
      </FormControl>

      <Stack spacing={6} w="full">
        <Button
          type="submit"
          colorScheme="blue"
          variant="solid"
          isLoading={loading === "pending"}
        >
          Sign in
        </Button>
      </Stack>
    </Stack>
  );
}

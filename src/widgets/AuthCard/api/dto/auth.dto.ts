export interface LoginFormDTO {
  email: string;
  password: string;
}

export interface LoginResponseDTO {
  token: string;
}

export type RegistrationFromDTO = LoginFormDTO & { nickname: string };
export type RegistrationResponseDTO = LoginResponseDTO;

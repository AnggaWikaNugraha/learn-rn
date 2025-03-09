export type ScreenParamsList = {
    Home: { itemId?: number}; // Tidak butuh parameter
    Details: { itemId?: number; otherParam?: string }; // Perlu parameter
    Login: undefined; // Tidak butuh parameter
    Register: undefined; // Tidak butuh parameter
    Profile: undefined;
    Settings: undefined;
    SignIn: undefined;
    SignUp: undefined;
  };
  
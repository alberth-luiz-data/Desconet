import { useAuthRequest } from 'expo-auth-session/providers/google'; // ResponseType não será mais usado diretamente se estiver causando o erro

export function useGoogleAuthRequest() {
  return useAuthRequest({
    clientId: '799067158158-832o17e5iv5bu2424ndgeeteandihhda.apps.googleusercontent.com',
    scopes: ['openid', 'profile', 'email'],
    responseType: 'id_token',
  });
}
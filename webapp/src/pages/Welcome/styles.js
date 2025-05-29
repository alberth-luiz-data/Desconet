import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  logoSection: {
    flex: 2,
    width: '100%',
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  logoImage: {
    width: '100%',
    height: 500,
    resizeMode: 'contain',
  },
  logoText: {
    color: '#2563eb',
    fontSize: 24,
    fontWeight: 'normal',
  },
  loginSection: {
    flex: 2,
    width: '100%',
    backgroundColor: '#3b82f6',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 16,
    gap: 12,
  },
  loginTitle: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 30,
  },
  loginSubtitle: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 12,
  },
  emailButton: {
    backgroundColor: '#ffffff',
    width: '75%',
    borderRadius: 12,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    height: 40,
    gap: 12,
  },
  registerButton: {
    backgroundColor: '#ffffff',
    width: '75%',
    borderRadius: 12,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    height: 40,
    gap: 12,
  },
  googleButton: {
    backgroundColor: '#3b82f6',
    width: '66.666667%',
    borderRadius: 12,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ffffff',
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 12,
    height: 40,
  },
  emailIconContainer: {
    height: 32,
    width: 32,
    backgroundColor: '#3b82f6',
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  googleIconContainer: {
    height: 32,
    width: 32,
    backgroundColor: '#ffffff',
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emailButtonText: {
    color: '#000000',
    fontSize: 16,
  },
  registerButtonText: {
    color: '#000000',
    fontSize: 16,
  },
  googleButtonText: {
    color: '#ffffff',
    fontSize: 16,
  },
});

import { loginService, registerServices } from '../../services/auth';

const handleRegister = async (req, res) => {
  try {
    const { message, status } = await registerServices(req.body);
    res.status(status).json({ message, status });
  } catch (err) {
    res.status(500).json({ message: err.toString() });
  }
};

const handleLogin = async (req, res) => {
  try {
    const { user, message, status } = await loginService(req.body);
    res.status(status).json({ message, status, user });
  } catch (err) {
    res.status(404).json({ message: err.toString() });
  }
};

const authCtrl = { handleLogin, handleRegister };

export default authCtrl;

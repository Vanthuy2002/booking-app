import { loginService } from '../../services/auth';

const handleLogin = async (req, res) => {
  try {
    const { user, message, status } = await loginService(req.body);
    res.status(status).json({ message, status, user });
  } catch (err) {
    res.status(404).json({ message: err.toString() });
  }
};

const authCtrl = { handleLogin };

export default authCtrl;

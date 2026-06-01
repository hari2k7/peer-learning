export const forgotPassword = async (req, res) => {
  const { email } = req.body;
  res.json({ message: `Password reset link sent to ${email}` });
};

export const resetPassword = async (req, res) => {
  const { token } = req.params;
  const { newPassword } = req.body;
  res.json({ message: `Password reset successful for token ${token}` });
};

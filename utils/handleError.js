const handleHttpError = (res, error) => {
  console.log('Error', error);
  res.status(500).json({ error: 'ERROR' });
};

const handleErrorResponse = (res, message = 'Algo ocurrio', code = 401) => {
  console.log('Error', message);
  res.status(code).json({ error: message });
};

export { handleHttpError, handleErrorResponse };

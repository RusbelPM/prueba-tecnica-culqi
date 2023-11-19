import axios from 'axios';

// Creamos una instancia de Axios con la URL base de la API de Culqi
const culqiApi = axios.create({
  baseURL: 'https://fepruebatecnicaculqi-backend-production.up.railway.app',
  headers: {
    'Content-Type': 'application/json', // Establecemos el tipo de contenido como JSON
  },
});

// Interceptamos cada solicitud para actualizar dinámicamente el encabezado de autorización
culqiApi.interceptors.request.use((config) => {
  // Obtenemos el token almacenado en localStorage
  const token = localStorage.getItem('token');
  
  // Si hay un token, lo agregamos al encabezado de autorización
  if (token) {
    config.headers['Authorization'] = `Bearer ${token}`;
  }

  // Devolvemos la configuración actualizada
  return config;
});

export default culqiApi;

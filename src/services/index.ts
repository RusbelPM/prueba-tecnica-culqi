import { type User, type Pagination } from '@/types/index';
import culqiApi from './axios';

class Service {

  /**
   * Valida el acceso del usuario.
   * @param body - Datos del usuario para la autenticación.
   * @returns Datos de autenticación.
   */
  async validateAccess(body: User) {
    try {
      const { data } = await culqiApi.post("/auth/login", body);
      return data;
    } catch (error: any) {
      if (error.response) {
        // El servidor respondió con un código de estado diferente de 2xx
        return error.response.data;
      } else if (error.request) {
        // La solicitud fue realizada, pero no se recibió respuesta
        return "No se recibió respuesta del servidor";
      } else {
        // Ocurrió un error antes de realizar la solicitud
        return "Error al realizar la solicitud";
      }
    }
  }

  /**
   * Obtiene la lista de empleados con paginación.
   * @param params - Parámetros de paginación.
   * @returns Datos de empleados paginados.
   */
  async getEmployees(params: Pagination) {
    try {
      const { data } = await culqiApi.get(`/empleados?limit=${params.limit}&page=${params.page}`);
      return data;
    } catch (error: any) {
      return error.response.data;
    }
  }
}

export default new Service();

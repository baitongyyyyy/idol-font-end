import { httpClient } from './httpClient';
// import helper from './helper';



export const getProvince = async () => {
  return await httpClient.get(`v2/customer/province`);
}

  

  /* ========================================= */

  
  
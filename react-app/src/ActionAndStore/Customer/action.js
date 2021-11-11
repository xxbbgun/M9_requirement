import { createAction } from '@reduxjs/toolkit';

export const getCustomer = createAction('GET_CUSTOMER');
export const fetchCustomer = createAction('FETCH_Customer');
export const removeCustomer = createAction('REMOVE_CUSTOMER');

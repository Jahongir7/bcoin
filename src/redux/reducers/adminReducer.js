import {
  ADMIN_ERROR,
  ADMIN_GET_COMPANY,
  ADMIN_ADD_COMPANY,
  ADMIN_GET_STORY,
  ADMIN_DELETE_COMPANY,
  ADMIN_ADD_STORY,
  ADMIN_GET_COMPANY_BY_ID,
  ADMIN_GET_NEWS_BY_ID,
  ADMIN_GET_NEWS,
  ADMIN_ADD_PRICES,
  ADMIN_GET_PRICES,
  ADMIN_GET_PRICE_BY_ID,
  ADMIN_ADD_NEWS,
  ADMIN_DELETE_NEWS_BY_ID,
  ADMIN_DELETE_PRICES_BY_ID
} from '../types';

const initialState = {
  loading: true,
  companies: [],
  company: {},
  notes: [],
  message: '',
  error: null,
  prices: [],
  news: [],
  post: {},
  price: {}
};

const adminReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case ADMIN_GET_COMPANY:
      return {
        loading: false,
        companies: payload
      };
    case ADMIN_GET_NEWS:
      return {
        loading: false,
        news: payload
      };
    case ADMIN_GET_PRICES:
      return {
        loading: false,
        prices: payload
      };
    case ADMIN_GET_PRICE_BY_ID:
      return {
        loading: false,
        price: payload
      };
    case ADMIN_GET_COMPANY_BY_ID:
      return {
        ...state,
        loading: false,
        company: payload
      };
    case ADMIN_GET_NEWS_BY_ID:
      return {
        ...state,
        loading: false,
        post: payload
      };
    case ADMIN_GET_STORY:
      return {
        ...state,
        loading: false,
        notes: payload
      };

    case ADMIN_ADD_COMPANY:
      return {
        ...state,
        loading: false,
        message: payload.data.message
      };
    case ADMIN_ADD_NEWS:
      return {
        ...state,
        loading: false,
        message: payload.data.message
      };
    case ADMIN_ADD_PRICES:
      return {
        ...state,
        loading: false,
        message: payload.data.message
      };
    case ADMIN_ADD_STORY:
      return {
        ...state,
        loading: false,
        message: payload.message
      };

    case ADMIN_DELETE_COMPANY:
      return {
        ...state,
        loading: false,
        message: payload.message
      };
    case ADMIN_DELETE_NEWS_BY_ID:
      return {
        ...state,
        loading: false,
        message: payload.message
      };
    case ADMIN_DELETE_PRICES_BY_ID:
      return {
        ...state,
        loading: false,
        message: payload.message
      };
    case ADMIN_ERROR:
      return {
        ...state,
        loading: false,
        error: payload
      };
    default:
      return state;
  }
};

export default adminReducer;

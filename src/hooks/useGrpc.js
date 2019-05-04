import { useReducer, useRef, useEffect } from 'react';

export const useGrpc = initialData => {
  const [state, dispatch] = useReducer(requestReducer, {
    isLoading: true,
    isError: false,
    data: initialData,
  });
  const mounted = useRef(true);

  const makeRequest = async (request, variables) => {
    dispatch({ type: 'REQUEST_START' });

    try {
      const response = await request(variables);
      if (!mounted.current) return;
      dispatch({ type: 'REQUEST_SUCCESS', payload: response.toObject() });
    } catch (error) {
      if (!mounted.current) return;
      dispatch({ type: 'REQUEST_ERROR', payload: error });
    }
  };

  useEffect(() => {
    return () => (mounted.current = false);
  }, []);

  return [state.data, state.isError, state.isLoading, makeRequest];
};

const requestReducer = (state, action) => {
  switch (action.type) {
    case 'REQUEST_START':
      return {
        ...state,
        isLoading: true,
      };
    case 'REQUEST_SUCCESS':
      return {
        ...state,
        isLoading: false,
        isError: false,
        data: action.payload,
      };
    case 'REQUEST_ERROR':
      return {
        ...state,
        isLoading: false,
        isError: action.payload,
      };
    default:
      return state;
  }
};

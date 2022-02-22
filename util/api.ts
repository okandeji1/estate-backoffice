import axios from "axios";

export const loginApi = async (payload: any): Promise<any> => {
  // @ts-ignore
  const { data: responseData } = await axios({
    url: "/api/v1/auth/login",
    method: "POST",
    data: payload.body,
    meta: {
      success: {
        showNotification: true,
      },
      error: {
        showNotification: true,
      },
      // enableLoading: true,
    },
  });

  return responseData;
};

export const registerUserApi = async (payload: any): Promise<any> => {
  // @ts-ignore
  const { data: responseData } = await axios({
    url: "/api/v1/auth/register",
    method: "POST",
    data: payload.body,
    meta: {
      success: {
        showNotification: true,
      },
      error: {
        showNotification: true,
      },
      enableLoading: true,
      callbacks: payload.callbacks,
    },
  });

  return responseData;
};

export const getUsersApi = async (payload: any): Promise<any> => {
  let url = "/api/v1/users/get-users?";
  for (const [key, value] of Object.entries(payload.query)) {
    url += `&${key}=${value}`;
  }
  const { data: responseData } = await axios({
    url,
    method: "GET",
  });

  return responseData;
};

export const searchUserApi = async (payload: any): Promise<any> => {
  let url = "/api/v1/users/search?";
  for (const [key, value] of Object.entries(payload.query)) {
    url += `&${key}=${value}`;
  }
  // @ts-ignore
  const { data: responseData } = await axios({
    url: url,
    method: "GET",
    meta: {
      error: {
        showNotification: true,
      },
    },
  });

  return responseData;
};

export const getUserApi = async (): Promise<any> => {
  try {
    // @ts-ignore
    const { data: responseData } = await axios({
      url: "/api/v1/users/me",
      method: "GET",
      meta: {
        refresh: true,
      },
    });

    return responseData;
  } catch (error) {}
};

// Property
export const getPropertiesApi = async (payload: any): Promise<any> => {
  let url = "/api/v1/properties/get-properties?";
  for (const [key, value] of Object.entries(payload.query)) {
    url += `&${key}=${value}`;
  }
  const { data: responseData } = await axios({
    url,
    method: "GET",
  });

  return responseData;
};

// Packages
export const getPackagesApi = async (payload: any): Promise<any> => {
  let url = "/api/v1/packages/get-packages?";
  for (const [key, value] of Object.entries(payload.query)) {
    url += `&${key}=${value}`;
  }
  const { data: responseData } = await axios({
    url,
    method: "GET",
  });

  return responseData;
};

// Subscription
export const getSubscriptionsApi = async (payload: any): Promise<any> => {
  let url = "/api/v1/subscriptions/get-subscriptions?";
  for (const [key, value] of Object.entries(payload.query)) {
    url += `&${key}=${value}`;
  }
  const { data: responseData } = await axios({
    url,
    method: "GET",
  });

  return responseData;
};

// Transaction
export const getTransactionsApi = async (payload: any): Promise<any> => {
  let url = "/api/v1/transactions/get-transaction?";
  for (const [key, value] of Object.entries(payload.query)) {
    url += `&${key}=${value}`;
  }
  const { data: responseData } = await axios({
    url,
    method: "GET",
  });

  return responseData;
};

// Property
export const getCollectorsApi = async (payload: any): Promise<any> => {
  let url = "/api/v1/properties/get-collectors?";
  for (const [key, value] of Object.entries(payload.query)) {
    url += `&${key}=${value}`;
  }
  const { data: responseData } = await axios({
    url,
    method: "GET",
  });

  return responseData;
};

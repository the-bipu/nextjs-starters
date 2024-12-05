"use client";
import React, { createContext, useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);

  return (
    <UserContext.Provider
      value={{
        loading,
        setLoading,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

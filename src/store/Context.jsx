import { createContext, useState } from "react";
import { auth, db } from "../config/Firebase"; // Import Firestore instance

export const FirebaseContext = createContext(null);
export const AuthContext = createContext(null);

const Context = ({ children }) => {
  const [user, setUser] = useState(null);

  return (
    <FirebaseContext.Provider value={{ auth, db }}>
      <AuthContext.Provider value={{ user, setUser }}>
        {children}
      </AuthContext.Provider>
    </FirebaseContext.Provider>
  );
};

export default Context;

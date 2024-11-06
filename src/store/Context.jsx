import { createContext, useState } from "react";
import { auth, firestore } from "../config/Firebase"; // Import Firestore instance

export const FirebaseContext = createContext(null);
export const AuthContext = createContext(null);

const Context = ({ children }) => {
  const [user, setUser] = useState(null);

  return (
    <FirebaseContext.Provider value={{ auth, firestore }}>
      {" "}
      {/* Include firestore */}
      <AuthContext.Provider value={{ user, setUser }}>
        {children}
      </AuthContext.Provider>
    </FirebaseContext.Provider>
  );
};

export default Context;

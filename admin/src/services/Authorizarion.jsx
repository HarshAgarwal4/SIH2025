import { useContext, useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { AppContext } from "../context/GlobalContext.jsx";
import Loading from "../pages/LoadingPage.jsx";

const AuthorizationRoute = ({ children, roles }) => {
  const { user, loading } = useContext(AppContext);
  const [role, setRole] = useState([]);

  useEffect(() => {
    if (user?.role) {
      setRole(Array.isArray(user.role) ? user.role : [user.role]);
    }
  }, [user]);

  if (loading) {
    return <Loading />;
  }

  if (!user) {
    return <Navigate to="/login" />;
  }

  const hasPermission = user.role.some(r => roles.includes(r));
  console.log("User roles:", role, "Allowed roles:", roles, "Has permission:", hasPermission);

  if (hasPermission) {
    return children;
  }

  return <Navigate to="/unauthorized" />;
};

export default AuthorizationRoute;

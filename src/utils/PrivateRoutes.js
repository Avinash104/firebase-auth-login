import { Navigate, Outlet } from "react-router-dom"

const PrivateRoutes = ({ accessToken }) => {
  return accessToken ? <Outlet /> : <Navigate to="/login" />
}

export default PrivateRoutes

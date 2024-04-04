import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuthContext } from "../context/AuthContext";
import { toastWarnNotify } from "../helpers/toastNotify";

const PrivateRouter = () => {
  const { currentUser } = useAuthContext();
  if (currentUser) {
    return <Outlet />;
  } else {
    toastWarnNotify("You need to login first!");
    return <Navigate to="/login" replace />;
    //* replace propu geçmişe yeni bir girdi eklemez. Yani -1 dediğinizde logine yönlendirilmeden önceki sayfaya geri dönersiniz. Örneğin; eğer detaile gitmek istediğinizde kullanıcıyı loigne yönlendriyorsunuz, login olduktan sonra navigate(-1) kullanarak tekrar detaile gitmesini istiyorsanız replacei kullanmamamız gerekiyor veya replace={false} olarak belirtmenilisiniz.
    // return <Navigate to="/login" />;
  }
};

export default PrivateRouter;

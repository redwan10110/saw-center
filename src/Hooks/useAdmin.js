import { useEffect, useState } from "react";
const useAdmin = (user) => {
  const [admin, setAdmin] = useState(false);
  const[adminLoading, setAdminLoding] = useState(true);

  useEffect(() => {
    const email = user?.email;
    if (email) {
      fetch(`https://saw-center.herokuapp.com/admin/${email}`, {
        method: "GET",
        headers: {
            "Content-type": "application/json; charset=UTF-8",
            authorization: `Bearer ${localStorage.getItem("accessToken")}`
          },
        
      })
        .then((response) => response.json())
        .then((data) => {
          setAdmin(data.admin)
          setAdminLoding(false);
        });
    }
  }, [user]);
  return [admin,adminLoading];
};

export default useAdmin;

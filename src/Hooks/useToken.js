import { useState, useEffect } from "react";
const useToken = (user) => {
  const [token, SetToken] = useState("");

  useEffect(() => {
    const email = user?.user?.email;
    const currentUser = { email: email };
    if (email) {
      fetch(`https://saw-center.herokuapp.com/user/${email}`, {
        method: "PUT",
        body: JSON.stringify(currentUser),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            const accessToken = data.token;
            localStorage.setItem('accessToken', accessToken);
            SetToken(accessToken);
        });
    }
  }, [user]);

  return [token];
};

export default useToken;

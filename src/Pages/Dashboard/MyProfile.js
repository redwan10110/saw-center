import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { toast } from "react-toastify";
import auth from "../../Firebase/firebase.init";
import Loading from "../Shared/Loading";

const MyProfile = () => {
  const [user, loading, error] = useAuthState(auth);
  if (loading) {
    return <Loading></Loading>;
  }
  const handleProfile = async (e) => {
    e.preventDefault();
    const profile = {
      phone: e.target.phone.value,
      address: e.target.address.value,
      education: e.target.education.value,
      linkedin: e.target.linkedin.value,
    };
    console.log(profile);

    await fetch(`https://saw-center.herokuapp.com/userUpdate/${user.email}`, {
      method: "PUT",
      body: JSON.stringify(profile),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount>0) {
          toast.success(`Profile Updated`);
        } else {
          toast.error(`Not Updated`);
        }
      });
  };
  return (
    <div>
      <h1 className="text-5xl text-secondary my-5 text-center">My Profile</h1>
      <div>
        <form
          onSubmit={handleProfile}
          className="grid grid-cols-1 gap-3 justify-items-center mt-3"
        >
          <input
            type="text"
            name="name"
            disabled
            value={user.displayName}
            className="input input-bordered w-full max-w-xs"
          />
          <input
            type="email"
            name="email"
            disabled
            value={user.email}
            className="input input-bordered w-full max-w-xs"
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            className="input input-bordered w-full max-w-xs"
          />
          <input
            type="text"
            name="linkedin"
            placeholder="Your Linkedin Profile"
            className="input input-bordered w-full max-w-xs"
          />
          <input
            type="text"
            name="education"
            placeholder="Your Degree"
            className="input input-bordered w-full max-w-xs"
          />
          <input
            type="text"
            name="address"
            placeholder="Address"
            className="input input-bordered w-full max-w-xs"
          />

          <input
            type="submit"
            value="Update Profile"
            className="btn btn-primary w-full max-w-xs text-white"
          />
        </form>
      </div>
    </div>
  );
};

export default MyProfile;

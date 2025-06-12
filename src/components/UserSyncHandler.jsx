import { useAuth, useUser } from "@clerk/clerk-react";
import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../context/AppContext";
import axios from "axios";
import toast from "react-hot-toast";

function UserSyncHandler() {
  const { isLoaded, isSignedIn, getToken } = useAuth();
  const { user } = useUser();
  const [synced, setSynced] = useState(false);
  const { backendUrl } = useContext(AppContext);

  useEffect(() => {
    const saveUser = async () => {
      if (!isLoaded || !isSignedIn || synced) {
        return;
      }

      try {
        const token = await getToken();

        const userData = {
          clerkId: user.id,
          email: user.primaryEmailAddress.emailAddress,
          firstName: user.firstName,
          lastName: user.lastName,
        };

        await axios.post(backendUrl + "/users", userData, {
          headers: { Authorization: `Bearer ${token}` },
        });
        setSynced(true);
      } catch (error) {
        console.error(error);
        toast.error("User synchronization fail! Try again!");
      }
    };
    saveUser();
  }, [isLoaded, isSignedIn, getToken, user, synced]);
  return null;
}

export default UserSyncHandler;

import React, { createContext, useContext } from 'react';

const profileContext = createContext();

const { Provider } = profileContext;

const ProfileProvider = ({ value = [], ...props }) => {
  const [profile, setProfile] = useState({
    username: '',
    savedLocations: [],
  });

  return <Provider value={[profile, setProfile]} {...props} />;
};

const useProfileContext = () => {
  return useContext(profileContext);
};

export { ProfileProvider, useProfileContext };

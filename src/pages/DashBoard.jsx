import useAuth from "../hooks/useAuth"

export default function DashBoard() {

  const {userProfile} = useAuth();

  return (
    <div>
      Current User : {`${userProfile?.last_name} ${userProfile.first_name}`}
    </div>
  )
}
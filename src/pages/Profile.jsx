import { useRef } from 'react';
import EditableAvatar from '../components/EditableAvatar';
import ProfileForm from '../components/ProfileForm';
import useAuth from '../hooks/useAuth';
import { useUpdateAvatarMutation } from '../services/AuthService';
import { useUploadMutation } from '../services/DocumentService';

export default function Profile() {
  const avatarInp = useRef();
  const [updateAvatar, { isLoading: isUpdatingAvatar }] = useUpdateAvatarMutation();
  const [uploadFile, { isLoading: isUploadFile }] = useUploadMutation();
  const { userProfile } = useAuth();
  const onChangeAvatar = async (newAvatar) => {
    const bodyFormData = new FormData();
    bodyFormData.append('file', newAvatar);
    try {
      const { data } = await uploadFile(bodyFormData).unwrap();
      await updateAvatar(data).unwrap();
      alert('Change Avatar OK');
      avatarInp.current.value = '';
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div>
      <EditableAvatar
        src={userProfile.avatar_url}
        onChange={onChangeAvatar}
        innerRef={avatarInp}
        isUploading={isUpdatingAvatar || isUploadFile}
      />
      <ProfileForm />
    </div>
  );
}

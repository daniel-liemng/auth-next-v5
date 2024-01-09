import { auth, signOut } from '@/auth';

const SettingsPage = async () => {
  const session = await auth();

  console.log(session);

  return (
    <div>
      SettingsPage
      <form
        action={async () => {
          'use server';

          await signOut();
        }}
      >
        <button type='submit'>Sign Out</button>
      </form>
    </div>
  );
};

export default SettingsPage;

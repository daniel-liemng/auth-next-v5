'use client';

import { signIn } from 'next-auth/react';

import { FcGoogle } from 'react-icons/fc';
import { FaGithub } from 'react-icons/fa';
import { Button } from '../ui/button';
import { DEFAULT_LOGIN_REDIRECT } from '@/routes';

const Social = () => {
  const onClick = (provider: 'github' | 'google') => {
    signIn(provider, {
      callbackUrl: DEFAULT_LOGIN_REDIRECT,
    });
  };

  return (
    <div className='w-full flex items-center gap-x-2'>
      <Button
        onClick={() => onClick('google')}
        className='w-full'
        size='lg'
        variant='outline'
      >
        <FcGoogle className='w-5 h-5' />
      </Button>
      <Button
        onClick={() => onClick('github')}
        className='w-full'
        size='lg'
        variant='outline'
      >
        <FaGithub className='w-5 h-5' />
      </Button>
    </div>
  );
};

export default Social;

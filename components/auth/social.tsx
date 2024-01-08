'use client';

import { FcGoogle } from 'react-icons/fc';
import { FaGithub } from 'react-icons/fa';
import { Button } from '../ui/button';

const Social = () => {
  return (
    <div className='w-full flex items-center gap-x-2'>
      <Button onClick={() => {}} className='w-full' size='lg' variant='outline'>
        <FcGoogle className='w-5 h-5' />
      </Button>
      <Button onClick={() => {}} className='w-full' size='lg' variant='outline'>
        <FaGithub className='w-5 h-5' />
      </Button>
    </div>
  );
};

export default Social;

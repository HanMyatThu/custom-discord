import React, { Fragment } from 'react'
import { InitialProfile } from '@/lib/initial-profile'
import { redirect } from 'next/navigation';
import { db } from '@/lib/db';
import { InitialModal } from '@/components/modals/initial-modal';

const SetUpPage = async () => {

  const profile = await InitialProfile();

  const server = await db.server.findFirst({
    where: {
      members: {
        some: {
          profileId: profile.id
        }
      }
    }
  })

  if (server) {
    return redirect(`/servers/${server.id}`);
  }
  
  return (
    <InitialModal />  
  )
}

export default SetUpPage
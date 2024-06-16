import React from 'react'
import { InitialProfile } from '@/lib/initial-profile'
import { redirect } from 'next/navigation';
import { db } from '@/lib/db';

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
    <main>
      Create a Server
    </main>
  )
}

export default SetUpPage
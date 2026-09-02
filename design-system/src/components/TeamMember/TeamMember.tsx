import React from 'react';

export interface TeamMemberProps {
  photo: { src: string; alt: string };
  name: React.ReactNode;
  role: React.ReactNode;
  bio: React.ReactNode;
}

/** Portrait card for a team grid: 3:4 photo, serif name, uppercase mono role, short bio. */
export function TeamMember({ photo, name, role, bio }: TeamMemberProps) {
  return (
    <div>
      <div className="team-photo">
        <img src={photo.src} alt={photo.alt} />
      </div>
      <div className="team-name">{name}</div>
      <div className="team-role">{role}</div>
      <p className="body-md team-bio">{bio}</p>
    </div>
  );
}

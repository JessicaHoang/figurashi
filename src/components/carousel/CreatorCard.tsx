// components/Carousel/CreatorCard.tsx

interface Creator {
  id: string;
  name: string;
  bio: string;
  avatar: string;
  backgroundColor?: string;
  borderColor?: string;
}

interface CreatorCardProps {
  creator: Creator;
}

export function CreatorCard({ creator }: CreatorCardProps) {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: creator.backgroundColor || '#fffbe6',
        border: `2px solid ${creator.borderColor || '#f5c518'}`,
        borderRadius: '16px',
        padding: '24px',
        width: '850px',
        height: '408px',
        boxSizing: 'border-box',
      }}
    >
      <div style={{ flex: 1, paddingRight: '24px' }}>
        <h2 style={{ fontSize: '1.5rem', marginBottom: '12px' }}>{creator.name}</h2>
        <p style={{ fontSize: '1rem', color: '#555' }}>{creator.bio}</p>
      </div>
      <img
        src={creator.avatar}
        alt={creator.name}
        style={{
          width: '354px',
          height: '354px',
          objectFit: 'cover',
          borderRadius: '12px',
        }}
      />
    </div>
  );
}
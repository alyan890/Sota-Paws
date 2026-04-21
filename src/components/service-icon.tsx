type ServiceIconProps = {
  serviceName: string;
  className?: string;
};

function BathTubIcon({ className = 'h-6 w-6' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className}>
      <path d="M3 12h18v2H3zm2 2h14l-1.4 3H6.4zM8 8a2 2 0 1 1 4 0" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function GroomIcon({ className = 'h-6 w-6' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className}>
      <path d="M5 6l6 6m0-6L5 12m8-4l6 10m-2-11l-2 1m-2 1l-2 1" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ComfortIcon({ className = 'h-6 w-6' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className}>
      <path d="M12 21c-4.2-2.7-7-5.1-7-8.5A4.5 4.5 0 0 1 12 8a4.5 4.5 0 0 1 7 4.5c0 3.4-2.8 5.8-7 8.5z" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function CalmIcon({ className = 'h-6 w-6' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className}>
      <path d="M4 12h16M4 8h16M4 16h12" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function ServiceIcon({ serviceName, className = 'h-6 w-6' }: ServiceIconProps) {
  if (serviceName.includes('Signature Spa Bath')) {
    return <BathTubIcon className={className} />;
  }

  if (serviceName.includes('Full Groom')) {
    return <GroomIcon className={className} />;
  }

  if (serviceName.includes('Senior Comfort')) {
    return <ComfortIcon className={className} />;
  }

  return <CalmIcon className={className} />;
}

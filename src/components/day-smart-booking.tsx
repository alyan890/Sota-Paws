const DAYSMART_URL = 'https://book.daysmart.com/booking/service?DSID=DC-2323998';

export function DaySmartBooking() {
  return (
    <div className="rounded-[2.5rem] border border-[rgba(10,33,52,0.14)] bg-[rgba(255,255,255,0.86)] p-8 shadow-soft">
      <div className="h-[600px] w-full overflow-hidden rounded-[1.5rem] border border-[rgba(10,33,52,0.1)] bg-white">
        <iframe
          src={DAYSMART_URL}
          title="Sota Paws Dog Spa Online Booking"
          width="100%"
          height="600"
          frameBorder="0"
          className="h-full max-w-full w-full"
          style={{ border: 'none' }}
        />
      </div>
      <div className="mt-4 flex flex-col gap-2 text-sm text-[rgba(10,33,52,0.72)]">
        <p>Having trouble viewing the booking calendar?</p>
        <a
          href={DAYSMART_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="w-fit font-semibold text-ink underline underline-offset-4 hover:text-[rgba(10,33,52,0.70)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4"
        >
          Open the booking calendar in a new tab
        </a>
      </div>
    </div>
  );
}

export default DaySmartBooking;
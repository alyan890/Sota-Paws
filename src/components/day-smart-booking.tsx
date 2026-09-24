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
    </div>
  );
}

export default DaySmartBooking;
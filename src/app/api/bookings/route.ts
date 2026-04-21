import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const payload = Object.fromEntries(formData.entries());
    const dogPhoto = formData.get('dogPhoto');
    const dogPhotoName = dogPhoto instanceof File ? dogPhoto.name : null;

    console.log('Booking request received:', {
      ...payload,
      dogPhoto: dogPhotoName,
    });

    return NextResponse.json({
      success: true,
      message: 'Booking request received. Connect this route to your email service when ready.',
    });
  } catch (error) {
    console.error('Booking submission failed:', error);

    return NextResponse.json({ success: false, message: 'Could not process booking request.' }, { status: 500 });
  }
}
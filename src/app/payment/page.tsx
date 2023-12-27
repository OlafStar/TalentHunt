import Link from 'next/link';

export default function Payment({searchParams}: {params: any; searchParams: any}) {
    const isCanceled = searchParams.canceled;
    const isSuccess = searchParams.success;
    return (
        <main className="relative z-[2] container flex items-center justify-center h-[100vh]">
            {isCanceled ? (
                <div className="max-w-[600px] flex flex-col gap-8 items-center justify-center text-center">
                    <div className="font-bold text-5xl">{'Payment Canceled'}</div>
                    <div className="text-xl">
                        {
                            'Need Assistance? If there was a problem during the payment process or if you have any questions, please contact us. Our team is ready to assist you with any issues or inquiries.'
                        }
                    </div>
                    <Link href={'#'} className="font-medium text-xl">
                        {'Book a call'}
                    </Link>
                </div>
            ) : (
                isSuccess && (
                    <div className="max-w-[600px] flex flex-col gap-8 items-center justify-center text-center">
                        <div className="font-bold text-5xl">
                            {'Successful payment'}
                        </div>
                        <div className="text-xl">
                            {
                                'Welcome we are glad to be working together. You will now receive an email with a link inviting you to a dashboard where you can post a request and communicate with us.'
                            }
                        </div>
                    </div>
                )
            )}
        </main>
    );
}

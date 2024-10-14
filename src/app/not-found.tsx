import { Button } from "@/components/ui/button";
import Link from "next/link";

const ErrorPage = () => {
    return (
        <>
            <div className='flex items-center justify-center' style={{ textAlign: 'center', padding: '50px', height: "100vh" }}>
                <div>

                    <h1 className='text-xl mb-2 text-white' ><span className='font-bold' >404</span> - Page Not Found</h1>
                    <p className='mb-6 text-slate-600' >Sorry, the page you are looking for does not exist.</p>

                   <Button>
                    <Link href="/">Back to Home</Link>
                   </Button>

                </div>
            </div>
        </>
    )
}
export default ErrorPage;
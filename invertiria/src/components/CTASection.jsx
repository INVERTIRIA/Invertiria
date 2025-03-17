import { buttonVariants } from "@/components/ui/button"
import { Link } from 'react-router';

// CTA Section
function CTASection({title, paragraph, buttonText, buttonText2}) {
    return (
        <div className="bg-cyan-900">
            <div className="px-6 py-24 sm:px-6 sm:py-32 lg:px-8">
                <div className="mx-auto max-w-2xl text-center">
                    <h2 className="text-4xl font-semibold tracking-tight text-balance text-white sm:text-5xl">{title}</h2>
                    <p className="mx-auto mt-6 max-w-xl text-lg/8 text-pretty text-cyan-50">{paragraph}</p>
                    <div className="mt-10 flex items-center justify-center gap-x-6">
                        <Link className={buttonVariants({ variant: "secondary" })}>{buttonText}</Link>
                        <Link className={buttonVariants({ variant: "ghost_secondary" })}>{buttonText2} <span aria-hidden="true">→</span></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export { CTASection }

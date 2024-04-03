import { Container } from '@/components/Container'
import Image from 'next/image';
import sjogLogo from '@/images/logos/sjog.jpg';

const featuredTestimonial = {
    body: 'Anna Marie is the person you want to meet when you require HR support services. Anna Marie fosters a healthy work environment that attracts and inspires excellence in people. Anna Marie is not a custodian of the HR Policies but can implement the policies in a way that informs, and promotes feedback and real staff engagement which is very difficult to do. Anna Marie does this naturally, she has true integrity and her knowledge across the broad sector of HR is a real loss to our organisation but a major benefit to those who work with Anna Marie now and in the future.',
    author: {
        name: 'Natalie Sheils',
        handle: 'Operations Manager, St John of God Community Services',

    },
}
const testimonials = [
    [
        [
            {
                body: 'I have been more than happy with the quality of Anna Marie’s work. Anna Marie is an absolute professional, nothing phases her. In addition to having a very impressive HR knowledge-base, Anna Marie is pragmatic, cogent and very personally engaging, putting people at their ease, something which is invaluable when having potentially difficult conversations.',
                author: {
                    name: 'James Forbes',
                    handle: 'Director of Care, ChildVision, National Education Centre for Blind Children',
                    imageUrl:
                        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
                },
            },
            // More testimonials...
        ],
        [
            {
                body: 'Aut reprehenderit voluptatem eum asperiores beatae id. Iure molestiae ipsam ut officia rem nulla blanditiis.',
                author: {
                    name: 'Lindsay Walton',
                    handle: 'lindsaywalton',
                    imageUrl:
                        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
                },
            },
            // More testimonials...
        ],
    ],
    [
        [
            {
                body: 'Voluptas quos itaque ipsam in voluptatem est. Iste eos blanditiis repudiandae. Earum deserunt enim molestiae ipsum perferendis recusandae saepe corrupti.',
                author: {
                    name: 'Tom Cook',
                    handle: 'tomcook',
                    imageUrl:
                        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
                },
            },
            // More testimonials...
        ],
        [
            {
                body: 'Molestias ea earum quos nostrum doloremque sed. Quaerat quasi aut velit incidunt excepturi rerum voluptatem minus harum.',
                author: {
                    name: 'Leonard Krasner',
                    handle: 'leonardkrasner',
                    imageUrl:
                        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
                },
            },
            // More testimonials...
        ],
    ],
]

function classNames(...classes: any[]): string {
    return classes.filter(Boolean).join(' ')
}


export default function Testimonials() {
    return (
        <Container className="mt-16 sm:mt-32">
            <div className="relative isolate bg-white dark:bg-zinc-900  pb-32 pt-24 sm:pt-32">
                <div
                    className="absolute inset-x-0 top-1/2 -z-10 -translate-y-1/2 transform-gpu overflow-hidden opacity-30 blur-3xl"
                    aria-hidden="true"
                >
                    <div
                        className="ml-[max(50%,38rem)] aspect-[1313/771] w-[82.0625rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc]"
                        style={{
                            clipPath:
                                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                        }}
                    />
                </div>
                <div
                    className="absolute inset-x-0 top-0 -z-10 flex transform-gpu overflow-hidden pt-32 opacity-25 blur-3xl sm:pt-40 xl:justify-end"
                    aria-hidden="true"
                >
                    <div
                        className="ml-[-22rem] aspect-[1313/771] w-[82.0625rem] flex-none origin-top-right rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] xl:ml-0 xl:mr-[calc(50%-12rem)]"
                        style={{
                            clipPath:
                                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                        }}
                    />
                </div>
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto max-w-xl text-center">
                        <p className="mt-2 text-3xl dark:text-zinc-100 font-bold tracking-tight text-gray-900 sm:text-4xl">
                            Testimonials
                        </p>
                    </div>
                    <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 grid-rows-1 gap-8 text-sm leading-6 text-gray-900 sm:mt-20 sm:grid-cols-2 xl:mx-0 xl:max-w-none xl:grid-flow-col xl:grid-cols-4">
                        <figure className="rounded-2xl bg-white shadow-lg ring-1 ring-gray-900/5 sm:col-span-2 xl:col-start-2 xl:row-end-1">
                            <blockquote className="p-6 text-lg font-semibold leading-7 tracking-tight text-gray-900 sm:p-12 sm:text-xl sm:leading-8">
                                <p>{`“${featuredTestimonial.body}”`}</p>
                            </blockquote>
                            <figcaption className="flex flex-wrap items-center gap-x-4 gap-y-4 border-t border-gray-900/10 px-6 py-4 sm:flex-nowrap">
                                <Image className="h-10 w-auto flex-none" src={sjogLogo} alt="St John of God Logo" width={40} height={10} />
                                <div className="flex-auto">
                                    <div className="font-semibold">{featuredTestimonial.author.name}</div>
                                    <div className="text-gray-600">{`${featuredTestimonial.author.handle}`}</div>
                                </div>
                            </figcaption>
                        </figure>
                        {testimonials.map((columnGroup, columnGroupIdx) => (
                            <div key={columnGroupIdx} className="space-y-8 xl:contents xl:space-y-0">
                                {columnGroup.map((column, columnIdx) => (
                                    <div
                                        key={columnIdx}
                                        className={classNames(
                                            (columnGroupIdx === 0 && columnIdx === 0) ||
                                                (columnGroupIdx === testimonials.length - 1 && columnIdx === columnGroup.length - 1)
                                                ? 'xl:row-span-2'
                                                : 'xl:row-start-1',
                                            'space-y-8'
                                        )}
                                    >
                                        {column.map((testimonial) => (
                                            <figure
                                                key={testimonial.author.handle}
                                                className="rounded-2xl bg-white p-6 shadow-lg ring-1 ring-gray-900/5"
                                            >
                                                <blockquote className="text-gray-900">
                                                    <p>{`“${testimonial.body}”`}</p>
                                                </blockquote>
                                                <figcaption className="mt-6 flex items-center gap-x-4">
                                                    <Image className="h-10 w-10 rounded-full bg-gray-50" src={testimonial.author.imageUrl} alt="" width={40} height={40} />
                                                    <div>
                                                        <div className="font-semibold">{testimonial.author.name}</div>
                                                        <div className="text-gray-600">{`${testimonial.author.handle}`}</div>
                                                    </div>
                                                </figcaption>
                                            </figure>
                                        ))}
                                    </div>
                                ))}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </Container>
    )
}

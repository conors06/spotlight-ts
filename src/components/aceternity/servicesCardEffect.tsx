'use client'
import { cn } from '@/utils/cn'
import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'

export const HoverEffect = ({
    items,
    className,
}: {
    items: {
        title: string
        description: string
    }[]
    className?: string
}) => {
    let [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

    return (
        <div
            className={cn(
                'grid grid-cols-1 py-10  md:grid-cols-2  lg:grid-cols-3',
                className
            )}
        >
            {items.map((item, idx) => (
                <div
                    key={idx}
                    className="group relative  block h-full w-full p-2"
                    onMouseEnter={() => setHoveredIndex(idx)}
                    onMouseLeave={() => setHoveredIndex(null)}
                >
                    <AnimatePresence>
                        {hoveredIndex === idx && (
                            <motion.span
                                className="absolute inset-0 block h-full w-full rounded-3xl bg-fuchsia-200  dark:bg-slate-800/[0.8]"
                                layoutId="hoverBackground"
                                initial={{ opacity: 0 }}
                                animate={{
                                    opacity: 1,
                                    transition: { duration: 0.15 },
                                }}
                                exit={{
                                    opacity: 0,
                                    transition: { duration: 0.15, delay: 0.2 },
                                }}
                            />
                        )}
                    </AnimatePresence>
                    <Card>
                        <CardTitle>{item.title}</CardTitle>
                        <CardDescription>{item.description}</CardDescription>
                    </Card>
                </div>
            ))}
        </div>
    )
}

export const Card = ({
    className,
    children,
}: {
    className?: string
    children: React.ReactNode
}) => {
    return (
        <div
            className={cn(
                'relative z-20 h-full w-full overflow-hidden rounded-2xl border border-gray-900/10 bg-white p-4 group-hover:border-cv dark:border-cv/[0.2]',
                className
            )}
        >
            <div className="relative z-50">
                <div className="p-4">{children}</div>
            </div>
        </div>
    )
}
export const CardTitle = ({
    className,
    children,
}: {
    className?: string
    children: React.ReactNode
}) => {
    return (
        <h4
            className={cn(
                'mt-4 font-bold text-lg tracking-wide text-gray-900',
                className
            )}
        >
            {children}
        </h4>
    )
}
export const CardDescription = ({
    className,
    children,
}: {
    className?: string
    children: React.ReactNode
}) => {
    return (
        <span
            className={cn(
                'mt-8 text-sm leading-relaxed tracking-wide text-zinc-500',
                className
            )}
        >
            {children}
        </span>
    )
}

import { motion } from 'framer-motion'


export default function CircleLoader() {
    return (
        <div className='relative box-border w-20 h-20'>
            <motion.span className='block h-16 w-16 rounded-full absolute top-0 left-0 box-border border-8 border-t-[#238f4c] border-[#e9e9e9]'
                animate={{ rotate: 360 }}
                transition={{
                    loop: Infinity,
                    ease: 'linear',
                    duration: 1
                }}
            >

            </motion.span>
        </div>
    )
}
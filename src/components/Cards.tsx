import { motion } from 'framer-motion';
import { birthdayConfig } from '../data/birthdayConfig';

export function CharacterCard({
  character,
  message,
  selected,
  onSelect,
}: {
  character: keyof typeof birthdayConfig.characterMessages;
  message: string;
  selected: boolean;
  onSelect: () => void;
}) {
  const styles = {
    penguin: {
      face: 'from-[#f7f1ff] to-[#d8ecff]',
      body: 'bg-[#dfeaf9]',
      accent: 'bg-[#87a9d1]',
      label: 'Penguin',
    },
    teddy: {
      face: 'from-[#ffe3d8] to-[#ffd2c3]',
      body: 'bg-[#f3d5ba]',
      accent: 'bg-[#d88973]',
      label: 'Teddy',
    },
    bunny: {
      face: 'from-[#fff2d7] to-[#f5d9e4]',
      body: 'bg-[#f1d7ec]',
      accent: 'bg-[#d9a0c8]',
      label: 'Bunny',
    },
  } as const;

  const { face, body, accent, label } = styles[character];

  return (
    <motion.button
      type="button"
      whileHover={{ y: -6, scale: 1.01 }}
      whileTap={{ scale: 0.98 }}
      onClick={onSelect}
      className={`relative overflow-hidden rounded-[2rem] border p-4 text-left shadow-soft transition-all duration-300 ${
        selected ? 'border-[#f0bbbc] bg-white/80' : 'border-[#f5e8e7] bg-white/50'
      }`}
    >
      <div className={`relative flex h-52 items-center justify-center overflow-hidden rounded-[1.5rem] bg-gradient-to-br ${face}`}>
        <motion.div animate={{ y: [0, -8, 0] }} transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }} className="relative">
          <div className={`relative h-24 w-24 rounded-full ${body}`}>
            <div className="absolute -left-3 top-9 h-5 w-5 rounded-full bg-[#fff]" />
            <div className="absolute -right-3 top-9 h-5 w-5 rounded-full bg-[#fff]" />
            <div className="absolute left-1/2 top-14 h-3 w-3 -translate-x-1/2 rounded-full bg-[#3a2d32]" />
            <div className="absolute left-1/2 top-10 h-2 w-10 -translate-x-1/2 rounded-full bg-[#f4c7b4]" />
            <div className={`absolute -left-8 top-7 h-9 w-9 rounded-full ${accent}`} />
            <div className={`absolute -right-8 top-7 h-9 w-9 rounded-full ${accent}`} />
          </div>
        </motion.div>
      </div>
      <div className="mt-4 text-center">
        <h3 className="font-script text-4xl text-[#4a2f33]">{label}</h3>
        <p className="mt-2 text-sm leading-6 text-[#5f4d54]">{message}</p>
      </div>
    </motion.button>
  );
}

export function GiftBox({ opened }: { opened: boolean }) {
  return (
    <div className="relative mx-auto h-[220px] w-[240px] perspective-[900px]">
      <motion.div
        animate={opened ? { rotateX: 70, y: -10 } : { rotateX: 0, y: 0 }}
        transition={{ type: 'spring', stiffness: 100, damping: 12 }}
        className="absolute inset-x-0 bottom-0 mx-auto h-32 w-40 rounded-b-[1.5rem] border border-[#f3d6d0] bg-gradient-to-b from-[#f1d0c4] to-[#dc9c8c] shadow-[0_30px_35px_rgba(179,100,90,0.28)]"
      >
        <div className="absolute inset-x-0 top-0 h-3 bg-[#fef2f5]" />
        <div className="absolute left-1/2 top-0 h-full w-[6px] -translate-x-1/2 bg-[#fff5f4]" />
        <div className="absolute left-1/2 top-0 h-12 w-12 -translate-x-1/2 rounded-full border-4 border-[#fff7f8] bg-[#f5d9d7]" />
      </motion.div>

      <motion.div
        animate={opened ? { y: -44, rotate: -2 } : { y: 0, rotate: 0 }}
        transition={{ type: 'spring', stiffness: 85, damping: 12 }}
        className="absolute left-1/2 top-10 h-12 w-12 -translate-x-1/2 origin-bottom rounded-full border border-[#f8e3d9] bg-gradient-to-r from-[#ff8da4] to-[#ffd09a] shadow-[0_12px_20px_rgba(248,157,170,0.28)]"
      />

      <motion.div
        animate={opened ? { opacity: 1, y: -10 } : { opacity: 0, y: 14 }}
        transition={{ duration: 0.6 }}
        className="absolute inset-x-3 top-0 flex items-center justify-center gap-3"
      >
        {[...Array(7)].map((_, i) => (
          <span key={i} className="h-5 w-2 rounded-full bg-[#f7d66d]" style={{ transform: `rotate(${i * 24}deg)` }} />
        ))}
      </motion.div>

      <div className="absolute left-0 top-10 flex w-full justify-center gap-2">
        {[...Array(8)].map((_, i) => (
          <motion.span
            key={i}
            animate={opened ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 }}
            transition={{ delay: i * 0.04, duration: 0.4 }}
            className="h-3 w-3 rounded-full bg-[#fff4d8]"
            style={{ boxShadow: '0 0 14px rgba(255, 227, 148, 0.7)' }}
          />
        ))}
      </div>
    </div>
  );
}

export function MemoryGallery({ selectedMemory, onSelect }: { selectedMemory: number | null; onSelect: (index: number) => void }) {
  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
      {birthdayConfig.memoryCards.map((memory, index) => (
        <motion.button
          key={memory.caption}
          type="button"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          whileHover={{ y: -4, rotate: index % 2 === 0 ? -1.5 : 1.5 }}
          onClick={() => onSelect(index)}
          className={`group overflow-hidden rounded-[1.5rem] border border-[#f2d9d1] bg-white/60 p-2 shadow-[0_16px_30px_rgba(111,79,84,0.08)] ${selectedMemory === index ? 'ring-2 ring-[#f3c9bf]' : ''}`}
        >
          <div className="overflow-hidden rounded-[1.2rem]">
            <img src={memory.image} alt={memory.caption} className="h-52 w-full object-cover transition-transform duration-400 group-hover:scale-105" onError={(e) => {
              // Gracefully handle missing images
              (e.target as HTMLImageElement).style.backgroundColor = '#f0e8f2';
            }} />
          </div>
          <p className="mt-3 text-center text-sm text-[#533f45]">{memory.caption}</p>
        </motion.button>
      ))}
    </div>
  );
}

import { motion } from 'framer-motion';
import type { LegalDocument } from '@/data/legal';

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

interface LegalBodyProps {
  doc: LegalDocument;
}

/** 法務文書の本文（各条）と、末尾の英語サマリ */
export function LegalBody({ doc }: LegalBodyProps) {
  return (
    <div className="mt-14 md:mt-20 max-w-3xl">
      {doc.blocks.map((block, index) => (
        <motion.section
          key={block.heading}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease: EASE, delay: (index % 4) * 0.05 }}
          className="border-t border-line py-8 md:py-10"
        >
          <h2 className="font-display text-lg md:text-2xl font-bold tracking-tight text-ink">
            {block.heading}
          </h2>

          {block.paragraphs?.map((paragraph) => (
            <p
              key={paragraph}
              className="mt-4 text-sm md:text-base text-mute leading-loose"
            >
              {paragraph}
            </p>
          ))}

          {block.items && (
            <ul className="mt-4 space-y-3">
              {block.items.map((item) => (
                <li
                  key={item}
                  className="flex gap-3 text-sm md:text-base text-mute leading-loose"
                >
                  <span aria-hidden className="mt-[0.9em] h-px w-4 shrink-0 bg-line" />
                  <span className="min-w-0 break-words">{item}</span>
                </li>
              ))}
            </ul>
          )}
        </motion.section>
      ))}

      <motion.section
        lang="en"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.6, ease: EASE }}
        className="border-t border-line py-8 md:py-10"
      >
        <h2 className="font-mono text-[0.65rem] md:text-xs uppercase tracking-[0.3em] text-accent">
          {doc.summaryEn.heading}
        </h2>
        {doc.summaryEn.paragraphs.map((paragraph) => (
          <p
            key={paragraph}
            className="mt-4 text-sm md:text-base text-mute leading-loose"
          >
            {paragraph}
          </p>
        ))}
      </motion.section>
    </div>
  );
}

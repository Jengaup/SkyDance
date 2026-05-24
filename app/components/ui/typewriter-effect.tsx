"use client";
import { cn } from "@/lib/utils";
import { motion, stagger, useAnimate, useInView } from "motion/react";
import { useEffect } from "react";

type Word = { text: string; className?: string };

export function TypewriterEffect({
  words,
  className,
  cursorClassName,
}: {
  words: Word[];
  className?: string;
  cursorClassName?: string;
}) {
  const wordsArray = words.map((word) => ({
    ...word,
    text: word.text.split(""),
  }));

  const [scope, animate] = useAnimate();
  const isInView = useInView(scope);

  useEffect(() => {
    if (isInView) {
      animate(
        "span",
        { display: "inline-block", opacity: 1, width: "fit-content" },
        { duration: 0.3, delay: stagger(0.08), ease: "easeInOut" }
      );
    }
  }, [isInView, animate]);

  return (
    <div className={cn("text-center font-bold", className)}>
      <motion.div ref={scope} className="inline">
        {wordsArray.map((word, wordIdx) => (
          <div key={wordIdx} className="inline-block">
            {word.text.map((char, charIdx) => (
              <motion.span
                key={charIdx}
                initial={{ opacity: 0, display: "none" }}
                className={cn("text-white opacity-0 hidden", word.className)}
              >
                {char}
              </motion.span>
            ))}
            <span className="inline-block">&nbsp;</span>
          </div>
        ))}
      </motion.div>
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, repeat: Infinity, repeatType: "reverse" }}
        className={cn(
          "inline-block rounded-sm w-[3px] h-8 md:h-12 lg:h-16 bg-amber-400 ml-1 align-middle",
          cursorClassName
        )}
      />
    </div>
  );
}

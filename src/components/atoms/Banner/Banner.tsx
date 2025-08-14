interface BannerProps {
  message: string;
  description?: string;
}

export const Banner = ({ message, description }: BannerProps) => {
  return (
    <section className="dark:bg-primary flex min-h-80 flex-col items-center justify-center gap-1 rounded-xl border border-neutral-200 bg-neutral-50 p-8 dark:border-white/15">
      <h3 className="text-2xl font-bold">{message}</h3>
      {description && (
        <p className="text-xl font-semibold text-neutral-500 dark:text-neutral-400">
          {description}
        </p>
      )}
    </section>
  );
};
